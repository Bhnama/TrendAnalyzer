"""
Machine Learning Utilities for E-Commerce Platform
Includes recommendation engine, price prediction, demand forecasting, and sentiment analysis
"""

import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.decomposition import PCA
from textblob import TextBlob
import warnings
warnings.filterwarnings("ignore")


class ProductRecommendationEngine:
    """AI-powered product recommendation system using collaborative filtering"""
    
    def __init__(self, products_df):
        self.products_df = products_df
        self.scaler = StandardScaler()
        self.features = self._prepare_features()
    
    def _prepare_features(self):
        """Prepare product features for similarity calculation"""
        features = self.products_df[["Price", "Rating", "Stock", "Reviews"]].values
        return self.scaler.fit_transform(features)
    
    def get_recommendations(self, product_idx, n_recommendations=3):
        """Get similar products based on features"""
        current_product = self.features[product_idx]
        similarities = np.linalg.norm(self.features - current_product, axis=1)
        rec_indices = np.argsort(similarities)[1:n_recommendations+1]
        return self.products_df.iloc[rec_indices]


class PricePredictionModel:
    """AI model for optimal price prediction"""
    
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
    
    def predict_optimal_price(self, product_data):
        """
        Predict optimal price based on product attributes
        
        Args:
            product_data: dict with keys 'price', 'rating', 'stock', 'reviews'
        
        Returns:
            dict with price recommendations (conservative, optimal, premium)
        """
        base_price = product_data.get('price', 100)
        rating = product_data.get('rating', 4.0)
        stock = product_data.get('stock', 10)
        reviews = product_data.get('reviews', 50)
        
        # Demand factor
        demand_factor = 1.1 if stock < 10 else 0.95 if stock > 50 else 1.0
        
        # Quality factor
        quality_factor = 1 + (rating - 4.0) * 0.1
        
        # Popularity factor
        popularity_factor = 1 + (min(reviews, 500) / 500) * 0.05
        
        optimal_price = base_price * demand_factor * quality_factor * popularity_factor
        
        return {
            'conservative': base_price * 0.95,
            'optimal': optimal_price,
            'premium': base_price * 1.15
        }


class DemandForecastingModel:
    """AI model for sales demand forecasting"""
    
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
    
    def forecast_demand(self, historical_data, periods=30):
        """
        Forecast future demand using time-series analysis
        
        Args:
            historical_data: array of historical sales units
            periods: number of periods to forecast
        
        Returns:
            array of forecasted demand
        """
        if len(historical_data) < 5:
            return np.full(periods, np.mean(historical_data)) if len(historical_data) > 0 else np.full(periods, 10)
        
        # Fit polynomial trend
        trend = np.polyfit(range(len(historical_data)), historical_data, 2)
        future_periods = np.arange(len(historical_data), len(historical_data) + periods)
        forecast = np.polyval(trend, future_periods).clip(0)
        
        return forecast


class SentimentAnalyzer:
    """AI sentiment analysis for customer reviews"""
    
    @staticmethod
    def analyze(review_text):
        """
        Analyze sentiment of review text
        
        Args:
            review_text: customer review string
        
        Returns:
            tuple: (sentiment_label, polarity_score)
        """
        blob = TextBlob(review_text)
        polarity = blob.sentiment.polarity
        
        if polarity > 0.5:
            return ("Very Positive 😍", polarity)
        elif polarity > 0.1:
            return ("Positive 😊", polarity)
        elif polarity > -0.1:
            return ("Neutral 😐", polarity)
        elif polarity > -0.5:
            return ("Negative 😕", polarity)
        else:
            return ("Very Negative 😠", polarity)
    
    @staticmethod
    def batch_analyze(reviews):
        """Analyze multiple reviews"""
        results = []
        for review in reviews:
            sentiment, score = SentimentAnalyzer.analyze(review)
            results.append({"Review": review, "Sentiment": sentiment, "Score": score})
        return pd.DataFrame(results)


class ChurnPredictionModel:
    """AI model to predict customer churn"""
    
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
    
    def predict_churn_risk(self, customer_data):
        """
        Predict likelihood of customer churn
        
        Args:
            customer_data: dict with customer metrics
        
        Returns:
            float: churn probability (0-1)
        """
        # Simplified churn prediction logic
        days_since_purchase = customer_data.get('days_since_purchase', 90)
        avg_order_value = customer_data.get('avg_order_value', 100)
        returns_rate = customer_data.get('returns_rate', 0.05)
        
        churn_score = (days_since_purchase / 365) * 0.4 + \
                      (1 - min(avg_order_value, 1000) / 1000) * 0.3 + \
                      returns_rate * 0.3
        
        return min(max(churn_score, 0), 1)
