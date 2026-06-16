-- TrendAnalyzer: Analytics Database Schema Creation (DDL)
-- Target Database: SQLite / MySQL / PostgreSQL Compatible
-- Perfectly aligned with the Coding Ninjas E-Commerce Case Study.

-- 1. Customers Table
-- Stores unified profiles across 14 countries
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    location VARCHAR(50) NOT NULL,
    registration_date DATE NOT NULL,
    device_type VARCHAR(20) CHECK (device_type IN ('Android', 'iOS', 'Web'))
);

-- 2. Products Table
-- Holds accessory information including pricing and cost of goods sold (COGS)
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    cost DECIMAL(10, 2) NOT NULL CHECK (cost >= 0),
    stock_quantity INT DEFAULT 0 CHECK (stock_quantity >= 0)
);

-- 3. Sales Representatives Table
-- Captures regional sales leads and their monthly commission targets
CREATE TABLE sales_reps (
    sales_rep_id INT PRIMARY KEY,
    rep_name VARCHAR(100) NOT NULL,
    region VARCHAR(50) NOT NULL,
    target_sales DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

-- 4. Orders Table
-- Tracks global omnichannel orders (App, Website, WhatsApp, Helpline)
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    order_method VARCHAR(20) NOT NULL CHECK (order_method IN ('App', 'Website', 'WhatsApp', 'Helpline')),
    sales_rep_id INT,
    total_amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00 CHECK (total_amount >= 0),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (sales_rep_id) REFERENCES sales_reps(sales_rep_id) ON DELETE SET NULL
);

-- 5. Order Details Table (Intersection / Transaction items table)
-- Links specific products to orders with quantity and pricing context
CREATE TABLE order_details (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price_per_unit DECIMAL(10, 2) NOT NULL CHECK (price_per_unit >= 0),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE RESTRICT
);

-- Indexes for Query Optimization
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_date ON orders(order_date);
CREATE INDEX idx_order_details_order_id ON order_details(order_id);
CREATE INDEX idx_customers_location ON customers(location);
