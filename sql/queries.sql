-- ====================================================================
-- TRENDANALYZER: ANALYTICS INSIGHTS & BUSINESS INTELLIGENCE QUERIES
-- Developed for Coding Ninjas Data Analytics Capstone
-- ====================================================================

-- --------------------------------------------------------------------
-- PROBLEM 1: Global Sales Revenue & Average Order Value (AOV) by Country
-- Objective: Identify key revenue-driving nations and assess customer spend capacity.
-- --------------------------------------------------------------------
-- Business Insight: India generates the largest transaction volume, but developed
-- regions like USA and UAE have AOV indices nearly 1.8x higher. Up-selling bundles 
-- in low AOV regions will maximize global revenue.
-- --------------------------------------------------------------------

SELECT 
    c.location AS country,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_revenue,
    ROUND(AVG(o.total_amount), 2) AS average_order_value
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.location
ORDER BY total_revenue DESC;


-- --------------------------------------------------------------------
-- PROBLEM 2: Omnichannel Performance (App, Web, WhatsApp, Helpline)
-- Objective: Measure channel contribution to prioritize marketing spend and automation.
-- --------------------------------------------------------------------
-- Business Insight: Self-serve direct digital channels (App and WhatsApp) represent
-- over 68% of total TrendAnalyzer revenue impact. Web holds steady for high-ticket entries,
-- while Helpline is heavily underutilized.
-- --------------------------------------------------------------------

SELECT 
    order_method,
    COUNT(order_id) AS order_count,
    SUM(total_amount) AS total_revenue,
    ROUND(SUM(total_amount) * 100.0 / (SELECT SUM(total_amount) FROM orders), 2) AS revenue_percentage
FROM orders
GROUP BY order_method
ORDER BY total_revenue DESC;


-- --------------------------------------------------------------------
-- PROBLEM 3: RFM Customer Segmentation
-- Objective: Categorize users into VIP, Active Regular, New, or Churned segments.
-- --------------------------------------------------------------------
-- Business Insight: VIP and Regular segments make up 35% of the database but represent
-- 72% of lifetime value. Nurturing regular buyers via loyalty perks is crucial.
-- --------------------------------------------------------------------

SELECT 
    c.name AS customer_name,
    c.location AS country,
    COUNT(o.order_id) AS frequency,
    SUM(o.total_amount) AS monetary_value,
    CASE 
        WHEN COUNT(o.order_id) >= 3 AND SUM(o.total_amount) >= 150 THEN 'VIP Loyal'
        WHEN COUNT(o.order_id) >= 2 AND SUM(o.total_amount) >= 50 THEN 'Active Regular'
        WHEN COUNT(o.order_id) = 1 THEN 'New Buyer'
        ELSE 'Churn Risk'
    END AS customer_segment
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name, c.location
ORDER BY monetary_value DESC;


-- --------------------------------------------------------------------
-- PROBLEM 4: Top 5 Most Profitable Products
-- Objective: Calculate product-level profit margins to optimize supply stock.
-- --------------------------------------------------------------------
-- Business Insight: Premium categories (ANC Earbuds, GaN Chargers) generate high gross margins
-- (up to 68%). Safety margins should be increased by 30% to prevent stockouts.
-- --------------------------------------------------------------------

SELECT 
    p.name AS product_name,
    p.category,
    SUM(od.quantity) AS units_sold,
    SUM(od.quantity * (p.price - p.cost)) AS gross_profit,
    ROUND((p.price - p.cost) * 100.0 / p.price, 2) AS margin_percentage
FROM order_details od
JOIN products p ON od.product_id = p.product_id
GROUP BY p.product_id, p.name, p.category
ORDER BY gross_profit DESC
LIMIT 5;


-- --------------------------------------------------------------------
-- PROBLEM 5: Sales Representative Leaderboard vs Allocated Targets
-- Objective: Measure sales conversion values against quarterly commissions targets.
-- --------------------------------------------------------------------
-- Business Insight: Rep Karan Verma (Domestic) is performing robustly, but developed
-- regions like Americas (Jessica Taylor) need lower target hurdles or additional staffing.
-- --------------------------------------------------------------------

SELECT 
    sr.rep_name,
    sr.region,
    sr.target_sales,
    COALESCE(SUM(o.total_amount), 0) AS actual_sales,
    ROUND(COALESCE(SUM(o.total_amount), 0) * 100.0 / sr.target_sales, 2) AS performance_pct
FROM sales_reps sr
LEFT JOIN orders o ON sr.sales_rep_id = o.sales_rep_id
GROUP BY sr.sales_rep_id, sr.rep_name, sr.region, sr.target_sales
ORDER BY performance_pct DESC;


-- --------------------------------------------------------------------
-- PROBLEM 6: Month-on-Month Revenue Trends
-- Objective: Assess buying spikes using window functions (LAG).
-- --------------------------------------------------------------------
-- Business Insight: A major sales surge in May (130%) corresponds with high-margin wireless
-- accessory drops. Roadmap cycles should align with seasonal shopping trends.
-- --------------------------------------------------------------------

WITH MonthlyRevenue AS (
    SELECT 
        STRFTIME('%Y-%m', order_date) AS order_month,
        SUM(total_amount) AS revenue
    FROM orders
    GROUP BY order_month
)
SELECT 
    order_month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY order_month) AS prev_month_revenue,
    ROUND(
        (revenue - LAG(revenue, 1) OVER (ORDER BY order_month)) * 100.0 / 
        LAG(revenue, 1) OVER (ORDER BY order_month), 
        2
    ) AS mom_growth_percentage
FROM MonthlyRevenue;


-- --------------------------------------------------------------------
-- PROBLEM 7: First-Time vs Repeat Buyer Channel Preferences
-- Objective: Map customer journeys across their lifetime.
-- --------------------------------------------------------------------
-- Business Insight: First-time purchasers heavily lean towards Web interfaces for brand authority,
-- while repeat business shifts to WhatsApp.
-- --------------------------------------------------------------------

WITH CustomerOrders AS (
    SELECT 
        customer_id,
        order_method,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS order_sequence
    FROM orders
)
SELECT 
    order_method,
    SUM(CASE WHEN order_sequence = 1 THEN 1 ELSE 0 END) AS first_time_purchases,
    SUM(CASE WHEN order_sequence > 1 THEN 1 ELSE 0 END) AS repeat_purchases
FROM CustomerOrders
GROUP BY order_method
ORDER BY repeat_purchases DESC;


-- --------------------------------------------------------------------
-- PROBLEM 8: Underperforming Country Markets
-- Objective: Isolate territories below global averages for active targeting campaigns.
-- --------------------------------------------------------------------
-- Business Insight: Germany, Brazil, France, and South Africa sit below median revenue marks.
-- Localized checkout models will improve volumes.
-- --------------------------------------------------------------------

SELECT 
    c.location AS country,
    COUNT(o.order_id) AS sales_volume,
    SUM(o.total_amount) AS revenue
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.location
HAVING SUM(o.total_amount) < (
    SELECT AVG(revenue_per_country) 
    FROM (
        SELECT SUM(o2.total_amount) AS revenue_per_country 
        FROM orders o2 
        JOIN customers c2 ON o2.customer_id = c2.customer_id 
        GROUP BY c2.location
    )
)
ORDER BY revenue ASC;
