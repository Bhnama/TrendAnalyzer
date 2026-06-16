import streamlit as st
import pandas as pd
import numpy as np
from pathlib import Path
import pickle
from datetime import datetime, timedelta
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.decomposition import PCA
import plotly.express as px
import plotly.graph_objects as go
from textblob import TextBlob
import warnings
warnings.filterwarnings("ignore")

# Page configuration
st.set_page_config(
    page_title="🔍 TrendAnalyzer - Analytics Dashboard", 
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
<style>
    .ai-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                 padding: 20px; border-radius: 10px; color: white; }
    .metric-card { background: #f0f2f6; padding: 15px; border-radius: 8px; }
</style>
""", unsafe_allow_html=True)

# ============== AI/ML MODELS ==============

@st.cache_resource
def load_models():
    """Load or create ML models"""
    return {
        "price_predictor": RandomForestRegressor(n_estimators=100, random_state=42),
        "demand_forecast": RandomForestRegressor(n_estimators=100, random_state=42),
        "churn_predictor": RandomForestClassifier(n_estimators=100, random_state=42)
    }

@st.cache_data
def generate_sample_data():
    """Generate realistic TrendAnalyzer sample data"""
    np.random.seed(42)
    
    products = {
        "Product": ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones", 
                   "Webcam", "Mousepad", "USB Hub", "Desk Lamp", "Phone Stand"],
        "Category": ["Electronics", "Accessories", "Accessories", "Electronics", "Electronics",
                    "Accessories", "Accessories", "Accessories", "Office", "Accessories"],
        "Price": [999, 29, 79, 299, 149, 89, 15, 35, 45, 19],
        "Stock": [5, 15, 8, 3, 12, 20, 30, 25, 18, 40],
        "Rating": [4.8, 4.2, 4.5, 4.7, 4.6, 4.3, 4.1, 4.4, 4.5, 4.2],
        "Reviews": [245, 89, 120, 156, 198, 76, 92, 108, 145, 234]
    }
    
    # Historical sales data
    dates = pd.date_range(start='2024-01-01', periods=365, freq='D')
    sales_data = []
    for _ in range(365):
        for product in products["Product"]:
            sales_data.append({
                "Date": np.random.choice(dates),
                "Product": product,
                "Units_Sold": np.random.randint(1, 20),
                "Revenue": np.random.randint(100, 10000)
            })
    
    return pd.DataFrame(products), pd.DataFrame(sales_data)

@st.cache_data
def predict_product_demand(product_name, historical_data):
    """AI-powered demand forecasting"""
    product_sales = historical_data[historical_data['Product'] == product_name]['Units_Sold'].values
    if len(product_sales) > 0:
        trend = np.polyfit(range(len(product_sales)), product_sales, 2)
        future_demand = np.polyval(trend, len(product_sales) + 7)
        return max(0, int(future_demand))
    return np.random.randint(5, 20)

def get_product_recommendations(product_idx, products_df, n_recommendations=3):
    """ML-based product recommendation engine"""
    # Create feature vectors for similarity
    features = products_df[["Price", "Rating", "Stock"]].values
    scaler = StandardScaler()
    features_scaled = scaler.fit_transform(features)
    
    # Calculate similarity
    current_product = features_scaled[product_idx]
    similarities = np.linalg.norm(features_scaled - current_product, axis=1)
    
    # Get top recommendations (excluding current product)
    rec_indices = np.argsort(similarities)[1:n_recommendations+1]
    return products_df.iloc[rec_indices]

def analyze_sentiment(text):
    """AI sentiment analysis for reviews"""
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    
    if polarity > 0.5:
        return "😍 Very Positive", polarity
    elif polarity > 0.1:
        return "😊 Positive", polarity
    elif polarity > -0.1:
        return "😐 Neutral", polarity
    elif polarity > -0.5:
        return "😕 Negative", polarity
    else:
        return "😠 Very Negative", polarity

# Load data
models = load_models()
products_df, sales_df = generate_sample_data()

# ============== SIDEBAR NAVIGATION ==============
with st.sidebar:
    st.markdown("### 🔍 TrendAnalyzer Analytics")
    st.markdown("---")
    page = st.radio("Select Page:", [
        "🏠 Home",
        "🛍️ Smart Products",
        "🎯 AI Recommendations",
        "📊 Sales Analytics",
        "💬 Sentiment Analysis",
        "🔮 Price Prediction",
        "📈 Demand Forecast",
        "🛒 Cart",
        "💳 Checkout"
    ])

# ============== HOME PAGE ==============
if page == "🏠 Home":
    st.markdown("<div class='ai-header'><h1>🔍 TrendAnalyzer - Analytics Dashboard</h1></div>", unsafe_allow_html=True)
    
    col1, col2, col3, col4 = st.columns(4)
    with col1:
        st.metric("Total Products", len(products_df), "🛍️")
    with col2:
        st.metric("Avg Rating", f"{products_df['Rating'].mean():.1f}/5", "⭐")
    with col3:
        st.metric("Total Inventory", products_df['Stock'].sum(), "📦")
    with col4:
        st.metric("Revenue (7d)", f"${sales_df['Revenue'].sum()/50:,.0f}", "💰")
    
    st.markdown("---")
    st.subheader("✨ AI-Powered Features")
    
    features = [
        ("🎯 Smart Recommendations", "ML-powered suggestions based on product similarity"),
        ("🔮 Price Prediction", "Predict optimal pricing with advanced algorithms"),
        ("📊 Sales Analytics", "AI-driven insights into customer behavior"),
        ("💬 Sentiment Analysis", "Real-time customer sentiment from reviews"),
        ("📈 Demand Forecasting", "Predict future demand using time-series ML"),
        ("🎨 Personalization", "Custom experience based on user preferences")
    ]
    
    cols = st.columns(2)
    for i, (title, desc) in enumerate(features):
        with cols[i % 2]:
            st.info(f"**{title}**\n{desc}")

# ============== SMART PRODUCTS PAGE ==============
elif page == "🛍️ Smart Products":
    st.subheader("🛍️ Smart Product Catalog")
    
    col1, col2 = st.columns([3, 1])
    with col1:
        search = st.text_input("🔍 Search products...")
    with col2:
        sort_by = st.selectbox("Sort by", ["Price", "Rating", "Stock", "Reviews"])
    
    # Filter and sort
    filtered_df = products_df.copy()
    if search:
        filtered_df = filtered_df[filtered_df['Product'].str.contains(search, case=False)]
    
    if sort_by == "Price":
        filtered_df = filtered_df.sort_values('Price')
    elif sort_by == "Rating":
        filtered_df = filtered_df.sort_values('Rating', ascending=False)
    elif sort_by == "Reviews":
        filtered_df = filtered_df.sort_values('Reviews', ascending=False)
    
    # Display products with AI insights
    for idx, product in filtered_df.iterrows():
        col1, col2, col3, col4 = st.columns([2, 1, 1, 1])
        
        with col1:
            st.markdown(f"**{product['Product']}**")
            st.caption(f"Category: {product['Category']}")
        
        with col2:
            st.metric("Price", f"${product['Price']}", "💵")
        
        with col3:
            st.metric("Rating", f"{product['Rating']}/5", "⭐")
        
        with col4:
            if product['Stock'] > 5:
                st.success(f"✅ {product['Stock']} in stock")
            elif product['Stock'] > 0:
                st.warning(f"⚠️ {product['Stock']} left")
            else:
                st.error("❌ Out of stock")

# ============== AI RECOMMENDATIONS ==============
elif page == "🎯 AI Recommendations":
    st.subheader("🎯 AI-Powered Product Recommendations")
    
    col1, col2 = st.columns(2)
    
    with col1:
        selected_product = st.selectbox("Select a product:", products_df['Product'].values)
        product_idx = products_df[products_df['Product'] == selected_product].index[0]
    
    with col2:
        n_recs = st.slider("Number of recommendations:", 1, 5, 3)
    
    # Get recommendations
    recommendations = get_product_recommendations(product_idx, products_df, n_recs)
    
    st.markdown(f"### 📦 If you like **{selected_product}**, you might also like:")
    
    for idx, (_, rec) in enumerate(recommendations.iterrows(), 1):
        col1, col2, col3 = st.columns([2, 1, 1])
        with col1:
            st.markdown(f"**{idx}. {rec['Product']}** ({rec['Category']})")
        with col2:
            st.metric("Price", f"${rec['Price']}", "💵")
        with col3:
            st.metric("Rating", f"{rec['Rating']}/5", "⭐")

# ============== SALES ANALYTICS ==============
elif page == "📊 Sales Analytics":
    st.subheader("📊 AI-Powered Sales Analytics")
    
    tab1, tab2, tab3 = st.tabs(["Revenue Trend", "Product Performance", "Category Analysis"])
    
    with tab1:
        daily_revenue = sales_df.groupby('Date')['Revenue'].sum().sort_index().tail(30)
        fig = px.line(
            x=daily_revenue.index, 
            y=daily_revenue.values,
            title="30-Day Revenue Trend",
            labels={"x": "Date", "y": "Revenue ($)"}
        )
        st.plotly_chart(fig, width='stretch')
    
    with tab2:
        product_sales = sales_df.groupby('Product')['Units_Sold'].sum().sort_values(ascending=False)
        fig = px.bar(
            x=product_sales.values,
            y=product_sales.index,
            orientation='h',
            title="Units Sold by Product",
            labels={"x": "Units Sold", "y": "Product"}
        )
        st.plotly_chart(fig, width='stretch')
    
    with tab3:
        product_category = products_df.merge(sales_df, on='Product')
        category_sales = product_category.groupby('Category')['Units_Sold'].sum()
        fig = px.pie(
            values=category_sales.values,
            names=category_sales.index,
            title="Sales Distribution by Category"
        )
        st.plotly_chart(fig, width='stretch')

# ============== SENTIMENT ANALYSIS ==============
elif page == "💬 Sentiment Analysis":
    st.subheader("💬 AI Sentiment Analysis")
    
    col1, col2 = st.columns([2, 1])
    with col1:
        product = st.selectbox("Select product for review analysis:", products_df['Product'].values)
    with col2:
        st.write("")
        st.metric("Total Reviews", products_df[products_df['Product'] == product]['Reviews'].values[0])
    
    # Sample reviews
    sample_reviews = [
        "Amazing product! Works perfectly and arrived quickly.",
        "Good quality but a bit pricey compared to competitors.",
        "Not as expected. Poor quality and slow delivery.",
        "Excellent customer service and great product!",
        "Average product, nothing special about it."
    ]
    
    st.markdown("### Recent Reviews & Sentiment Analysis")
    
    sentiments_data = []
    for review in sample_reviews:
        sentiment, score = analyze_sentiment(review)
        sentiments_data.append({"Sentiment": sentiment, "Score": score})
        
        col1, col2 = st.columns([4, 1])
        with col1:
            st.write(f"💭 {review}")
        with col2:
            st.write(f"{sentiment}")
    
    # Sentiment distribution
    df_sentiments = pd.DataFrame(sentiments_data)
    fig = px.histogram(
        x=df_sentiments['Sentiment'],
        title="Sentiment Distribution",
        labels={"x": "Sentiment", "count": "Count"}
    )
    st.plotly_chart(fig, width='stretch')

# ============== PRICE PREDICTION ==============
elif page == "🔮 Price Prediction":
    st.subheader("🔮 AI Price Prediction & Optimization")
    
    selected_product = st.selectbox("Select product:", products_df['Product'].values)
    product_data = products_df[products_df['Product'] == selected_product].iloc[0]
    
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("Current Price", f"${product_data['Price']}", "💵")
    with col2:
        st.metric("Rating", f"{product_data['Rating']}/5", "⭐")
    with col3:
        st.metric("Demand", "High", "📈")
    
    st.markdown("---")
    st.markdown("### 🤖 AI Price Recommendations")
    
    # Calculate optimal price
    base_price = product_data['Price']
    demand_factor = 1.1 if product_data['Stock'] < 10 else 1.0
    rating_factor = 1 + (product_data['Rating'] - 4.0) * 0.1
    
    optimal_price = base_price * demand_factor * rating_factor
    
    rec_col1, rec_col2, rec_col3 = st.columns(3)
    with rec_col1:
        st.info(f"**Conservative**\n${base_price * 0.95:.2f}\n(5% discount for volume)")
    with rec_col2:
        st.success(f"**Optimal** ✓\n${optimal_price:.2f}\n(Market-based)")
    with rec_col3:
        st.warning(f"**Premium**\n${base_price * 1.15:.2f}\n(High demand)")
    
    # Price history chart
    price_history = np.linspace(base_price * 0.85, base_price * 1.25, 30)
    fig = px.line(
        x=range(len(price_history)),
        y=price_history,
        title="Price Optimization Scenario",
        labels={"x": "Time Period", "y": "Price ($)"}
    )
    st.plotly_chart(fig, width='stretch')

# ============== DEMAND FORECAST ==============
elif page == "📈 Demand Forecast":
    st.subheader("📈 AI-Powered Demand Forecasting")
    
    selected_product = st.selectbox("Select product for forecast:", products_df['Product'].values)
    
    # Get forecast
    forecast_days = 30
    historical_demand = sales_df[sales_df['Product'] == selected_product]['Units_Sold'].values
    
    if len(historical_demand) > 0:
        # Simple trend analysis
        trend = np.polyfit(range(len(historical_demand)), historical_demand, 2)
        future_days = np.arange(len(historical_demand), len(historical_demand) + forecast_days)
        forecast = np.polyval(trend, future_days).clip(0)
    else:
        forecast = np.random.randint(5, 15, forecast_days)
    
    # Combine historical and forecast
    all_data = pd.DataFrame({
        'Day': np.arange(len(historical_demand) + forecast_days),
        'Demand': np.concatenate([historical_demand[:30], forecast[:30]]),
        'Type': ['Historical'] * min(30, len(historical_demand)) + ['Forecast'] * (30 - min(30, len(historical_demand)))
    })
    
    fig = px.line(
        all_data,
        x='Day',
        y='Demand',
        color='Type',
        title=f"{selected_product} - 30-Day Demand Forecast",
        labels={"Demand": "Units", "Day": "Day"},
        color_discrete_map={'Historical': '#667eea', 'Forecast': '#764ba2'}
    )
    st.plotly_chart(fig, width='stretch')
    
    st.markdown(f"**Avg Forecasted Demand:** {forecast.mean():.0f} units/day")

# ============== CART PAGE ==============
elif page == "🛒 Cart":
    st.subheader("🛒 Shopping Cart")
    st.info("🎯 AI Recommendation: Add complementary products to your cart for better value!")
    st.write("Your cart is currently empty")

# ============== CHECKOUT PAGE ==============
elif page == "💳 Checkout":
    st.subheader("💳 Secure Checkout")
    col1, col2 = st.columns(2)
    
    with col1:
        st.text_input("Full Name")
        st.text_input("Email")
        st.text_input("Address")
    
    with col2:
        st.text_input("Card Number")
        st.text_input("Expiry Date (MM/YY)")
        st.text_input("CVV")
    
    if st.button("🎉 Complete Purchase", use_container_width=True):
        st.balloons()
        st.success("✅ Thank you for your purchase! Your order has been confirmed.")
