---
title: Kenya Youth Dashboard
description: Interactive dashboard analysing youth employment, education, and demographic indicators across Kenya's 47 counties
---

# Kenya Youth Dashboard

*2025 | Python, Power BI | Youth employment and demographic analysis*

**Tags:** `Python` `Power BI` `KNBS Data` `Youth Employment` `Data Analytics` `Data Visualisation` `ETL` `Policy Analytics` `47 Counties`

![Kenya Youth Dashboard](../assets/images/kenya_youth_dashboard.png)

## The Problem

Kenya has one of the youngest populations in the world. Over 75% of Kenyans are under the age of 35, and youth unemployment remains one of the most pressing economic challenges facing the country. The Kenya National Bureau of Statistics (KNBS) publishes quarterly labour force data, but this information is rarely surfaced in an accessible format that policymakers, NGOs, and youth-focused organisations can use to identify which counties, sectors, and demographic groups need targeted intervention.

Mastercard Foundation's flagship initiative, Young Africa Works, commits to creating 30 million jobs for young people across Africa by 2030. Achieving this requires data tools that disaggregate the youth employment story by county, gender, education level, and sector.

## The Objective

Build an end-to-end data pipeline and interactive dashboard that:

* Aggregates KNBS labour force survey data and ILOSTAT figures into a clean analytical dataset
* Visualises youth unemployment by county, gender, sector, and education level across Kenya's 47 counties
* Surfaces the counties and demographic groups with the highest unemployment burden
* Supports decision-making for policymakers, NGOs, donor agencies, and youth-focused programmes

## Methodology

The project uses an end-to-end ETL (Extract, Transform, Load) workflow:

1. **Extract**: Pull data from the KNBS Quarterly Labour Force Reports and ILOSTAT public datasets
2. **Transform**: Clean and harmonise variables in Python (pandas), reconcile county naming conventions, handle missing values, and engineer aggregate indicators (youth unemployment rate, education-disaggregated employment, sector breakdown)
3. **Load**: Push the cleaned analytical tables into Power BI for interactive visualisation

The dashboard surfaces four primary views:

* **County-level choropleth** showing youth unemployment rates across all 47 counties
* **Demographic breakdowns** by gender, age band (15 to 24, 25 to 34), and education level
* **Sectoral employment** showing where employed youth are concentrated (agriculture, services, manufacturing, informal sector)
* **Time-series trends** tracking changes in key metrics over recent quarters

## Data Sources and Attribution

| Source | Use |
|---|---|
| Kenya National Bureau of Statistics (KNBS) | Quarterly Labour Force Reports |
| ILOSTAT | International Labour Organisation statistical database |
| KNBS Census 2019 | Baseline demographic structure |
| Council of Governors / KNBS | County-level boundaries and metadata |

All data sources are publicly accessible from KNBS (knbs.go.ke) and ILOSTAT (ilostat.ilo.org).

## Tech Stack

* **Python** with `pandas`, `numpy`, `requests` for ETL pipeline
* **Power BI** for interactive dashboard and visualisations
* **Excel** for intermediate data validation
* **GitHub** for version control and reproducibility

## Outcomes and Impact

The dashboard provides:

* A reproducible analytical pipeline that updates with each new KNBS quarterly release
* County-level granularity that supports devolved-government planning
* Disaggregated demographic insight that highlights gender gaps and educational divides in the youth employment landscape
* A foundation for follow-up policy analysis aligned with Mastercard Foundation's Young Africa Works initiative

## Code and Live Dashboard

* **Live dashboard:** [View on Power BI](#)
* **GitHub repository:** [View source code](#)

## Reflections

This project deepened my data engineering skills outside of pure geospatial work, and showed me how spatial thinking (county-by-county comparison) can strengthen non-spatial analytical work. Future versions would add a Prophet or ARIMA forecasting layer projecting unemployment trends, and integrate Mastercard Foundation programme location data to identify gaps between intervention reach and need.

---

[See more projects](../projects/) | [Back to home](../)
