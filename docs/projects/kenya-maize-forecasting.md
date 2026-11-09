---
title: Kenya Maize Price Forecasting and Evidence Dashboard
description: Historical maize price forecast evaluation in three Kenyan markets with Tableau-ready exports
---

# Kenya Maize Price Forecasting

*Independent portfolio project · Python, scikit-learn, local Qwen, interactive dashboard*

## Project question

How do simple forecasting baselines compare with a Random Forest model for historical wholesale maize prices, and can an LLM accurately explain the evaluation?

## Results

I compared persistence and seasonal baselines with Random Forest in Eldoret, Nairobi, and Nakuru. Persistence had the lowest MAE in all three markets. In Nairobi, Random Forest had a slightly lower RMSE than persistence. Evaluation coverage varied by market from 9 to 18 of 24 planned months. The results are historical backtests and do not describe current prices.

The local Qwen assistant sometimes confused MAE and RMSE and added unsupported claims. I checked generated explanations against Python-calculated metrics and used the structured results directly in the dashboard.

## Explore the work

- [Open the interactive forecast dashboard](../assets/dashboards/kenya-maize-dashboard.html)
- [Download the model metrics CSV](../assets/data/kenya-maize-model-metrics.csv)
- [Download the forecast observations CSV](../assets/data/kenya-maize-forecast-observations.csv)

The CSV files are tidy and ready to connect in Tableau. The forecast file contains one row per market, month, and model. In Tableau, connect to the CSV, put Date on Columns and forecast value on Rows, use Model for color and Market as a filter, then add actual prices as a separate line. The verified portfolio dashboard is available above.

## Data and limits

Historical wholesale maize prices from WFP via HDX for April 2020 to March 2022. Missing observations and lag features reduce test coverage. Results do not establish causes, current prices, statistical significance, or real-world food-security impact. This independent portfolio analysis is not a WFP study.
