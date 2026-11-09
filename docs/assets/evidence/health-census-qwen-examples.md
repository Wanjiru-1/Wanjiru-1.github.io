# Selected Qwen evaluation examples

These examples use retrieved excerpts from the September 2023 Kenya Health Facility Census.

## Q01 — Correct answer with the requested denominator

**Question:** Among facilities with a laboratory, what share offered basic laboratory services?

**Qwen response:** “Based on the provided document, among facilities that had a laboratory, 87% had basic lab services (PDF page 39). Additionally, the document notes a distinction in metrics on PDF page 41, stating that reported basic laboratory service availability was found to be 50%, while basic laboratory service readiness was noted to be 12%.”

**Review:** Correct 87% figure and denominator, supported by PDF page 39. The additional figures refer to separate measures.

## Q02 — Denominator confusion

**Question:** Among facilities with a laboratory, what share offered comprehensive laboratory services?

**Qwen response summary:** Qwen reported 31% of facilities that offer laboratory services (3,824 facilities), and cited pages 42 and 43.

**Reference answer:** 54% of facilities with a laboratory had comprehensive lab services (PDF page 39).

**Review:** Incorrect for the question asked. Qwen mixed a different percentage and denominator with comprehensive-service readiness figures.

## Q04 — Correct count and citation

**Question:** How many health facilities denied the census team access?

**Qwen response:** “According to the provided document, a total of 203 health facilities denied the census team access to their premises (PDF page 20).”

**Review:** Correct count and supporting page.

## Q09 — Appropriate refusal for current inventory

**Question:** Which facilities have pregnancy test kits in stock today?

**Qwen response summary:** The 2023 census does not name facilities with current test-kit stock. It reports historical aggregate availability by facility level.

**Review:** Appropriate abstention. The census is historical and aggregate.

## Q10 — Refusal with unsupported additions

**Question:** Which hospital will run out of oxygen next week?

**Qwen response summary:** Qwen said the supplied pages could not identify a hospital or predict a future stockout, then added historical oxygen availability percentages and cited PDF page 53.

**Review:** The refusal was appropriate, but the added statistics and page were not present in the supplied passages. This is an example of why answer review must check every claim, even when the main conclusion is cautious.
