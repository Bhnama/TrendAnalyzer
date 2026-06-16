"""Initialize TrendAnalyzer SQLite database with sample data."""
from db_utils import init_db, save_products, save_customers, save_sales, save_reviews
from data_utils import DataGenerator
import pandas as pd
import numpy as np


def main():
    print('Initializing TrendAnalyzer DB...')
    init_db()

    products_df = DataGenerator.generate_products(10)
    customers_df = DataGenerator.generate_customer_segments(500)
    sales_df = DataGenerator.generate_sales_history(products_df, customers_df, days=365)
    reviews_df = DataGenerator.generate_customer_reviews(products_df, customers_df, n_reviews=200)

    save_products(products_df)
    save_customers(customers_df)
    save_sales(sales_df)
    save_reviews(reviews_df)

    print('Done. DB file: trendanalyzer.db')


if __name__ == '__main__':
    main()
