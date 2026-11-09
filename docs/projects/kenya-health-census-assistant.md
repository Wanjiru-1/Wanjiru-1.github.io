---
title: AI Evidence Evaluation for Kenya Health Census
description: Evaluate keyword and semantic retrieval, plus a local LLM, on Kenya's 2023 Health Facility Census
---

# AI Evidence Evaluation for Kenya Health Census

*Independent portfolio prototype · 2026 · Python, TF-IDF, Sentence Transformers, local Qwen*

## Project question

Can search and a local language model answer questions from a public health report while keeping denominators, dates, and citations accurate, and decline questions outside the report’s scope?

## Workflow

I extracted page-level text from the Ministry of Health’s September 2023 census report, defined eight answerable questions and four out-of-scope questions, compared TF-IDF keyword search with sentence-embedding semantic retrieval, and tested a local Qwen model on the retrieved passages. I reviewed each response for accuracy, citation support, and appropriate abstention.

## Results

Both retrieval methods initially scored **5/8 Hit@3** against the seed-page answer key. Manual review found valid answer pages that the initial key omitted. Qwen correctly answered seven of eight in-scope questions, but confused the denominator on Q02. It appropriately declined out-of-scope questions, though Q10 included unsupported oxygen figures after refusing to predict a stockout.

These small results describe this test set only. No health outcomes or service changes were measured.

## Explore the work

- [Open the interactive evaluation dashboard](../assets/dashboards/kenya-health-census-evaluation.html)
- [Download the evaluation notebook](../assets/notebooks/kenya-health-census-evaluation.ipynb)
- [Download the reviewed results CSV](../assets/evidence/health-census-qwen-review.csv)
- [Read the methods and limitations](../assets/evidence/health-census-methods.md)
- [Read selected Qwen examples](../assets/evidence/health-census-qwen-examples.md)

## Source and limitations

Source: [Kenya Health Facility Census, September 2023](https://www.health.go.ke/sites/default/files/2024-01/Kenya%20Health%20Facility%20Census%20Report%20September%202023.pdf), Kenya Ministry of Health.

The report is historical and aggregated. It cannot establish current facility inventory, identify a current staff member, or forecast future stockouts. The evaluation used only 12 questions, and the seed-page list missed some valid evidence pages.
