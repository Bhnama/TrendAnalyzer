import sqlite3
import pandas as pd
from pathlib import Path

DB_PATH = Path("trendanalyzer.db")


def get_conn(db_path=DB_PATH):
    return sqlite3.connect(str(db_path), detect_types=sqlite3.PARSE_DECLTYPES)


def init_db(db_path=DB_PATH):
    conn = get_conn(db_path)
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS products (
        Product TEXT PRIMARY KEY,
        Category TEXT,
        Price REAL,
        Stock INTEGER,
        Rating REAL,
        Reviews INTEGER,
        Cost REAL,
        Supplier TEXT,
        Reorder_Level INTEGER
    )
    """)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS customers (
        Customer_ID TEXT PRIMARY KEY,
        Segment TEXT,
        Lifetime_Value REAL,
        Purchase_Frequency INTEGER,
        Avg_Order_Value REAL,
        Days_Since_Purchase INTEGER,
        Churn_Risk REAL
    )
    """)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Date TEXT,
        Product TEXT,
        Customer_ID TEXT,
        Channel TEXT,
        Units_Sold INTEGER,
        Unit_Price REAL,
        Revenue REAL
    )
    """)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS reviews (
        Review_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Product TEXT,
        Customer_ID TEXT,
        Rating INTEGER,
        Review TEXT,
        Date TEXT
    )
    """)
    cur.execute("""
    CREATE TABLE IF NOT EXISTS orders (
        Order_ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Customer_ID TEXT,
        Order_Date TEXT,
        Total REAL,
        Items TEXT,
        Payment_Status TEXT,
        Channel TEXT
    )
    """)
    conn.commit()
    conn.close()


def save_products(df: pd.DataFrame, db_path=DB_PATH):
    conn = get_conn(db_path)
    df.to_sql('products', conn, if_exists='replace', index=False)
    conn.close()


def save_customers(df: pd.DataFrame, db_path=DB_PATH):
    conn = get_conn(db_path)
    df.to_sql('customers', conn, if_exists='replace', index=False)
    conn.close()


def save_sales(df: pd.DataFrame, db_path=DB_PATH):
    conn = get_conn(db_path)
    df.to_sql('sales', conn, if_exists='replace', index=False)
    conn.close()


def save_reviews(df: pd.DataFrame, db_path=DB_PATH):
    conn = get_conn(db_path)
    df.to_sql('reviews', conn, if_exists='replace', index=False)
    conn.close()


def load_products(db_path=DB_PATH):
    if not Path(db_path).exists():
        return None
    conn = get_conn(db_path)
    df = pd.read_sql_query('SELECT * FROM products', conn)
    conn.close()
    return df


def load_customers(db_path=DB_PATH):
    if not Path(db_path).exists():
        return None
    conn = get_conn(db_path)
    df = pd.read_sql_query('SELECT * FROM customers', conn)
    conn.close()
    return df


def load_sales(db_path=DB_PATH):
    if not Path(db_path).exists():
        return None
    conn = get_conn(db_path)
    df = pd.read_sql_query('SELECT * FROM sales', conn, parse_dates=['Date'])
    conn.close()
    return df


def load_reviews(db_path=DB_PATH):
    if not Path(db_path).exists():
        return None
    conn = get_conn(db_path)
    df = pd.read_sql_query('SELECT * FROM reviews', conn, parse_dates=['Date'])
    conn.close()
    return df


def save_order(order: dict, db_path=DB_PATH) -> int:
    """Save a single order dict to the orders table and return the inserted id."""
    conn = get_conn(db_path)
    cur = conn.cursor()
    cur.execute(
        """INSERT INTO orders (Customer_ID, Order_Date, Total, Items, Payment_Status, Channel)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (
            order.get('Customer_ID'),
            order.get('Order_Date'),
            order.get('Total'),
            order.get('Items'),
            order.get('Payment_Status', 'Pending'),
            order.get('Channel', 'Web')
        )
    )
    conn.commit()
    oid = cur.lastrowid
    conn.close()
    return oid


def load_orders(db_path=DB_PATH):
    if not Path(db_path).exists():
        return None
    conn = get_conn(db_path)
    df = pd.read_sql_query('SELECT * FROM orders', conn)
    conn.close()
    return df
