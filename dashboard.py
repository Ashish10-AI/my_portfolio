import streamlit as st
import pandas as pd
import plotly.express as px

st.set_page_config(page_title="Business Dashboard", layout="wide")
st.title("📊 Business Performance Dashboard")

# 1. Load your CSV (with safeguards for encoding and bad rows)
df = pd.read_csv("sales_data.csv", encoding="latin1", on_bad_lines="skip")

# 2. CLEAN THE DATA (This fixes the line 14 error!)
# Strip accidental hidden spaces from column names
df.columns = df.columns.str.strip()

# Convert Date to actual datetime format
df["Date"] = pd.to_datetime(df["Date"])

# Clean Revenue: remove '₹' and ',' then convert to numbers (floats)
df['Revenue'] = df['Revenue'].replace({r'[^\d.]': ''}, regex=True).astype(float)

# Ensure Orders are treated as numbers
df['Orders'] = pd.to_numeric(df['Orders'], errors='coerce')

# 3. Metric Cards
col1, col2, col3 = st.columns(3)
col1.metric("Total Revenue", f"₹{df['Revenue'].sum():,.0f}")
col2.metric("Total Orders", f"{df['Orders'].sum():,.0f}")
col3.metric("Avg Order Value", f"₹{df['Revenue'].mean():,.0f}")

# 4. Revenue Over Time chart
fig = px.line(df, x="Date", y="Revenue", title="Revenue Over Time")
st.plotly_chart(fig, use_container_width=True)

# 5. Top Products chart
top = df.groupby("Product")["Revenue"].sum().reset_index()
fig2 = px.bar(top, x="Product", y="Revenue", title="Revenue by Product")
st.plotly_chart(fig2, use_container_width=True)