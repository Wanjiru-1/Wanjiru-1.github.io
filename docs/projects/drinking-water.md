# Was rural drinking-water access catching up with urban access?

Across **49 countries and territories in Sub-Saharan Africa** with comparable observations, access to at least basic drinking water increased by an average of **0.604 percentage points per year in rural areas** and **0.270 in urban areas**. Rural coverage gained **0.334 percentage points per year** on urban coverage. Each place contributes equally to these averages.

## Watch the analysis

<video controls playsinline preload="metadata" style="width:100%;max-height:75vh" aria-label="Narrated drinking-water portfolio walkthrough with captions" src="../../assets/video/drinking-water.mp4"></video>

In this 69-second walkthrough, I trace the result from a SQL quality check to an Excel PivotTable and a Power BI regional report. The Tableau map shows a different measure: how far apart rural and urban access still were in 2020.

[Explore the interactive Tableau map](https://public.tableau.com/views/Drinking-wateraccessUrban-ruralgapsin2020/Dashboard1)

## From raw records to a regional comparison

- **Check the data.** The supplied WHO/UNICEF JMP estimates contained 464 records. Grouping by place and year in SQL revealed two entries each for Zimbabwe in 2015 and 2020. I inspected both pairs, retained the higher-precision observations and enforced a country–year primary key on the 462 cleaned records.
- **Calculate the rate.** I used PostgreSQL’s `LAG()` to compare each observation with the preceding one for the same place. Dividing the coverage change by elapsed years made intervals of different lengths comparable. Of 231 places, 165 had enough data to calculate both rural and urban change.
- **Verify the report.** I joined the rates to regions, checked the regional counts and averages in Excel, and reconciled the Power BI region filter with the SQL output.

## Mapping the gap and testing a prediction

I used PostGIS to select countries intersecting an East African study area. Among the mapped countries with both 2020 estimates, Kenya’s urban coverage exceeded rural coverage by **35.20 percentage points**.

In a separate modelling exercise, I used 2015 national access to predict 2020 access. Across 43 held-out places, linear regression had a mean absolute error of **0.978 percentage points**, compared with **1.553** for a baseline that carried 2015 access forward. This evaluation covers the 2020 outcome only.

*Source: WHO/UNICEF Joint Monitoring Programme drinking-water estimates supplied for the ALX integrated project. Map boundaries: Natural Earth.*
