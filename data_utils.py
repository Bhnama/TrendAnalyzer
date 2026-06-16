"""
Data module for TrendAnalyzer
Handles sample data generation, processing, and analytics calculations
""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import json


class DataGenerator:
    """Generate realistic e-commerce data for demonstration"""
    
    @staticmethod
    def generate_products(n_products=10):
        """Generate sample product catalog"""
        categories = ["Electronics", "Accessories", "Office", "Gaming", "Smart Devices"]
        products = []
        
        product_names = [
            "Laptop", "Mouse", "Keyboard", "Monitor", "Headphones",
            "Webcam", "Mousepad", "USB Hub", "Desk Lamp", "Phone Stand",
            "Keyboard", "External SSD", "Webcam Tripod", "Monitor Stand", "Charging Station"
        ]
        
        for i in range(min(n_products, len(product_names))):
            products.append({
                "Product": product_names[i],
                "Category": categories[i % len(categories)],
                "Price": np.random.randint(15, 1000),
                "Stock": np.random.randint(1, 50),
                "Rating": round(np.random.uniform(3.5, 5.0), 1),
                "Reviews": np.random.randint(10, 500),
                "Cost": np.random.randint(5, 400),
                "Supplier": f"Supplier_{i % 5 + 1}"
            })
        
        return pd.DataFrame(products)
    
    @staticmethod
    def generate_sales_history(products_df, days=365):
        """Generate historical sales data"""
        sales = []
        dates = pd.date_range(start=datetime.now() - timedelta(days=days), 
                             end=datetime.now(), 
                             freq='D')
        
        for date in dates:
            for _, product in products_df.iterrows():
                if np.random.random() > 0.3:  # 70% chance of sale
                    sales.append({
                        "Date": date,
                        "Product": product['Product'],
                        "Category": product['Category'],
                        "Units_Sold": np.random.randint(1, 15),
                        "Unit_Price": product['Price'],
                        "Revenue": 0  # Will be calculated
                    })
        
        sales_df = pd.DataFrame(sales)
        sales_df['Revenue'] = sales_df['Units_Sold'] * sales_df['Unit_Price']
        return sales_df
    
    @staticmethod
    def generate_customer_reviews(products_df, n_reviews=100):
        """Generate sample customer reviews"""
        sample_reviews = [
            "Amazing product! Exactly what I needed. Fast shipping!",
            "Great quality and good price. Highly recommend!",
            "Good product but took longer than expected to arrive.",
            "Not as described. Disappointed with the quality.",
            "Perfect! Works great and arrived quickly.",
            "Average product, nothing special about it.",
            "Excellent customer service! Very satisfied.",
            "Poor quality, would not buy again.",
            "Good value for money. Very happy!",
            "Decent product but could be better for the price.",
        ]
        
        reviews = []
        for _ in range(n_reviews):
            reviews.append({
                "Product": np.random.choice(products_df['Product'].values),
                "Rating": np.random.randint(1, 6),
                "Review": np.random.choice(sample_reviews),
                "Date": datetime.now() - timedelta(days=np.random.randint(1, 365))
            })
        
        return pd.DataFrame(reviews)
    
    @staticmethod
    def generate_customer_segments(n_customers=1000):
        """Generate customer segment data"""
        segments = []
        segment_types = ["Premium", "Regular", "Budget", "Casual", "VIP"]
        
        for i in range(n_customers):
            segment = np.random.choice(segment_types)
            segments.append({
                "Customer_ID": f"CUST_{i:05d}",
                "Segment": segment,
                "Lifetime_Value": np.random.randint(50, 10000),
                "Purchase_Frequency": np.random.randint(1, 50),
                "Avg_Order_Value": np.random.randint(20, 500),
                "Days_Since_Purchase": np.random.randint(1, 365),
                "Churn_Risk": round(np.random.uniform(0, 1), 2)
            })
        
        return pd.DataFrame(segments)


class DataProcessor:
    """Process and transform e-commerce data"""
    
    @staticmethod
    def calculate_kpis(sales_df, products_df):
        """Calculate key performance indicators"""
        total_revenue = sales_df['Revenue'].sum()
        total_units = sales_df['Units_Sold'].sum()
        avg_order_value = sales_df['Revenue'].sum() / len(sales_df) if len(sales_df) > 0 else 0
        
        return {
            "Total Revenue": f"${total_revenue:,.0f}",
            "Total Units Sold": f"{total_units:,.0f}",
            "Avg Order Value": f"${avg_order_value:.2f}",
            "Products": len(products_df),
            "Total Inventory": products_df['Stock'].sum()
        }
    
    @staticmethod
    def get_top_products(sales_df, n=5, metric='Revenue'):
        """Get top performing products"""
        if metric == 'Revenue':
            top = sales_df.groupby('Product')['Revenue'].sum().sort_values(ascending=False).head(n)
        elif metric == 'Units':
            top = sales_df.groupby('Product')['Units_Sold'].sum().sort_values(ascending=False).head(n)
        else:
            top = sales_df.groupby('Product')['Product'].count().sort_values(ascending=False).head(n)
        
        return top
    
    @staticmethod
    def identify_trends(sales_df):
        """Identify sales trends"""
        recent = sales_df[sales_df['Date'] > datetime.now() - timedelta(days=30)]
        previous = sales_df[(sales_df['Date'] > datetime.now() - timedelta(days=60)) & 
                           (sales_df['Date'] <= datetime.now() - timedelta(days=30))]
        
        recent_revenue = recent['Revenue'].sum()
        previous_revenue = previous['Revenue'].sum()
        
        trend = ((recent_revenue - previous_revenue) / previous_revenue * 100) if previous_revenue > 0 else 0
        
        return {
            "Recent (30d)": f"${recent_revenue:,.0f}",
            "Previous (30d)": f"${previous_revenue:,.0f}",
            "Trend": f"{trend:+.1f}%"
        }


def save_to_json(data, filename):
    """Save data to JSON file"""
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2, default=str)


def load_from_json(filename):
    """Load data from JSON file"""
    with open(filename, 'r') as f:
        return json.load(f)
