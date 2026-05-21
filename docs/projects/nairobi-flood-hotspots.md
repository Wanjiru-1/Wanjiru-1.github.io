---
title: Nairobi Flood Hotspots Map
description: Interactive R/Leaflet map identifying flood-prone neighbourhoods across Nairobi County for public awareness and disaster preparedness
---

# Nairobi Flood Hotspots Map

*April 2024 to March 2026 events | R + Leaflet | Public Awareness Cartography*

**Tags:** `R` `Leaflet.js` `Cartography` `Web Mapping` `Disaster Risk` `Urban Resilience` `Public Awareness` `Open Data` `GADM`

![Nairobi Flood Hotspots](../assets/images/nairobi_flood.jpeg)

## The Problem

Nairobi's recurrent flooding disproportionately affects residents in informal settlements and low-lying neighbourhoods. The April 2024 long-rains floods displaced thousands of households across Mathare, Mukuru, Kibera, and Korogocho, with continued impacts through the March 2026 rainy season. The May 2024 Uthiru building collapse, linked to soil saturation, claimed at least 9 lives.

While disaster management agencies hold detailed records, residents and decision-makers lack a clear, public-facing tool that shows which neighbourhoods are most at risk, why they flood, and where to find emergency resources.

## The Objective

Build a public-facing interactive map that:

* Identifies and ranks 20 flood-prone zones across Nairobi by severity (1 to 5)
* Documents the root cause of flooding in each zone (river basin, drainage failure, settlement on riparian land)
* Surfaces emergency resources including hospitals, the Kenya Red Cross, and ambulance services with toll-free contact numbers
* Raises awareness and supports disaster preparedness conversations at community level

## Methodology

The map integrates four layers in a Leaflet.js web map built with R:

1. **20 flood hotspot points** with severity scores, households affected estimates, primary cause descriptions, and associated river basin
2. **Five major river corridors**: Nairobi River, Ngong River, Mathare River, Gatharaini River, Ruiru River
3. **Seven emergency resource locations**: Kenya Red Cross HQ (South C), Nairobi County Disaster Management Office, Kenyatta National Hospital, Mama Lucy Kibaki Hospital, Mbagathi County Hospital, Pumwani Maternity Hospital, St. John Ambulance
4. **Administrative boundaries**: Nairobi County and sub-county polygons from GADM via the R `geodata` package

Severity is colour-coded from yellow (low) to dark red (extreme), with click-to-reveal pop-ups for each location. The map provides zoom, pan, layer toggles, and a legend explaining symbology.

## Featured Hotspots

| Severity | Areas |
|---|---|
| 5 (Extreme) | Mathare, Mukuru kwa Njenga, Mukuru kwa Reuben, Kibera, Korogocho, Embakasi (Pipeline) |
| 4 (High) | Kawangware, Huruma, Eastleigh, South C, Industrial Area, Uthiru, Dandora, Kayole/Soweto, Lucky Summer |
| 3 (Moderate) | Githurai, Kasarani, Kiamaiko, Ruai, Syokimau |

## Insight

The map confirms that Nairobi's flood burden falls disproportionately on informal settlements along the Nairobi, Ngong, and Mathare river corridors. Six of the seven extreme-severity zones are informal settlements with limited drainage infrastructure. This pattern indicates that flood resilience in Nairobi cannot be separated from informal settlement upgrading and riparian land protection.

## Data Sources and Attribution

| Source | Use |
|---|---|
| UN OCHA Kenya | Affected-population estimates |
| Kenya Red Cross Society | Emergency contacts and event documentation |
| ReliefWeb | Situation reports for April 2024 floods |
| ARIN (African Research and Impact Network) | Research briefs on Nairobi flooding |
| Daily Nation, CNN, Citizen TV | Event reporting |
| GADM (Global Administrative Areas) | Nairobi County and sub-county boundaries |

## Tech Stack

* **R** with `leaflet`, `leaflet.extras`, `dplyr`, `htmltools`, `htmlwidgets`, `sf`, `geodata`
* **GADM** boundary data fetched in-script (no manual download needed)
* **htmlwidgets** for export as a standalone HTML page (`index.html`)
* **GitHub Pages** for free static site deployment

## Outcomes and Impact

The map delivers:

* A community-accessible view of where flooding has historically caused most harm in Nairobi
* A starting point for residents to identify nearby emergency resources
* A planning aid for urban resilience interventions on drainage, riparian land encroachment, and informal settlement upgrading
* A reproducible R workflow that can be adapted to other Kenyan cities or extended with new events

## Interactive Live Map

<div class="dashboard-embed">
<iframe src="https://wanjiru-1.github.io/nairobi-flood-map/" 
        width="100%" 
        height="650" 
        frameborder="0" 
        loading="lazy"
        title="Nairobi Flood Hotspots Interactive Map"
        allow="geolocation"
        sandbox="allow-scripts allow-same-origin allow-popups">
</iframe>
</div>

[:material-fullscreen: Open in Full Screen](https://wanjiru-1.github.io/nairobi-flood-map/){ .md-button .md-button--primary }
[:fontawesome-brands-github: View Source Code](https://github.com/Wanjiru-1/nairobi-flood-map){ .md-button }

**Direct links:**

* **Live Map:** https://wanjiru-1.github.io/nairobi-flood-map/
* **GitHub Repository:** https://github.com/Wanjiru-1/nairobi-flood-map
* **Main Script:** `01_nairobi_floods_map.R`
* **Project File:** `Nairobi Flood Map.Rproj`

## Reflections

This project deepened my understanding of how public-facing geospatial communication can sit alongside formal disaster response. It also highlighted limits: the hotspot data is based on reported events, so areas with under-reporting may be under-represented. Future versions would integrate Sentinel-1 SAR flood-extent detection (cloud-penetrating radar) for an evidence-based approach to flood frequency rather than reported impact alone.

---

[← Back to all projects](../) | [Home](../../)
