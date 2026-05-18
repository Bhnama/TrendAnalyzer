// App Logic for E-Commerce Case Study Dashboard
let currentChart = null;

// Initialize Lucide Icons on DOM load
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  initDashboardEvents();
  initDefaultChart();
});

// Map of pre-written SQL statements
const SQL_SCRIPTS = {
  q1: `SELECT 
    c.country,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS total_revenue,
    ROUND(AVG(o.total_amount), 2) AS average_order_value
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY c.country
ORDER BY total_revenue DESC;`,
  
  q2: `SELECT 
    order_method,
    COUNT(order_id) AS order_count,
    SUM(total_amount) AS total_revenue,
    ROUND(SUM(total_amount) * 100.0 / (SELECT SUM(total_amount) FROM orders), 2) AS revenue_percentage
FROM orders
GROUP BY order_method
ORDER BY total_revenue DESC;`,

  q3: `SELECT 
    c.customer_name,
    c.country,
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
GROUP BY c.customer_id, c.customer_name, c.country
ORDER BY monetary_value DESC;`,

  q4: `SELECT 
    p.product_name,
    p.category,
    SUM(oi.quantity) AS units_sold,
    SUM(oi.quantity * (p.price - p.cost)) AS gross_profit,
    ROUND((p.price - p.cost) * 100.0 / p.price, 2) AS margin_percentage
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
GROUP BY p.product_id, p.product_name, p.category
ORDER BY gross_profit DESC
LIMIT 5;`,

  q5: `SELECT 
    sr.rep_name,
    sr.region,
    sr.target_sales,
    COALESCE(SUM(o.total_amount), 0) AS actual_sales,
    ROUND(COALESCE(SUM(o.total_amount), 0) * 100.0 / sr.target_sales, 2) AS performance_pct
FROM sales_reps sr
LEFT JOIN orders o ON sr.sales_rep_id = o.sales_rep_id
GROUP BY sr.sales_rep_id, sr.rep_name, sr.region, sr.target_sales
ORDER BY performance_pct DESC;`,

  q6: `WITH MonthlyRevenue AS (
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
FROM MonthlyRevenue;`,

  q7: `WITH CustomerOrders AS (
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
ORDER BY repeat_purchases DESC;`,

  q8: `SELECT 
    c.country,
    COUNT(o.order_id) AS sales_volume,
    SUM(o.total_amount) AS revenue
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.country
HAVING SUM(o.total_amount) < (
    SELECT AVG(revenue_per_country) 
    FROM (
        SELECT SUM(o2.total_amount) AS revenue_per_country 
        FROM orders o2 
        JOIN customers c2 ON o2.customer_id = c2.customer_id 
        GROUP BY c2.country
    )
)
ORDER BY revenue ASC;`
};

// Map of Business Insights & Recommendations
const INSIGHTS = {
  q1: "India is our highest-volume market by transaction count (6 orders), but high AOV markets like the US ($88.32) and UAE ($109.98) yield larger basket sizes. Strategy: Launch accessory combo upsells in India to boost order value.",
  q2: "Omnichannel checkout data reveals that Mobile App (40%) and WhatsApp direct ordering (28%) secure 68% of total revenue. Web sales perform steadily but helpline ordering is highly underutilized, indicating automated self-serve channels are preferred.",
  q3: "VIP Loyalists and Regular actives make up 35% of our database but drive 72% of total transaction values. Loyalty tier discount programs and automatic WhatsApp updates for premium GaN chargers will incentivize repeat purchasing behaviour.",
  q4: "MagSafe Armor Cases and SuperCharge Chargers represent our highly profitable items (68% Margin). Maintain high supply lines on screen protectors as high-frequency basket additions.",
  q5: "Jessica Taylor (Americas) converted 20% of target value, while Karan Verma (Domestic) secured peak values due to local volume. Target quotas for international regions need lower conversion hurdles or local sales assistants.",
  q6: "Seasonal performance highlights a 130% revenue expansion in May driven by new sound accessories (ANC Wireless Earbuds), followed by consolidation. Ensure product roadmap releases coincide with seasonal buying windows.",
  q7: "New buyers show solid trust on official Web portals (5 first-time purchases) while repeat transactions migrate effortlessly to WhatsApp automation (4 repeat orders). Target repeat campaigns exclusively on mobile channels.",
  q8: "Markets like Germany, Brazil, France, and South Africa fall below the median global threshold. Strategy: Integrate localized currency support and free global shipping triggers to boost conversion volumes."
};

// JS Engine to process mock SQL queries live
const MOCK_SQL_ENGINE = {
  q1: () => {
    const countryMap = {};
    DATABASE.orders.forEach(order => {
      const cust = DATABASE.customers.find(c => c.customer_id === order.customer_id);
      if (cust) {
        if (!countryMap[cust.country]) {
          countryMap[cust.country] = { country: cust.country, total_orders: 0, total_revenue: 0 };
        }
        countryMap[cust.country].total_orders += 1;
        countryMap[cust.country].total_revenue += order.total_amount;
      }
    });
    return Object.values(countryMap)
      .map(item => ({
        country: item.country,
        total_orders: item.total_orders,
        total_revenue: "$" + item.total_revenue.toFixed(2),
        average_order_value: "$" + (item.total_revenue / item.total_orders).toFixed(2)
      }))
      .sort((a, b) => parseFloat(b.total_revenue.slice(1)) - parseFloat(a.total_revenue.slice(1)));
  },

  q2: () => {
    const channelMap = {};
    let grandTotal = 0;
    DATABASE.orders.forEach(order => {
      grandTotal += order.total_amount;
      if (!channelMap[order.order_method]) {
        channelMap[order.order_method] = { order_method: order.order_method, order_count: 0, total_revenue: 0 };
      }
      channelMap[order.order_method].order_count += 1;
      channelMap[order.order_method].total_revenue += order.total_amount;
    });
    return Object.values(channelMap)
      .map(item => ({
        order_method: item.order_method,
        order_count: item.order_count,
        total_revenue: "$" + item.total_revenue.toFixed(2),
        revenue_percentage: ((item.total_revenue / grandTotal) * 100).toFixed(2) + "%"
      }))
      .sort((a, b) => parseFloat(b.total_revenue.slice(1)) - parseFloat(a.total_revenue.slice(1)));
  },

  q3: () => {
    return DATABASE.customers.map(cust => {
      const custOrders = DATABASE.orders.filter(o => o.customer_id === cust.customer_id);
      const totalAmount = custOrders.reduce((sum, o) => sum + o.total_amount, 0);
      const freq = custOrders.length;
      let segment = "New Buyer";
      if (freq >= 3 && totalAmount >= 150) {
        segment = "VIP Loyal";
      } else if (freq >= 2 && totalAmount >= 50) {
        segment = "Active Regular";
      } else if (freq === 0) {
        segment = "Churn Risk";
      }
      return {
        customer_name: cust.customer_name,
        country: cust.country,
        frequency: freq,
        monetary_value: "$" + totalAmount.toFixed(2),
        customer_segment: segment
      };
    }).sort((a, b) => parseFloat(b.monetary_value.slice(1)) - parseFloat(a.monetary_value.slice(1)));
  },

  q4: () => {
    const prodMap = {};
    DATABASE.order_items.forEach(item => {
      const prod = DATABASE.products.find(p => p.product_id === item.product_id);
      if (prod) {
        if (!prodMap[prod.product_id]) {
          prodMap[prod.product_id] = { name: prod.product_name, cat: prod.category, qty: 0, profit: 0, price: prod.price, cost: prod.cost };
        }
        prodMap[prod.product_id].qty += item.quantity;
        prodMap[prod.product_id].profit += item.quantity * (prod.price - prod.cost);
      }
    });
    return Object.values(prodMap)
      .map(item => ({
        product_name: item.name,
        category: item.cat,
        units_sold: item.qty,
        gross_profit: "$" + item.profit.toFixed(2),
        margin_percentage: (((item.price - item.cost) / item.price) * 100).toFixed(2) + "%"
      }))
      .sort((a, b) => parseFloat(b.gross_profit.slice(1)) - parseFloat(a.gross_profit.slice(1)))
      .slice(0, 5);
  },

  q5: () => {
    return DATABASE.sales_reps.map(rep => {
      const repOrders = DATABASE.orders.filter(o => o.sales_rep_id === rep.sales_rep_id);
      const sales = repOrders.reduce((sum, o) => sum + o.total_amount, 0);
      return {
        rep_name: rep.rep_name,
        region: rep.region,
        target_sales: "$" + rep.target_sales.toFixed(2),
        actual_sales: "$" + sales.toFixed(2),
        performance_pct: ((sales / rep.target_sales) * 100).toFixed(2) + "%"
      };
    }).sort((a, b) => parseFloat(b.performance_pct) - parseFloat(a.performance_pct));
  },

  q6: () => {
    const monthlyMap = {};
    DATABASE.orders.forEach(order => {
      const month = order.order_date.slice(0, 7);
      if (!monthlyMap[month]) monthlyMap[month] = 0;
      monthlyMap[month] += order.total_amount;
    });
    const months = Object.keys(monthlyMap).sort();
    return months.map((month, idx) => {
      const revenue = monthlyMap[month];
      const prevRev = idx > 0 ? monthlyMap[months[idx - 1]] : null;
      const mom = prevRev ? (((revenue - prevRev) / prevRev) * 100).toFixed(2) + "%" : "N/A";
      return {
        order_month: month,
        revenue: "$" + revenue.toFixed(2),
        prev_month_revenue: prevRev ? "$" + prevRev.toFixed(2) : "N/A",
        mom_growth_percentage: mom
      };
    });
  },

  q7: () => {
    const firstTimeMap = {};
    const repeatMap = {};
    const customerOrderSeq = {};
    
    // Sort orders by date
    const sortedOrders = [...DATABASE.orders].sort((a, b) => new Date(a.order_date) - new Date(b.order_date));
    
    sortedOrders.forEach(order => {
      if (!customerOrderSeq[order.customer_id]) {
        customerOrderSeq[order.customer_id] = 0;
      }
      customerOrderSeq[order.customer_id] += 1;
      
      const seq = customerOrderSeq[order.customer_id];
      const method = order.order_method;
      
      if (seq === 1) {
        firstTimeMap[method] = (firstTimeMap[method] || 0) + 1;
      } else {
        repeatMap[method] = (repeatMap[method] || 0) + 1;
      }
    });
    
    const methods = ["App", "Website", "WhatsApp", "Helpline"];
    return methods.map(method => ({
      order_method: method,
      first_time_purchases: firstTimeMap[method] || 0,
      repeat_purchases: repeatMap[method] || 0
    })).sort((a, b) => b.repeat_purchases - a.repeat_purchases);
  },

  q8: () => {
    const countryMap = {};
    DATABASE.orders.forEach(order => {
      const cust = DATABASE.customers.find(c => c.customer_id === order.customer_id);
      if (cust) {
        if (!countryMap[cust.country]) {
          countryMap[cust.country] = { country: cust.country, sales_volume: 0, revenue: 0 };
        }
        countryMap[cust.country].sales_volume += 1;
        countryMap[cust.country].revenue += order.total_amount;
      }
    });
    
    // Also include countries with 0 sales
    DATABASE.customers.forEach(cust => {
      if (!countryMap[cust.country]) {
        countryMap[cust.country] = { country: cust.country, sales_volume: 0, revenue: 0 };
      }
    });

    const values = Object.values(countryMap);
    const totalRev = values.reduce((sum, item) => sum + item.revenue, 0);
    const avgCountryRev = totalRev / values.length;

    return values
      .filter(item => item.revenue < avgCountryRev)
      .map(item => ({
        country: item.country,
        sales_volume: item.sales_volume,
        revenue: "$" + item.revenue.toFixed(2)
      }))
      .sort((a, b) => parseFloat(a.revenue.slice(1)) - parseFloat(b.revenue.slice(1)));
  }
};

// Event handlers
function initDashboardEvents() {
  const querySelect = document.getElementById("query-select");
  const sqlEditor = document.getElementById("sql-editor");
  const btnRun = document.getElementById("btn-run");
  const btnDownload = document.getElementById("btn-download-script");

  // Selection change
  querySelect.addEventListener("change", (e) => {
    const key = e.target.value;
    if (SQL_SCRIPTS[key]) {
      sqlEditor.value = SQL_SCRIPTS[key];
    }
  });

  // Run button click
  btnRun.addEventListener("click", () => {
    const key = querySelect.value;
    if (!key) {
      showToast("Please select a problem first!", "warning");
      return;
    }
    
    // Show spinner & loading state
    document.getElementById("empty-state").style.display = "none";
    document.getElementById("results-table").innerHTML = `<div style="padding: 3rem; display: flex; justify-content: center; align-items: center;"><div class="spinner"></div></div>`;
    
    setTimeout(() => {
      executeAndRender(key);
    }, 500);
  });

  // Download complete SQL solutions script
  btnDownload.addEventListener("click", () => {
    downloadSQLSolutions();
  });
}

// Execute query and render table & charts
function executeAndRender(key) {
  const results = MOCK_SQL_ENGINE[key]();
  const timeBadge = document.getElementById("time-badge");
  const rowsCount = document.getElementById("rows-count");
  const resultsTable = document.getElementById("results-table");
  const insightText = document.getElementById("insight-text");

  // Update time and counts
  timeBadge.textContent = `Executed in ${(Math.random() * 0.05 + 0.01).toFixed(2)}ms`;
  timeBadge.style.display = "inline-block";
  rowsCount.textContent = `${results.length} rows returned`;

  // Render headers
  const columns = Object.keys(results[0]);
  let headHtml = "<tr>";
  columns.forEach(col => {
    headHtml += `<th>${col.toUpperCase().replace(/_/g, " ")}</th>`;
  });
  headHtml += "</tr>";

  // Render rows
  let bodyHtml = "";
  results.forEach(row => {
    bodyHtml += "<tr>";
    columns.forEach(col => {
      bodyHtml += `<td>${row[col]}</td>`;
    });
    bodyHtml += "</tr>";
  });

  resultsTable.innerHTML = `
    <thead>${headHtml}</thead>
    <tbody>${bodyHtml}</tbody>
  `;

  // Update Business Insight Text
  insightText.textContent = INSIGHTS[key];

  // Update visual charts
  renderQueryChart(key, results);
}

// Chart.js renderers matching specific queries
function renderQueryChart(key, results) {
  const ctx = document.getElementById("analytics-chart").getContext("2d");
  
  if (currentChart) {
    currentChart.destroy();
  }

  // Common dark theme options
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#f5f6f9", font: { family: "Outfit" } }
      }
    },
    scales: {
      x: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#8b9bb4" } },
      y: { grid: { color: "rgba(255,255,255,0.05)" }, ticks: { color: "#8b9bb4" } }
    }
  };

  if (key === "q1") {
    // Country Performance Bar Chart
    const labels = results.map(r => r.country);
    const data = results.map(r => parseFloat(r.total_revenue.slice(1)));

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Revenue by Country ($)',
          data: data,
          backgroundColor: 'rgba(138, 43, 226, 0.6)',
          borderColor: '#8a2be2',
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: baseOptions
    });
  } else if (key === "q2") {
    // Channel Breakdown Pie Chart
    const labels = results.map(r => r.order_method);
    const data = results.map(r => parseFloat(r.revenue_percentage));

    currentChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(138, 43, 226, 0.7)',
            'rgba(0, 242, 254, 0.7)',
            'rgba(0, 230, 118, 0.7)',
            'rgba(255, 179, 0, 0.7)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: "#f5f6f9" } }
        }
      }
    });
  } else if (key === "q3") {
    // Customer Segment Polar Area
    const segments = {};
    results.forEach(r => {
      segments[r.customer_segment] = (segments[r.customer_segment] || 0) + 1;
    });

    currentChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: Object.keys(segments),
        datasets: [{
          data: Object.values(segments),
          backgroundColor: [
            'rgba(0, 230, 118, 0.6)',
            'rgba(0, 242, 254, 0.6)',
            'rgba(255, 179, 0, 0.6)',
            'rgba(255, 95, 86, 0.6)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'right', labels: { color: "#f5f6f9" } } }
      }
    });
  } else if (key === "q4") {
    // Product Profitability Horizontal Bar Chart
    const labels = results.map(r => r.product_name);
    const data = results.map(r => parseFloat(r.gross_profit.slice(1)));

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels.map(l => l.slice(0, 15) + "..."),
        datasets: [{
          label: 'Gross Profit ($)',
          data: data,
          backgroundColor: 'rgba(0, 242, 254, 0.6)',
          borderColor: '#00f2fe',
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        indexAxis: 'y',
        ...baseOptions
      }
    });
  } else if (key === "q5") {
    // Sales reps actual vs target
    const labels = results.map(r => r.rep_name);
    const targetData = results.map(r => parseFloat(r.target_sales.slice(1)));
    const actualData = results.map(r => parseFloat(r.actual_sales.slice(1)));

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Sales Target ($)',
            data: targetData,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1,
            borderRadius: 6
          },
          {
            label: 'Actual Sales ($)',
            data: actualData,
            backgroundColor: 'rgba(138, 43, 226, 0.6)',
            borderColor: '#8a2be2',
            borderWidth: 2,
            borderRadius: 6
          }
        ]
      },
      options: baseOptions
    });
  } else if (key === "q6") {
    // Line chart of MoM revenue
    const labels = results.map(r => r.order_month);
    const data = results.map(r => parseFloat(r.revenue.slice(1)));

    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Monthly Revenue ($)',
          data: data,
          borderColor: '#00f2fe',
          backgroundColor: 'rgba(0, 242, 254, 0.1)',
          fill: true,
          tension: 0.3,
          borderWidth: 3
        }]
      },
      options: baseOptions
    });
  } else if (key === "q7") {
    // First vs Repeat purchases comparison
    const labels = results.map(r => r.order_method);
    const firstTime = results.map(r => r.first_time_purchases);
    const repeats = results.map(r => r.repeat_purchases);

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'First-Time',
            data: firstTime,
            backgroundColor: 'rgba(0, 242, 254, 0.6)',
            borderRadius: 6
          },
          {
            label: 'Repeat Buyer',
            data: repeats,
            backgroundColor: 'rgba(138, 43, 226, 0.6)',
            borderRadius: 6
          }
        ]
      },
      options: baseOptions
    });
  } else if (key === "q8") {
    // Underperforming country revenue
    const labels = results.map(r => r.country);
    const data = results.map(r => parseFloat(r.revenue.slice(1)));

    currentChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Market Revenue ($)',
          data: data,
          backgroundColor: 'rgba(255, 95, 86, 0.6)',
          borderColor: '#ff5f56',
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: baseOptions
    });
  }
}

// Render the initial dashboard chart
function initDefaultChart() {
  const ctx = document.getElementById("analytics-chart").getContext("2d");
  
  // Default Overview chart
  currentChart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'India Market',
          data: [{ x: 6, y: 194.92, r: 25 }],
          backgroundColor: 'rgba(138, 43, 226, 0.6)'
        },
        {
          label: 'US Market',
          data: [{ x: 5, y: 264.95, r: 20 }],
          backgroundColor: 'rgba(0, 242, 254, 0.6)'
        },
        {
          label: 'UK Market',
          data: [{ x: 3, y: 154.98, r: 15 }],
          backgroundColor: 'rgba(0, 230, 118, 0.6)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#f5f6f9" } }
      },
      scales: {
        x: { 
          title: { display: true, text: 'Order Count', color: '#f5f6f9' },
          grid: { color: "rgba(255,255,255,0.05)" }, 
          ticks: { color: "#8b9bb4" } 
        },
        y: { 
          title: { display: true, text: 'Country Revenue ($)', color: '#f5f6f9' },
          grid: { color: "rgba(255,255,255,0.05)" }, 
          ticks: { color: "#8b9bb4" } 
        }
      }
    }
  });
}

// Copy Code function
function copyQuery(id) {
  const codeNode = document.getElementById(`code-p${id}`);
  navigator.clipboard.writeText(codeNode.textContent).then(() => {
    showToast("SQL Query successfully copied to clipboard!", "success");
  });
}

// Toast indicator manager
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-indicator");
  const msgNode = document.getElementById("toast-message");
  
  msgNode.textContent = message;
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Trigger script download file
function downloadSQLSolutions() {
  let sqlText = `-- ==========================================
-- CODING NINJAS: E-COMMERCE RETAIL CASE STUDY
-- DATABASE TYPE: Standard Relational DBMS
-- AUTO-GENERATED SOLUTION REPORT SCRIPT
-- ==========================================\n\n`;

  sqlText += `-- 1. DATABASE SCHEMA CREATION (DDL)\n`;
  sqlText += `CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    country VARCHAR(50),
    registration_date DATE,
    device_type VARCHAR(20)
);\n\n`;

  sqlText += `CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    cost DECIMAL(10, 2),
    stock_quantity INT
);\n\n`;

  sqlText += `CREATE TABLE sales_reps (
    sales_rep_id INT PRIMARY KEY,
    rep_name VARCHAR(100),
    region VARCHAR(50),
    target_sales DECIMAL(10,2)
);\n\n`;

  sqlText += `CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    order_method VARCHAR(20), -- 'App', 'Website', 'WhatsApp', 'Helpline'
    sales_rep_id INT,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (sales_rep_id) REFERENCES sales_reps(sales_rep_id)
);\n\n`;

  sqlText += `CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY AUTOINCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);\n\n\n`;

  sqlText += `-- 2. CASE STUDY PROBLEMS SOLVED\n\n`;

  Object.keys(SQL_SCRIPTS).forEach((key, index) => {
    sqlText += `-- PROBLEM ${index + 1}: ${INSIGHTS[key].slice(0, 60)}...\n`;
    sqlText += `${SQL_SCRIPTS[key]}\n\n`;
  });

  const blob = new Blob([sqlText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CN_Ecommerce_SQL_Solutions.sql";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Solutions script downloaded successfully!", "success");
}
