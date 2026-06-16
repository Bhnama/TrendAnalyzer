import streamlit as st
import pandas as pd
import numpy as np
from pathlib import Path
from datetime import datetime, timedelta
import os
from db_utils import (
    load_products,
    load_customers,
    load_sales,
    load_reviews,
    save_products,
    save_customers,
    save_sales,
    save_reviews,
    save_order,
    load_orders,
    init_db
)
from data_utils import DataGenerator
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
                 padding: 28px; border-radius: 12px; color: white; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
    .metric-card { background: linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%); padding: 18px; border-radius: 12px; box-shadow: 0 6px 18px rgba(102,126,234,0.08); }
    .hero { padding: 18px; border-radius: 12px; color: white; margin-bottom: 10px; }
    .product-card { background: #ffffff; padding: 12px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.06); text-align:center; }
    .product-title { font-weight:700; margin-top:8px; }
    .small-muted { color:#6b6f76; font-size:12px }
    .kpi-row > div { padding: 8px }
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
    products_df = DataGenerator.generate_products(10)
    customers_df = DataGenerator.generate_customer_segments(500)
    sales_df = DataGenerator.generate_sales_history(products_df, customers_df, days=365)
    reviews_df = DataGenerator.generate_customer_reviews(products_df, customers_df, n_reviews=200)
    return products_df, customers_df, sales_df, reviews_df

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

# Load data: prefer DB if available, else generate and persist
DB_FILE = "trendanalyzer.db"
if os.path.exists(DB_FILE):
    products_df = load_products(DB_FILE)
    customers_df = load_customers(DB_FILE)
    sales_df = load_sales(DB_FILE)
    reviews_df = load_reviews(DB_FILE)
    if any(df is None or df.empty for df in [products_df, customers_df, sales_df, reviews_df]):
        products_df, customers_df, sales_df, reviews_df = generate_sample_data()
        init_db(DB_FILE)
        save_products(products_df, DB_FILE)
        save_customers(customers_df, DB_FILE)
        save_sales(sales_df, DB_FILE)
        save_reviews(reviews_df, DB_FILE)
else:
    products_df, customers_df, sales_df, reviews_df = generate_sample_data()
    init_db(DB_FILE)
    save_products(products_df, DB_FILE)
    save_customers(customers_df, DB_FILE)
    save_sales(sales_df, DB_FILE)
    save_reviews(reviews_df, DB_FILE)

# ============== SIDEBAR NAVIGATION ==============
with st.sidebar:
    st.markdown("### 🔍 TrendAnalyzer Analytics")
    st.markdown("---")
    page = st.radio("Select Page:", [
        "🏠 Home",
        "🛍️ Smart Products",
        "🎯 AI Recommendations",
        "📊 Sales Analytics",
        "👥 Customer Segmentation",
        "💬 Sentiment Analysis",
        "🔮 Price Prediction",
        "📈 Demand Forecast",
        "🛒 Cart",
        "💳 Checkout"
    ])

# ============== HOME PAGE ==============
if page == "🏠 Home":
    st.markdown("<div class='ai-header'><h1>🔍 TrendAnalyzer - Analytics Dashboard</h1></div>", unsafe_allow_html=True)
    
    st.markdown('<div class="ai-header"><h1 style="margin:0">🔍 TrendAnalyzer</h1><p style="margin:0.2rem 0 0.6rem 0; opacity:0.95">AI-powered analytics • Demand forecasting • Price optimization</p></div>', unsafe_allow_html=True)

    # KPI cards
    st.markdown('<div class="kpi-row">', unsafe_allow_html=True)
    k1, k2, k3, k4 = st.columns(4)
    with k1:
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Total Products", len(products_df), "🛍️")
        st.markdown('</div>', unsafe_allow_html=True)
    with k2:
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Avg Rating", f"{products_df['Rating'].mean():.1f}/5", "⭐")
        st.markdown('</div>', unsafe_allow_html=True)
    with k3:
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Total Inventory", products_df['Stock'].sum(), "📦")
        st.markdown('</div>', unsafe_allow_html=True)
    with k4:
        st.markdown('<div class="metric-card">', unsafe_allow_html=True)
        st.metric("Customer Count", len(customers_df), "👥")
        st.markdown('</div>', unsafe_allow_html=True)
    st.markdown('</div>', unsafe_allow_html=True)

    st.markdown('---')
    st.subheader('📌 Customer Insights')
    segment_counts = customers_df['Segment'].value_counts().to_dict()
    st.write('**Customer segments:**', segment_counts)
    st.write(f'**Average Customer Lifetime Value:** ${customers_df['Lifetime_Value'].mean():,.0f}')
    
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
    
    # Display products as attractive cards in a responsive grid
    if filtered_df.empty:
        st.info("No products found")
    else:
        for i in range(0, len(filtered_df), 3):
            cols = st.columns(3, gap='large')
            batch = filtered_df.iloc[i:i+3]
            for col_idx in range(3):
                with cols[col_idx]:
                    if col_idx < len(batch):
                        product = batch.iloc[col_idx]
                        img_url = f"https://via.placeholder.com/320x180.png?text={product['Product'].replace(' ', '+')}"
                        st.markdown('<div class="product-card">', unsafe_allow_html=True)
                        st.image(img_url, use_column_width=True)
                        st.markdown(f"<div class=\"product-title\">{product['Product']}</div>", unsafe_allow_html=True)
                        st.markdown(f"<div class=\"small-muted\">{product['Category']} • Supplier: {product.get('Supplier', 'N/A')}</div>", unsafe_allow_html=True)
                        st.write(f"Price: ${product['Price']}  |  Rating: {product['Rating']}/5")
                        if product['Stock'] > 5:
                            st.success(f"{product['Stock']} in stock")
                        elif product['Stock'] > 0:
                            st.warning(f"{product['Stock']} left")
                        else:
                            st.error("Out of stock")
                        st.button("Add to Cart", key=f"add_{i}_{col_idx}")
                        st.markdown('</div>', unsafe_allow_html=True)

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
    
    tab1, tab2, tab3, tab4 = st.tabs(["Revenue Trend", "Product Performance", "Category Analysis", "Channel Distribution"])
    
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
    
    with tab4:
        channel_sales = sales_df.groupby('Channel')['Revenue'].sum().sort_values(ascending=False)
        fig = px.bar(
            x=channel_sales.values,
            y=channel_sales.index,
            orientation='h',
            title="Revenue by Sales Channel",
            labels={"x": "Revenue ($)", "y": "Channel"}
        )
        st.plotly_chart(fig, width='stretch')

# ============== SENTIMENT ANALYSIS ==============
elif page == "💬 Sentiment Analysis":
    st.subheader("💬 AI Sentiment Analysis")
    
    col1, col2 = st.columns([2, 1])
    with col1:
        product = st.selectbox("Select product for review analysis:", products_df['Product'].values)
    with col2:
        filtered_reviews = reviews_df[reviews_df['Product'] == product]
        st.metric("Total Reviews", len(filtered_reviews))
        st.metric("Avg Review Rating", f"{filtered_reviews['Rating'].mean():.1f}/5" if len(filtered_reviews) else "N/A")
    
    st.markdown("### Recent Reviews & Sentiment Analysis")
    
    if len(filtered_reviews) == 0:
        st.warning("No reviews found for this product yet.")
    else:
        sentiments_data = []
        recent_reviews = filtered_reviews.sort_values('Date', ascending=False).head(10)
        for _, row in recent_reviews.iterrows():
            sentiment, score = analyze_sentiment(row['Review'])
            sentiments_data.append({"Sentiment": sentiment, "Score": score})
            col1, col2 = st.columns([4, 1])
            with col1:
                st.write(f"💭 {row['Review']}")
            with col2:
                st.write(f"{sentiment}")

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

# ============== CUSTOMER SEGMENTATION ==============
elif page == "👥 Customer Segmentation":
    st.subheader("👥 Customer Segmentation & Insights")

    # Segment counts
    seg_counts = customers_df['Segment'].value_counts()
    fig_seg = px.pie(values=seg_counts.values, names=seg_counts.index, title="Customer Segments")
    st.plotly_chart(fig_seg, use_container_width=True)

    col1, col2 = st.columns(2)
    with col1:
        st.markdown("### Lifetime Value Distribution")
        fig_ltv = px.histogram(customers_df, x='Lifetime_Value', nbins=30, title='Lifetime Value (CLV)')
        st.plotly_chart(fig_ltv, use_container_width=True)

    with col2:
        st.markdown("### Churn Risk by Segment")
        fig_churn = px.box(customers_df, x='Segment', y='Churn_Risk', points='outliers', title='Churn Risk Distribution')
        st.plotly_chart(fig_churn, use_container_width=True)

    st.markdown("---")
    st.markdown("### Top Customers by Lifetime Value")
    top_customers = customers_df.sort_values('Lifetime_Value', ascending=False).head(10)
    st.table(top_customers[['Customer_ID', 'Segment', 'Lifetime_Value', 'Avg_Order_Value']].reset_index(drop=True))

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
    
    # Combine historical and forecast into a single plot-ready series
    hist_len = min(30, len(historical_demand))
    historical_values = historical_demand[-hist_len:]
    historical_days = np.arange(len(historical_demand) - hist_len, len(historical_demand))
    forecast_days_arr = np.arange(len(historical_demand), len(historical_demand) + forecast_days)

    all_data = pd.DataFrame({
        'Day': np.concatenate([historical_days, forecast_days_arr]),
        'Demand': np.concatenate([historical_values, forecast]),
        'Type': ['Historical'] * len(historical_values) + ['Forecast'] * len(forecast)
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
        name = st.text_input("Full Name")
        email = st.text_input("Email")
        address = st.text_input("Address")
    
    with col2:
        card_number = st.text_input("Card Number")
        expiry = st.text_input("Expiry Date (MM/YY)")
        cvv = st.text_input("CVV")
    
    if st.button("🎉 Complete Purchase", use_container_width=True):
        # Create a simple guest order and persist to DB
        import json
        customer_id = f"GUEST_{int(datetime.now().timestamp())}"
        order = {
            'Customer_ID': customer_id,
            'Order_Date': datetime.now().isoformat(),
            'Total': 0.0,
            'Items': json.dumps([]),
            'Payment_Status': 'Paid',
            'Channel': 'Web'
        }
        oid = save_order(order)
        st.balloons()
        st.success(f"✅ Thank you for your purchase! Order ID: {oid}")
