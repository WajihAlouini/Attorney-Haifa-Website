# Search Console indexing export review — 8 September 2026

Source: `https___maitre-haifaguedhami.me_-Coverage-2026-09-08.zip`. Its four CSV files contain a history chart, exclusion reason counts, an empty non-critical issues table and metadata specifying **All known pages**. There are no affected-URL lists or URL Inspection results.

## Counts and trend

The latest chart date is **4 September 2026**, not the export date: **84 indexed, 48 not indexed**, totaling 132 known URLs. This population is not the same as the site's 90 current sitemap URLs. It can include historical URLs and variants; these totals cannot identify which current pages are missing.

Indexed URLs rose from 67 on 12 June to 88 on 11 August, then declined to 84 by 29 August and stayed there through 4 September. Between 11 August and 4 September, the known total stayed at 132 while indexed decreased by four and not indexed increased by four. The export does not identify the URLs involved or attribute that change to a particular reason.

| Exclusion reason | URLs | Interpretation |
| --- | ---: | --- |
| Page with redirect | 30 | Expected if these are deliberately replaced URLs and their intended destinations are healthy. Not equivalent to a redirect error. |
| Crawled - currently not indexed | 3 | Google fetched these URLs but has not indexed them; this category alone does not establish a cause. |
| Redirect error | 4 | Requires affected URLs and redirect-chain checks. Distinct from canonical metadata. |
| Not found (404) | 3 | Requires determining whether these URLs should exist or were intentionally removed. |
| Soft 404 | 1 | Google considers the response error-like; inspect the URL and rendered content before proposing a fix. |
| Duplicate without user-selected canonical | 1 | Canonical/duplicate investigation needed; not proof the URL has no canonical today. |
| Duplicate, Google chose different canonical than user | 5 | Google selected a different main URL from the declared preference. Whether that choice is incorrect depends on the affected URL and selected destination. |
| Alternate page with proper canonical tag | 1 | Normally expected for an intentional duplicate pointing to the correct main page. |
| Discovered - currently not indexed | 0 | No affected URLs in this category in the export. |

The reason counts sum to 48. The ZIP filename `Critical issues.csv` does not mean all 48 exclusions are critical bugs. In particular, the 30 redirected URLs and one alternate URL may represent correct behavior. Validation marked Failed for redirects does not by itself establish a broken redirect: the underlying reason is still present.

## Relationship to the observed metadata defect

Prior live checks found ten URLs initially declaring the French homepage as canonical: `/ar`, `/en/consultation-juridique-kairouan`, and all eight English article URLs. Browser checks on three examples showed JavaScript changing that declaration to the correct URL.

The five Google-selected-canonical disagreements and one duplicate without a selected canonical make canonical investigation relevant. **This export does not establish any overlap with the ten affected live URLs, nor that the initial metadata caused an exclusion.** It also does not explain the redirect errors or establish traffic loss. The four-URL net decline cannot be assigned to the five canonical disagreements merely from similar counts.

## Evidence needed next

Export the affected URL lists from the two duplicate categories first. For affected current content pages, record URL Inspection's user-declared canonical, Google-selected canonical and last crawl date. Compare these URLs with the ten live mismatches. A substantive article excluded in favor of the French homepage would be much stronger evidence of a connection, although crawl timing and other signals would still matter.

Then obtain the four redirect-error URLs and the soft-404 URL for targeted live checks. Do not prescribe blanket redirects or request indexing for every excluded URL.

Definitions: [Google's Page indexing report documentation](https://support.google.com/webmasters/answer/7440203), [URL Inspection documentation](https://support.google.com/webmasters/answer/9012289).

## Drilldown exports received and checked

Both `Coverage-Drilldown-2026-09-08` ZIP files were subsequently reviewed. The unsuffixed archive contains the five Google-selected-canonical disagreements. The `(1)` archive contains the one duplicate without a user-selected canonical.

**All six listed URLs are old `?lang=` addresses. None exactly matches the ten current URLs with incorrect initial canonicals.** Live HTTP checks on 8 September found that each old address performs one permanent 301 redirect to its corresponding language-prefixed address, which returns HTTP 200.

| Excluded old URL path | Exported last crawl | Current redirect destination | Destination's initial canonical |
| --- | --- | --- | --- |
| `/about?lang=ar` | 23 May 2026 | `/ar/about` | Correct self-reference |
| `/actualites/reforme-code-du-travail-2025?lang=ar` | 7 May 2026 | `/ar/actualites/reforme-code-du-travail-2025` | Correct self-reference |
| `/actualites/reforme-code-du-travail-2025?lang=en` | 7 May 2026 | `/en/actualites/reforme-code-du-travail-2025` | Incorrect French homepage |
| `/actualites?lang=en` | 25 April 2026 | `/en/actualites` | Correct self-reference |
| `/avocat-kairouan?lang=en` | 21 April 2026 | `/en/avocat-kairouan` | Correct self-reference |
| `/consultation-juridique-kairouan?lang=en` | 31 March 2026 | `/en/consultation-juridique-kairouan` | Incorrect French homepage |

There is therefore an indirect overlap: two legacy URLs lead to current pages with the confirmed metadata defect. But these exports describe the old addresses, with last-crawl dates months before this live check. They contain neither the historical user-declared canonical nor Google's selected canonical, and do not establish the index status of the current destination pages. The evidence cannot attribute these six historical exclusions to today's metadata defect.

The old addresses should remain redirects; they do not need separate indexing. The next useful evidence is URL Inspection of the **current English labour article and current English Kairouan consultation page**, recording index status, last crawl, user-declared canonical and Google-selected canonical. Inspecting the old URLs can additionally reveal Google's historical canonical choices. This is more informative than attempting to make all six old addresses indexed.

The Google-selected-canonical disagreement count decreased from six to five between 11 and 18 August, while the other duplicate category stayed at one. Thus these category histories do not support attributing the four-URL net indexed decline to a growing number of these duplicate exclusions.

## Further URL Inspection evidence and eight exclusion examples

The owner supplied URL Inspection results stating **Page is indexed / URL is on Google** for the current English labour article and current English Kairouan consultation page. This confirms indexing for those two URLs in the supplied results despite the observed initial metadata mismatch. No causal indexing loss is established for either page.

The owner then supplied four redirect-error examples, one soft-404 example and three crawled-but-not-indexed examples. Live HTTP checks on 8 September found:

| Reported category and URL path | Current behavior |
| --- | --- |
| Redirect error: `/?lang=fr` | One 301 to `/`, then 200 with the correct canonical. |
| Redirect error: `/actualites/new-foreign-exchange-code-tunisia-2026` | One 301 to `/en/actualites/nouveau-code-des-changes-tunisie-2026`, then 200 with article content. Destination's initial canonical incorrectly points to `/`. |
| Redirect error: `/actualites/labour-code-reform-2025` | One 301 to `/en/actualites/reforme-code-du-travail-2025`, then 200 with article content. Destination's initial canonical incorrectly points to `/`; owner has confirmed destination is indexed. |
| Redirect error: `/actualites/shared-custody-reform-tunisia` | One 301 to `/en/actualites/reforme-famille-garde-partagee-tunisie`, then 200 with article content. Destination's initial canonical incorrectly points to `/`. |
| Soft 404: `/actualites/egalite-succession-tunisie-debat-2026?lang=ar` | One 301 to `/ar/actualites/egalite-succession-tunisie-debat-2026`, then 200 with an Arabic article heading and correct canonical. |
| Crawled, not indexed: `/en/actualites/protection-donnees-personnelles-tunisie-2026` | Direct 200 with the article heading. Initial canonical incorrectly points to `/`. This is an exact current-URL overlap with the metadata defect. |
| Crawled, not indexed: `/contact?lang=ar` | One 301 to `/ar/contact`, then 200 with the contact heading and correct canonical. |
| Crawled, not indexed: `/?lang=ar` | One 301 to `/ar`, then 200 with the Arabic homepage heading. Destination's initial canonical incorrectly points to `/`. |

All eight final responses have `index, follow` meta directives and no X-Robots-Tag header. These checks are not equivalent to Google's live test or a full robots/accessibility audit. No redirect loop or failed destination was reproduced. A 200 response alone cannot rule out Google's soft-404 classification, but the legacy inheritance URL now redirects to an actual article rather than presenting a missing-page response in this check.

The four redirect examples were last crawled on 5 July; the soft-404 example on 31 July. The current English data-protection article was last crawled on 19 July, the old Arabic contact URL on 8 April and the old Arabic homepage URL on 11 March. These reports do not establish current destination index status except where the owner separately provided URL Inspection evidence.

The English data-protection article is now the best targeted investigation: it is both a current URL reported as not indexed and a confirmed initial-canonical mismatch. The category alone does not identify canonical selection as the cause; content, rendering and other indexing signals remain possible factors. Request its current URL Inspection details (status, last crawl, user-declared canonical and Google-selected canonical). The Arabic homepage is also worth inspecting because of its importance and the destination metadata mismatch. No blanket redirect rewrite is justified by the successful checks.

## Authorized corrections

After the owner authorized necessary fixes, the local release preparation was updated:

- Retained the earlier prerender change that waits for the page heading and expected canonical before saving HTML, with regenerated gzip/Brotli HTML copies.
- Extended the release audit to check Open Graph URLs as well as canonical URLs.
- Regenerated compressed sitemap copies after sitemap generation, and added an equality check against the final XML. This prevents stale copies in the build; it does not establish the cause of Search Console's temporary sitemap processing message.
- Rewrote the data-protection article in French, English and Arabic with official INPDP sources, a practical preparation checklist, an explicit correction of unsupported reform assertions, and an actual update date of 8 September 2026. Preserved the publication date and all three existing URLs.
- Preserved the working legacy redirects. No current redirect loop was reproduced.

The owner supplied detailed URL Inspection for the English data-protection article: successful fetch, crawling and indexing allowed, correct user-declared canonical, Google-selected canonical equal to the inspected URL, last crawl 19 July 2026. It remains reported as crawled but not indexed. This evidence **does not support attributing its exclusion to the canonical inconsistency**. The article revisions address demonstrable sourcing and accuracy problems without promising indexing.

These are local changes. Production deployment and subsequent live-response verification are separate from the local build checks; no Search Console validation or indexing request has been submitted.

Validation completed: production build and prerender of all 90 URLs; SEO audit including canonical/Open Graph URLs and compressed HTML/sitemap equality; TypeScript; ESLint; all five existing tests. The three generated replacement articles also retain their publication date, expose the actual update date and include four official source links.
