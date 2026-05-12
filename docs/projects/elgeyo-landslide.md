---
title: Elgeyo Marakwet Landslide Dashboard
description: Google Earth Engine application mapping past landslide damage and future risk in Elgeyo Marakwet County
---

# Elgeyo Marakwet Landslide Dashboard

`Google Earth Engine` `Hazard Mapping` `Predictive Modelling` `Disaster Risk`

![Elgeyo Marakwet Landslide Dashboard](../assets/images/elgeyo_landslide.jpeg)

---

## Overview

A **Google Earth Engine (GEE) application** combining past damage mapping with predictive future risk classification for landslides in **Elgeyo Marakwet County**, Kenya — a county whose dramatic Kerio Valley escarpment makes it one of the most landslide-prone regions in East Africa.

The dashboard lets users toggle between a historical view of the November 2025 disaster and a predictive risk map classifying every pixel of the county's terrain into four risk classes.

---

## The November 2025 Event

!!! danger "November 2025 Impact"
    - **Confirmed deaths:** 26+
    - **Missing:** 25
    - **Hospitalised:** 26+
    - **Homes destroyed:** 1,000+
    - **19 deaths from a single extended family** in Endo Ward

The November 2025 landslides were among the deadliest in Kenya's recent history. The Endo Ward tragedy — where 19 members of one extended family were killed — illustrated how concentrated landslide exposure can be when vulnerable communities live on high-risk slopes without early-warning systems.

---

## What I Built

A dual-mode GEE application with two views:

**1. Past Damage (November 2025)**
Mapping of affected areas using satellite-derived change detection over the escarpment terrain.

**2. Predictive: Future Risk**
A risk classification model producing a four-class risk surface:

| Class | Risk Level |
|-------|-----------|
| 1 | :material-circle:{ style="color:#4CAF50" } Low |
| 2 | :material-circle:{ style="color:#FFEB3B" } Moderate |
| 3 | :material-circle:{ style="color:#FF9800" } High |
| 4 | :material-circle:{ style="color:#F44336" } Extreme |

Users can **click any location** on the map to inspect its risk class — enabling ward-level planning conversations.

---

## Tools & Methods

| Tool | Purpose |
|------|---------|
| **Google Earth Engine** | Cloud-based satellite analysis & app hosting |
| **JavaScript (GEE API)** | Application logic and UI |
| **DEM / slope analysis** | Terrain susceptibility inputs |
| **Satellite imagery** | Pre/post-disaster change detection |
| **Kenya administrative boundaries** | County and ward overlays |

---

## Why This Matters

Kenya lacks a systematic, publicly accessible landslide early-warning system. This dashboard demonstrates that GEE can power near-real-time risk tools that don't require local server infrastructure — making them viable for county disaster management offices with limited IT capacity.

---

## Year

2025 – 2026
