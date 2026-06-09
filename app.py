import streamlit as st
import pandas as pd
from pathlib import Path

st.set_page_config(page_title="E-Commerce Store", layout="wide")

st.title("🛍️ E-Commerce Store")
st.markdown("---")

# Sidebar navigation
with st.sidebar:
    st.header("Navigation")
    page = st.radio("Select Page:", ["Home", "Products", "Cart", "Checkout"])

# Home Page
if page == "Home":
    st.subheader("Welcome to our E-Commerce Store")
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.info("📦 Wide Selection")
        st.write("Browse thousands of products")
    
    with col2:
        st.success("💰 Best Prices")
        st.write("Competitive pricing guaranteed")
    
    with col3:
        st.warning("🚚 Fast Shipping")
        st.write("Quick delivery to your door")

# Products Page
elif page == "Products":
    st.subheader("Our Products")
    
    # Create sample product data
    products_df = pd.DataFrame({
        "Product": ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"],
        "Price": [999, 29, 79, 299, 149],
        "Stock": [5, 15, 8, 3, 12]
    })
    
    st.dataframe(products_df, use_container_width=True)

# Cart Page
elif page == "Cart":
    st.subheader("Shopping Cart")
    st.info("Your cart is currently empty")

# Checkout Page
elif page == "Checkout":
    st.subheader("Checkout")
    st.text_input("Full Name")
    st.text_input("Email")
    st.text_input("Address")
    
    if st.button("Complete Purchase"):
        st.success("Thank you for your purchase!")
