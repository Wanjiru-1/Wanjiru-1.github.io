# Methods and limitations

## Evaluation design

- Source: Kenya Ministry of Health, Kenya Health Facility Census, September 2023.
- Document handling: PDF text extraction with page numbers retained.
- Questions: 12 total, comprising 8 answerable questions and 4 outside the report’s scope.
- Retrieval methods: TF-IDF keyword search and sentence-transformer semantic search.
- Retrieval measure: Hit@3 against a manually prepared list of seed PDF pages.
- LLM: local Qwen model provided retrieved passages and instructed to cite page numbers, preserve denominators and dates, and state when evidence was insufficient.
- Review dimensions: factual answer and denominator, citation support, and appropriate abstention.

## Results

| Method | Initial seed-page Hit@3 |
|---|---:|
| TF-IDF keyword | 5/8 (62.5%) |
| Sentence-embedding semantic retrieval | 5/8 (62.5%) |

Manual inspection found that a seed-page miss did not always mean retrieval failed. Semantic retrieval returned PDF page 39 for Q01, which supports the 87% basic-laboratory result. Both methods returned PDF page 71 for Q06, which supports 2.4 primary health care facilities per 10,000 population. These are qualitative corrections from manual page inspection. The original 5/8 figures remain the fixed-seed scores.

## Observed language-model behavior

Qwen correctly answered the reviewed Q01, Q03, Q04, Q05, Q06, Q07, and Q08 items with cited pages. It confused the metric and denominator on Q02. It appropriately declined Q09, Q10, Q11, and Q12, while adding unsupported oxygen statistics and an unsupported page citation in Q10. These findings apply only to the tested questions and supplied passages.

## Limitations

- Only 12 questions were tested. Results do not estimate general performance.
- The manually selected seed-page references omitted valid evidence pages, limiting the initial Hit@3 measure.
- The source is a historical aggregate census. It cannot answer facility-specific current inventory, staff rosters, or future stockout questions.
- Qwen was manually reviewed on this small test set. There was no blinded multi-reviewer annotation or statistical uncertainty analysis.
- Retrieval success, answer correctness, and citation correctness are separate outcomes.
- The prototype has not been evaluated with health workers or in operational use. No health outcomes or service improvements have been measured.
