# Search Console analysis — 8 September 2026

Source: user-supplied `https___maitre-haifaguedhami.me_-Performance-on-Search-2026-09-08.zip`. Web search, all countries and devices, 7 June–6 September 2026 (92 daily rows). This is Search Console data, not Google Analytics. No website or account settings were changed during this analysis.

## Performance

| Metric | Full export | Previous 28 days: 13 July–9 August | Latest 28 days: 10 August–6 September |
| --- | ---: | ---: | ---: |
| Clicks | 928 | 271 | 351 |
| Impressions | 47,983 | 13,176 | 17,981 |
| CTR | 1.93% | 2.06% | 1.95% |

Clicks increased **29.5%** and impressions **36.5%** between the equal 28-day windows. CTR decreased approximately **0.10 percentage points**. Impression-weighted daily positions were approximately 6.08 and 6.04, respectively; these are estimates from rounded daily values, not independently exported period-level positions. Visibility and clicks are increasing, with broadly stable aggregate position. These dates precede the local changes made on 8 September, so the growth cannot be attributed to those changes.

## Prioritized existing-page opportunities

All figures below are whole-period page-level metrics. Priority reflects business intent and available evidence, not a forecast of ranking gains.

| Priority | Page | Clicks | Impressions | CTR | Average position | Next action |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| 1 | `/ar/avocat-divorce-tunisie` | 116 | 3,336 | 3.48% | 6.38 | Protect this established service page; inspect its country-filtered queries and consultation actions before changing its successful positioning. Improve any gaps in consultation preparation and relevant links from family articles. |
| 2 | `/en/actualites/immobilier-etrangers-tunisie-2026` | 43 | 9,027 | 0.48% | 4.38 | Inspect page-filtered queries by country/device. Test a clearer title/description if they mismatch the article and search intent; strengthen the path to property-law consultations. Low CTR does not establish the cause. |
| 3 | `/ar/consultation-juridique-tunisie` | 2 | 310 | 0.65% | 11.26 | Check whether queries concern divorce or broader consultations, then align the opening copy, appointment details and internal links. |
| 4 | `/ar/avocat-immobilier-tunisie` | 14 | 455 | 3.08% | 8.56 | Connect relevant Arabic property articles to this existing service page where the link helps readers. Check existing links before adding more. |
| 5 | `/actualites/reforme-code-du-travail-2025` | 4 | 1,347 | 0.30% | 7.88 | Investigate informational/PDF intent and review primary legal sources; compare against `/code-du-travail-tunisie` before rewriting. Do not promise a PDF unless one is provided. |
| 6 | `/actualites/immobilier-etrangers-tunisie-2026` | 19 | 2,421 | 0.78% | 6.41 | Check French search intent, article accuracy and the route to legal assistance. |

The Arabic property article is another substantial source of visitors: **89 clicks, 3,982 impressions**. The French tourist-rental article leads the exported pages by clicks: **118 clicks, 2,941 impressions, 4.01% CTR**. Preserve useful content and investigate conversion paths rather than rewriting everything.

## Query evidence

These queries are property-wide; the export does **not** join queries to pages. Thematically related pages above are candidates, not proven ranking URLs for these queries.

| Query | Meaning/context | Clicks | Impressions | Average position |
| --- | --- | ---: | ---: | ---: |
| افضل محامي طلاق في تونس | Best divorce lawyer in Tunisia | 21 | 371 | 4.46 |
| استشارة قانونية في الطلاق في تونس | Divorce legal consultation in Tunisia | 6 | 392 | 5.59 |
| محامي طلاق في تونس | Divorce lawyer in Tunisia | 6 | 365 | 5.22 |
| محامي مختص في العقارات في تونس | Property specialist lawyer in Tunisia | 2 | 121 | 12.86 |
| avocat kairouan | Local lawyer search | 11 | 97 | 4.36 |
| can foreigners buy property in tunisia | English property information | 5 | 100 | 3.21 |
| avocat divorce tunisie | French divorce-lawyer search | 1 | 36 | 38.92 |

Arabic divorce searches provide stronger observed opportunities than the French divorce phrase in this export. The Arabic property-specialist phrase is a relevant position-12.86 opportunity, but its 121 impressions cover the entire three months, not one month. The article's arbitrary 100-impressions-per-month filter would miss it.

The word “best” in a search query is not evidence that the firm can substantiate a “best lawyer” claim. Match the service and location accurately without adopting unsupported superlatives.

## Country and device context

- Tunisia: **560 clicks**, 18,048 impressions, **3.10% CTR**; approximately **60.3% of total clicks**.
- France: **106 clicks**, 2,476 impressions, **4.28% CTR**.
- United States: **21 clicks**, 9,647 impressions, **0.22% CTR**.
- Netherlands: **4 clicks**, 2,851 impressions, **0.14% CTR**.
- Mobile: **680 clicks**, 21,876 impressions, **3.11% CTR**; approximately **73.3% of clicks**.
- Desktop: **239 clicks**, 25,896 impressions, **0.92% CTR**.

Global impressions may involve people with different needs from local clients. The export does not identify which countries produced a particular page's impressions. Desktop's lower CTR does not prove a desktop UX defect: Search Console CTR measures clicks before users visit the site. Compare country, query and device segments before drawing conclusions.

## Legacy URLs to verify

The page table contains **32 `?lang=` URLs**, with **45 clicks and 3,555 page-level impressions** in total. Examples:

- `/actualites/location-touristique-tunisie-reglementation-2026?lang=en`: 950 impressions, 0 clicks.
- `/avocat-divorce-tunisie?lang=ar`: 845 impressions, 25 clicks.
- `/actualites/immobilier-etrangers-tunisie-2026?lang=en`: 431 impressions, 1 click.

The export also contains `/faq` (3 clicks, 74 impressions) and `/en/faq` (0 clicks, 52 impressions), which are absent from the current prerender route list.

Check the live HTTP response, rendered language and Google-selected canonical for these URLs. Where the URL is genuinely superseded, redirect it to the corresponding current localized content and update any remaining internal links. Confirm an equivalent FAQ destination before redirecting FAQ URLs. Historical appearances alone do not prove current duplicate indexing, broken URLs or cannibalization.

## Limits and next measurements

- `Chart.csv` totals **928 clicks / 47,983 impressions**. `Pages.csv` totals **936 / 49,694**; use chart totals for property-wide reporting. Page and property aggregation differ.
- `Queries.csv` has **876 rows**, totaling only **168 clicks / 5,781 impressions**. This is a partial view of queries, not a complete explanation of traffic. Do not estimate brand/non-brand shares for the whole site from this table.
- No query-by-page, country-by-page, or page-by-date breakdown is available here. Do not join these independent tables as if they represented matching observations.
- Search clicks are not unique visitors, leads, consultations or revenue. Google Analytics acquisition and event data are still needed to assess those outcomes.
- Legal accuracy, current live redirects and selected canonicals were not verified in this export analysis.

Next useful exports: filter Search Console separately to the English property article and Arabic divorce page, then export their queries with Tunisia and relevant international markets examined separately. In Analytics, inspect organic landing pages and recorded consultation/contact events over the same dates. Existing click events must not be counted as completed consultations without evidence.

Method reference: [Google's Search Console performance documentation](https://support.google.com/webmasters/answer/7576553), including metric definitions, aggregation and differences between chart and table totals.
