"""
Configuration settings for TrendAnalyzer - Analytics Platform
"""

# App Configuration
APP_NAME = "🔍 TrendAnalyzer"
APP_DESCRIPTION = "AI-powered analytics platform with demand forecasting, price optimization, and predictive insights"
APP_VERSION = "2.0"

# Streamlit Configuration
STREAMLIT_CONFIG = {
    "theme": {
        "primaryColor": "#667eea",
        "backgroundColor": "#FFFFFF",
        "secondaryBackgroundColor": "#F0F2F6",
        "textColor": "#262730",
        "font": "sans serif"
    },
    "layout": "wide",
    "initialSidebarState": "expanded"
}

# Machine Learning Models Configuration
ML_CONFIG = {
    # Random Forest Hyperparameters
    "random_forest": {
        "n_estimators": 100,
        "random_state": 42,
        "max_depth": None,
        "min_samples_split": 2,
        "min_samples_leaf": 1
    },
    
    # Price Prediction Configuration
    "price_prediction": {
        "demand_threshold_low": 10,
        "demand_factor_low": 1.1,
        "demand_factor_high": 0.95,
        "demand_threshold_high": 50,
        "quality_factor_scale": 0.1,
        "popularity_factor_max": 500,
        "popularity_factor_scale": 0.05
    },
    
    # Demand Forecasting Configuration
    "demand_forecast": {
        "forecast_periods": 30,
        "polynomial_degree": 2,
        "min_historical_data": 5
    },
    
    # Sentiment Analysis Configuration
    "sentiment_analysis": {
        "very_positive_threshold": 0.5,
        "positive_threshold": 0.1,
        "neutral_threshold": -0.1,
        "negative_threshold": -0.5
    },
    
    # Churn Prediction Configuration
    "churn_prediction": {
        "days_since_purchase_weight": 0.4,
        "avg_order_value_weight": 0.3,
        "returns_rate_weight": 0.3,
        "churn_threshold": 0.5
    }
}

# Data Configuration
DATA_CONFIG = {
    "default_products": 10,
    "default_customers": 1000,
    "default_historical_days": 365,
    "default_sample_reviews": 100,
    "default_forecast_days": 30,
    "default_sales_chance": 0.7  # 70% chance of daily sale
}

# UI Configuration
UI_CONFIG = {
    "products_per_page": 10,
    "recommendations_default": 3,
    "recommendations_max": 5,
    "chart_height": 400,
    "chart_width": 600
}

# Navigation Pages
PAGES = [
    ("🏠 Home", "home"),
    ("🛍️ Smart Products", "products"),
    ("🎯 AI Recommendations", "recommendations"),
    ("📊 Sales Analytics", "analytics"),
    ("💬 Sentiment Analysis", "sentiment"),
    ("🔮 Price Prediction", "price"),
    ("📈 Demand Forecast", "forecast"),
    ("🛒 Cart", "cart"),
    ("💳 Checkout", "checkout")
]

# Color Scheme
COLORS = {
    "primary": "#667eea",
    "secondary": "#764ba2",
    "success": "#00cc96",
    "danger": "#ff6b6b",
    "warning": "#ffa500",
    "info": "#00b4d8",
    "neutral": "#f0f2f6"
}

# Product Categories
PRODUCT_CATEGORIES = [
    "Electronics",
    "Accessories",
    "Office",
    "Gaming",
    "Smart Devices",
    "Peripherals",
    "Software",
    "Components"
]

# Customer Segments
CUSTOMER_SEGMENTS = {
    "VIP": {"discount": 0.20, "priority": 1},
    "Premium": {"discount": 0.15, "priority": 2},
    "Regular": {"discount": 0.10, "priority": 3},
    "Budget": {"discount": 0.05, "priority": 4},
    "Casual": {"discount": 0.0, "priority": 5}
}

# Sentiment Labels
SENTIMENT_LABELS = {
    "Very Positive": "😍",
    "Positive": "😊",
    "Neutral": "😐",
    "Negative": "😕",
    "Very Negative": "😠"
}

# Cache Configuration
CACHE_CONFIG = {
    "ttl": 3600,  # 1 hour cache duration
    "max_entries": 1000
}

# Performance Thresholds
PERFORMANCE = {
    "max_page_load_time": 2000,  # milliseconds
    "max_ml_inference_time": 100,  # milliseconds
    "max_concurrent_users": 100
}

# Email Configuration (for future use)
EMAIL_CONFIG = {
    "smtp_server": "smtp.gmail.com",
    "smtp_port": 587,
    "use_tls": True,
    "from_email": "notifications@trendanalyzer.ai"
}

# API Configuration (for future integrations)
API_CONFIG = {
    "stripe_api_version": "2023-10-16",
    "paypal_mode": "sandbox",  # Change to 'live' for production
    "openai_model": "gpt-3.5-turbo"
}

# Logging Configuration
LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "standard": {
            "format": "[%(asctime)s] [%(levelname)s] [%(name)s] %(message)s"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "INFO",
            "formatter": "standard"
        }
    },
    "loggers": {
        "": {
            "handlers": ["console"],
            "level": "INFO"
        }
    }
}

# Feature Flags (for A/B testing)
FEATURES = {
    "enable_recommendations": True,
    "enable_price_prediction": True,
    "enable_sentiment_analysis": True,
    "enable_demand_forecast": True,
    "enable_churn_prediction": False,  # Future feature
    "enable_chatbot": False,  # Future feature
    "enable_image_search": False,  # Future feature
}

# Development Configuration
DEBUG = True
ENVIRONMENT = "development"  # development, staging, production

# API Rate Limiting (for future use)
RATE_LIMIT = {
    "requests_per_minute": 60,
    "requests_per_hour": 1000
}
