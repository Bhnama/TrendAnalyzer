# Deploying TrendAnalyzer to Streamlit Cloud

This guide helps you deploy the TrendAnalyzer app to Streamlit Cloud (or other hosts).

Prerequisites
- A GitHub repository for this project
- A Streamlit account (https://streamlit.io)

Quick Steps (Streamlit Cloud)

1. Commit and push your code to GitHub:

```bash
git add .
git commit -m "Prepare for Streamlit deployment"
git push origin main
```

2. On Streamlit Cloud, click "New app" → connect your GitHub repo → select branch `main` and file `app.py` → Deploy.

Secrets & Configuration
- Streamlit Cloud provides `Secrets` (App settings → Secrets). Use these to store API keys and database URLs.
- Recommended secrets:
  - `DATABASE_URL` — If you plan to use a hosted Postgres/managed DB (recommended; SQLite in Streamlit Cloud is ephemeral).
  - `STRIPE_API_KEY` — For payment integration (if added).

Access them in code via `st.secrets` — example:

```py
import streamlit as st
db_url = st.secrets.get('DATABASE_URL', 'trendanalyzer.db')
```

Notes about SQLite
- The local SQLite file (`trendanalyzer.db`) will be created in the app's ephemeral filesystem on Streamlit Cloud and will not persist across app rebuilds. For production, use a hosted database (Postgres, MySQL) and set `DATABASE_URL`.

Heroku / Other Hosts
- The included `Procfile` lets you run Streamlit on platforms that use a web process (e.g., Heroku). On Heroku, set the buildpack and install dependencies via `requirements.txt`.

Optional: Add a `runtime.txt` specifying Python version (e.g., `python-3.10.12`).
