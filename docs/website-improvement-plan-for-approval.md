# Website improvement plan — awaiting approval

Prepared 8 September 2026. **This is a proposal, not authorization to implement or deploy.** No website source, content or hosting settings were changed during this audit. Earlier local work remains in the workspace and is distinct from what is currently live.

## Recommendation

**Implementation status update:** The owner subsequently approved the Arabic practice-card fix, then authorized necessary corrections during the indexing investigation. Local work now includes stable service identifiers, hardened prerender/metadata and compressed-output checks, and a sourced rewrite of the data-protection article in all three languages. This does not mark the wider Kairouan/Tunis content plan as completed. See [the indexing investigation and authorized corrections](indexing-analysis-2026-09-08.md) for the later evidence; production deployment has not occurred.

Make the firm a stronger, more useful local choice in **Kairouan**, while presenting **Tunis as a place where clients can be served from Kairouan through travel and remote consultations**. The owner confirmed that operating model during this review. Do not imply a permanent Tunis office.

The site already has substantial service coverage. The best first investment is correcting demonstrable defects, improving the existing local pages and making the legal content more trustworthy. More city pages would not address the most important problems found here.

## What was examined

- All **90 current sitemap URLs**: 30 distinct page routes in French, English and Arabic. All 90 returned HTTP 200 and contained main content, one H1 and a description in the live response check.
- The 30 distinct content pages, their translated content, and the source templates/data that generate them. All 24 article files were inspected.
- Canonical URLs in raw live HTML, with separate JavaScript-rendered checks for three affected examples.
- Internal links across all 90 local generated pages. No internal page path was missing from that inventory; this does not mean each link label points to the right subject.
- Representative live mobile layouts at 390 × 844: Kairouan landing page, Arabic divorce page and contact page. No horizontal overflow was detected on those three pages. This was not a full accessibility or Core Web Vitals certification.
- Homepage, navigation, footer, article links, service templates, consultation form, booking widget and analytics event implementation. No forms were submitted and no appointments were booked.
- The owner's Search Console export for 7 June–6 September 2026. Analytics account data, completed consultations, competitor rankings and current Maps positions remain unavailable.

## Revalidation and severity clarification

After the owner questioned the severity of the findings, the live checks were repeated. **The evidence does not establish a widespread or critical functional failure.** Priority in this SEO plan must not be confused with functional severity.

| Finding | Verified evidence | Classification and limits |
| --- | --- | --- |
| Arabic practice-card routing | An actual browser click on the business card at `/ar/services` opened `/ar/services/droit-de-la-famille`, whose heading describes family law. The other card destinations were inspected again; three of four are mismatched. French and English card destinations are correct. | One confirmed, localized navigation defect of moderate functional severity. Three wrong cards are manifestations of the same mapping defect, not three separate critical bugs. |
| Initial canonical metadata on 10 URLs | A second scan of all 90 live sitemap URLs found the same 10 homepage canonicals. Separate browser checks on three affected examples showed JavaScript correcting the canonical. | Confirmed SEO metadata inconsistency. The pages display content; Google-selected canonicals and any resulting traffic loss have not been established. |
| Kairouan content depth, page overlap and contact hierarchy | Existing page content and representative mobile layouts were reviewed. | Improvement opportunities, not functional bugs. Query-by-page data would be needed to investigate suspected search competition between pages. |
| Legal article sourcing and wording | Article files lack source URLs; a specific international-transfer claim conflicts with the official procedures cited below. Other asserted reforms still require verification. | Content accuracy and editorial review issues, not application failures. Unverified claims are not automatically false. |

All 90 sitemap URLs returned HTTP 200 in both live scans. That confirms availability in those checks; it does not certify every interaction. No contact form was submitted, no appointment was booked, and no end-to-end delivery claim is made.

The metadata spot checks also reproduced the initial mismatch with uncompressed responses and both a normal browser user-agent and a Googlebot user-agent string. A user-agent string does not reproduce Google's indexing process. Responses were still CDN cache hits, so these checks did not bypass the deployment cache or establish the deployment defect's root cause.

Reproduction for the navigation defect: open [the live Arabic services page](https://maitre-haifaguedhami.me/ar/services), select the business/corporate-law card, and compare its label with the destination's family-law heading. The mapping evidence is described in finding 2 below.

No website implementation or deployment was performed during this revalidation. The proposal still awaits the owner's approval.

## Findings that determine the order of work

### 1. Ten live pages initially identify the French homepage as their canonical

The live HTTP responses for the following pages declare `https://maitre-haifaguedhami.me/` as their canonical URL:

- `/ar`
- `/en/consultation-juridique-kairouan`
- All eight `/en/actualites/{article-slug}` pages.

Repeated checks of the Arabic homepage, English property article and English Kairouan consultation page also returned the French homepage title and Open Graph URL. After JavaScript ran, those three examples changed to their correct canonicals.

This is a verified difference between the initial HTML and browser-rendered metadata, not proof of which canonical Google has selected. It is especially relevant to the English property article, which has 9,027 impressions in the export. Google advises keeping canonical URLs consistent between initial HTML and JavaScript. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

The current local generated pages have correct canonicals after the earlier changes. The proposal is to review that existing work, ensure the build reliably waits for page-specific metadata, and add live-response verification to release checks. Do not assume a local pass proves the deployment is correct or that this defect alone explains low CTR.

### 2. Arabic practice cards send visitors to the wrong services

Verified in the live Arabic services page and explained by the shared source component:

| Arabic card label | Current destination | Required destination |
| --- | --- | --- |
| Business and corporate law | Family law | Business law |
| Property law | Business law | Property law |
| Family and inheritance law | Property law | Family law |
| Criminal law | Criminal law | Already correct |

The component assigns routes and icons by array position, while Arabic orders the services differently from French and English. The shared component is used on the homepage and services index. Fix the underlying identity mapping so labels, icons and destinations stay aligned in every language.

### 3. The main Kairouan page does not yet function as a useful local introduction

`/avocat-kairouan` has a service introduction, general benefits, two contact buttons and three FAQs. Its main content does not present the actual office address, directions, office photographs or practical appointment details. The specialist Kairouan pages contain more local detail than the page that should introduce the office.

All five Kairouan pages already receive footer links. Practice pages and articles also contain relevant local links. They are not orphan pages. The opportunity is a clearer local journey and better information at the point of decision, not simply adding more links everywhere.

### 4. Service pages and national guides overlap

Family, property, business and criminal law each have a practice-area page and a national landing page; family/property/business also have Kairouan variants. Much of the copy repeats diagnosis, strategy, urgency, documentation and follow-up.

The proposed distinction is:

- Practice-area pages: explain the scope of representation and which situations the firm handles.
- National topic pages: help a visitor with a specific legal problem understand the next step.
- Kairouan pages: explain local appointments, case preparation and working with this office.
- Articles: answer informational questions using dated, verifiable sources.

This is an editorial recommendation. The Search Console export does not contain query-by-page data, so it does not establish keyword cannibalization. Preserve current URLs and successful pages unless stronger evidence supports consolidation.

### 5. Legal article reliability needs work before wider promotion

None of the 24 article files contains an external source URL, explicit author field or update date. The parser supplies the attorney's name by default. That is not evidence of authorship or legal review; the earlier visible-author implementation must be assessed against actual responsibility for the content.

There is at least one substantiated factual problem: the data-protection article describes an absence of a regime for international transfers. INPDP publishes authorization procedures under the 2004 law, including a specific transfer authorization form. That assertion needs correction. [INPDP procedures](https://www.inpdp.tn/Formulaires.html), [official procedure manual](https://www.inpdp.tn/Manuel_procedures_INPDP.pdf)

Other articles make detailed claims about 2026 rental regulation, a family-code proposal, inheritance equality, Startup Act amendments and exchange-code changes without identifying supporting legal texts. Their status was not established by this audit. Lack of a located source is not proof a proposal does not exist; it is a reason to verify before presenting it as law.

Translation also needs a substantive review. For example, the local divorce procedure uses the French term “caprice” but the Arabic version uses “سوء المعاشرة”; the English criminal page translates “audition libre” as “free hearings.” The Arabic biography is more promotional and less specific than the French/English biography. Legal terminology and qualifications should convey the same meaning across languages.

### 6. Contact options work as navigation, but the page provides little preparation guidance

The contact page has WhatsApp, email, an office address, a three-field form, a map and office images. The French mobile heading is large and generic; at 390 × 844, the address and form lie below the first viewport. The persistent call/WhatsApp bar remains accessible, which is a strength to preserve.

The next improvement is practical: a concise appointment heading, direct call and directions links in the contact content, office details, languages, what to prepare and what happens after a request. Do not make the form longer simply to collect more data.

### 7. Some earlier concerns are already handled

- The tested `/avocat-divorce-tunisie?lang=ar` URL redirects server-side to its current Arabic page. The historical `?lang=` rows do not justify a blanket new redirect system.
- `/faq` and `/en/faq` currently return 404; both appear in the historical export. They warrant an equivalent-content decision, not an automatic redirect to the homepage.
- A random nonexistent URL returns 404. `/experiment` also returns 404 on direct live access, although an experimental route exists in client code. This is not an observed live indexable duplicate homepage.
- Article-to-service links, local service links, a sitemap, language alternates, responsive images, real office photography, a review section and structured data already exist.
- Phone, email, WhatsApp and booking-open events are already implemented. The contact form emits a submission event after API success. Booking-open is not booking-completed; outbound clicks are not confirmed consultations.
- The homepage repeats article cards for its scrolling carousel, but its clones are already marked `aria-hidden` and excluded from tab order. That deliberate repetition is not a reason to report duplicate pages.

## Page-by-page assessment and proposed treatment

Each row covers its French, English and Arabic versions. Article paths below are under `/actualites/`.

| Page | What it currently does | Proposed treatment |
| --- | --- | --- |
| `/` | Brand introduction, services, experience claims, reviews, articles and contact | Preserve the visual identity; add a concise, visible Kairouan office introduction and a useful route to local services. Fix Arabic card routing. |
| `/about` | Biography plus repeated values, process and guide links | Strengthen factual professional background, explain who handles matters and verify credentials/experience claims; align Arabic tone and meaning. |
| `/services` | Four practice cards and contact form | Fix Arabic destinations; make it easy to select a service by the visitor's situation; include an obvious consultation path for people who are unsure. |
| `/values` | Short principles page repeating homepage/about content | Low priority. Keep it available and improve practical explanations of communication and fees if confirmed. No speculative removal or extra keyword copy. |
| `/contact` | Contact details, form, map and gallery | Improve mobile hierarchy and appointment preparation; make the Kairouan location explicit. |
| `/actualites` | Eight reverse-chronological articles | Keep the archive; display accurate publication/revision status and clearer topic navigation after the articles are reviewed. |
| `/services/droit-de-la-famille` | Broad family-law representation, documents, process and FAQs | Preserve scope beyond divorce; distinguish family-law service information from divorce instructions. Correct terminology and remove repeated headings. |
| `/services/droit-immobilier` | Transactions, title review, leases and disputes | Preserve broad representation scope; make the routes for buyers, owners and heirs clearer. |
| `/services/droit-des-affaires` | Company setup, contracts, debt and shareholder disputes | Focus on concrete SME needs and case preparation; support promises with the actual operating process. |
| `/services/droit-penal` | Custody, investigation, defence and civil-party representation | Review legal assertions and emergency availability; preserve a clear contact route without promising unverified immediate attendance. |
| `/avocat-kairouan` | Short general local landing page | Highest local content priority: office, directions, services, appointment steps, languages and genuine evidence of practice. |
| `/avocat-divorce-kairouan` | Local family matters, documents and court process | Improve practical consultation details; verify court/jurisdiction statements and harmonize legal terminology in all languages. |
| `/avocat-immobilier-kairouan` | Titles, transactions, leases and local disputes | Organize content around purchase, inheritance/co-ownership and lease problems; verify local institutional references. |
| `/avocat-affaires-kairouan` | SME contracts, setup and recovery | Make document preparation and the first consultation more concrete; verify registry and court references. |
| `/consultation-juridique-kairouan` | Consultation benefits, preparation and FAQs | Explain the appointment journey and fee-estimate process using confirmed facts; correct live English metadata. |
| `/avocat-divorce-tunisie` | Short national divorce landing page | Protect the Arabic version's traction (116 clicks); expand only useful, verified answers and connect national needs to local/remote consultation. |
| `/avocat-immobilier-tunisie` | National property service landing page | Clarify the next step after reading the foreign-property articles; avoid repeating the broad practice page. |
| `/avocat-affaires-tunisie` | National contracts/company landing page | Distinguish commercial decision support from the broad practice overview; prioritize after stronger family/property opportunities. |
| `/consultation-juridique-tunisie` | National/remote consultation page | Strengthen the Arabic version (310 impressions, average position 11.26) and clarify how clients in Tunis consult the Kairouan office. |
| `/code-du-travail-tunisie` | Brief labour-law overview marketed as a complete guide | Align promise with actual depth; verify legal statements and distinguish evergreen guidance from the reform article. |
| `/avocat-penal-tunisie` | National criminal defence landing page | Differentiate from the practice page; review urgency promises and translations. No new local criminal page in the first batch. |
| `/avocat-tunisiens-etranger` | Remote representation; English version targets international clients more broadly | Preserve this useful positioning; explain practical limits of remote work and connect to relevant property/family articles. |
| `immobilier-etrangers-tunisie-2026` | Purchase rules and process for foreigners | High priority: verify distinctions between foreigners and non-resident Tunisians, permits, fund-transfer evidence and timelines; add clear legal-help options. The English title already matches “Can foreigners buy property…” so do not prescribe that same rewrite again. |
| `location-touristique-tunisie-reglementation-2026` | Detailed asserted 2026 rental framework | High priority for source/status verification; retain URL and useful material. French version has 118 clicks. Remove or qualify unsupported specifics through an editorial review. |
| `reforme-famille-garde-partagee-tunisie` | Claimed reform and current custody arrangements | Verify the referenced proposal and current rules; clearly separate enacted rules, proposals and interpretation. |
| `egalite-succession-tunisie-debat-2026` | Inheritance rules and claimed return of a bill | Verify parliamentary status and qualify simplified inheritance examples; preserve Arabic search traction. |
| `nouveau-code-des-changes-tunisie-2026` | Proposed currency-account, crypto and payment changes | Verify current status and BCT sources; resolve the stale Q1 2026 forecast and tension between “proposal” and operative wording. |
| `reforme-code-du-travail-2025` | Employer-oriented reform summary | Verify the law, commencement, sanctions and outsourcing assertions; address PDF-seeking intent only with actual official documents. |
| `protection-donnees-personnelles-tunisie-2026` | Data-law reform narrative and compliance advice | Correct the confirmed transfer-regime problem; verify the proposed reform, stated deadlines and INPDP references. |
| `startup-act-tunisie-amendements-2026` | Claimed 2026 amendments, label and investment changes | Verify draft/adoption status, label durations, figures and tax claims against official texts; avoid presenting anticipated changes as current rules. |

## Proposed implementation sequence

### Phase 1 — Correct the verified technical and navigation defects

**Priority: highest. Effort: small to medium.**

1. Review and complete the earlier prerender/SEO-check changes already in the workspace. Capture each page only when its own title, description, canonical and content are ready.
2. Verify plain and compressed output and the deployed HTTP response; investigate any remaining discrepancy in hosting/build artifacts rather than relying on browser-side repair.
3. Replace array-position service routing with stable service identifiers. Match translated labels and icons to those identifiers.
4. Add regression coverage for Arabic card destinations and initial HTML metadata across the route inventory.
5. Inspect the historical FAQ URLs. Restore an equivalent useful FAQ destination or propose a precise redirect; preserve true 404s for unrelated nonexistent pages.

**Acceptance:** all 90 pages return their own correct metadata before JavaScript; language switching retains correct metadata; all practice cards open the intended service in every language. A preview can be reviewed before any production deployment.

### Phase 2 — Strengthen Kairouan and the consultation journey

**Priority: high. Effort: medium.**

1. Improve `/avocat-kairouan` as the central local page, using the actual office, address, existing photos, directions and confirmed appointment process.
2. Refine the four specialist Kairouan pages. Keep useful document checklists, add answers visitors need, and replace repetitive institutional/geographic wording with verified practical detail.
3. Add a concise Kairouan section to the homepage, with prominent relevant links. Retain its brand-led introduction and existing design rather than redesigning the whole site.
4. Improve contact-page layout, call/directions access and the explanation of what happens after a request. Preserve the short form and mobile contact bar.
5. Replace the indiscriminate list of all 11 other guides on each cluster page with a smaller, topic-relevant selection, while maintaining full discoverability through the services index, local hub and footer. Existing links are a strength; improve selection and placement.
6. Align biography, service facts and terminology across French/Arabic/English. Use explicit responsibility for authored/reviewed content rather than silently attributing everything to the attorney.

**Proposed copy direction, for review:**

- Kairouan H1: **“Avocate à Kairouan : divorce, immobilier et affaires”**.
- Arabic equivalent: **“محامية في القيروان: طلاق وعقارات وقضايا أعمال”**.
- Contact H1: **“Prendre rendez-vous au cabinet de Kairouan”**.
- Local page structure: the firm and its office → choose your legal matter → prepare your appointment → what happens next → practical FAQs → contact/directions.

These are draft directions, not final approved wording. There is no minimum word-count target; each addition must answer a real visitor question.

**Acceptance:** a visitor can identify the office, choose the right service, understand how to arrange an appointment and contact the firm comfortably on mobile. Service meaning remains consistent across languages. No fabricated availability, results, testimonials or location claims.

### Phase 3 — Repair and strengthen the content already attracting visitors

**Priority: high; factual review can run alongside Phase 2. Effort: medium to large, depending on source availability.**

1. Review all eight article subjects against current primary sources: legislation/publication records, parliamentary documents, relevant ministries, BCT, INPDP and the official Startup Tunisia framework.
2. Prioritize the confirmed data-protection error and the high-traffic property/rental/family content. Preserve working URLs; factual corrections take precedence over preserving misleading wording.
3. Add source links, an accurate distinction between current law and proposals, explicit authorship/review responsibility and genuine revision dates. Do not claim the lawyer reviewed an article without confirmation.
4. Synchronize substantive changes across all three languages, retaining useful audience adaptation such as the English international-client page.
5. Add a small contextual consultation block where it helps: property review after the property guide, family consultation after family articles. The existing related-resource links should remain useful rather than being duplicated.
6. Test title/description changes only where the current wording mismatches the verified content or page-filtered search evidence. Global low CTR alone is insufficient evidence.

**Acceptance:** article claims are traceable; proposed reforms are clearly identified; translated legal meaning agrees; readers have an appropriate next step. Any claim still unverified is listed for a decision rather than silently published as fact.

### Phase 4 — Pursue Tunis through the firm's real service model

**Priority: second to Kairouan. Effort: small initially; expansion conditional on evidence.**

1. Clarify Tunis service arrangements on existing national consultation and practice pages: office in Kairouan, remote exchanges, travel where the matter requires it.
2. Correct wording such as “basée à Kairouan, à Tunis et à distance,” which can imply multiple bases. Use consistent business-location information in visible copy and structured data.
3. Start with relevant family, property and remote-client needs, using existing pages that already cover these services. Do not launch a page for each Tunis neighbourhood.
4. Consider one dedicated Tunis service-area page only if it adds specific useful information and Search Console or genuine enquiries justify it. Its inclusion would be a separate proposal, not assumed approval under this first implementation.

Suggested message: **“Vous êtes à Tunis ? Depuis son cabinet de Kairouan, Maître Haifa Guedhami Alouini peut organiser les échanges à distance et les déplacements nécessaires selon votre dossier.”**

Tunis organic visibility is a reasonable objective. Dominating its Maps results from Kairouan cannot be promised: distance is one of Google's local ranking factors. [Google local ranking guidance](https://support.google.com/business/answer/7091)

### Phase 5 — Measure qualified enquiries and protect gains

**Priority: included in release verification and follow-up. Effort: small to medium; account reporting depends on access/export.**

- Preserve existing contact-click and successful form-submission events; validate their behavior instead of installing redundant tracking.
- Check whether actual booking completion can be recorded through the booking provider; distinguish it from opening the booking interface.
- Use page/language/service context for reporting without sending names, email addresses or case narratives to Analytics.
- Compare equal 28-day windows following deployment, recording the release date and allowing time for recrawling. Track Tunisia separately from other markets, and Arabic/French service performance separately from English informational traffic.
- Primary business outcome: qualified consultation enquiries. Supporting indicators: target-page clicks, relevant query impressions, CTR within comparable segments and completed forms/bookings where available.
- The current baseline is 351 clicks in the latest 28 days, versus 271 previously. Do not attribute that pre-existing growth to this work.

**Acceptance:** technical checks pass before release; the subsequent report identifies observable changes and limitations without inventing causal attribution or counting clicks as clients.

## Facts needed for final content

The Tunis operating model is confirmed. During implementation, unresolved factual claims will be kept out of new copy or presented for a decision:

- Actual office opening/appointment hours and realistic response expectations.
- How consultation fees are explained and whether any public fee information is desired.
- Professional credentials, duration of practice and support for the “2,000+ cases” claim already displayed.
- Who authored or legally reviewed the existing articles.
- Correct office map pin/location details. The embedded map coordinates differ from the structured-data coordinates; the correct pin needs checking before changing location data.

These facts should not hold up the verified technical fixes. They govern the claims that can appear in the revised content.

## Approval scope

Recommended approval: **Phases 1–3, the existing-page Tunis clarification in Phase 4, and measurement/verification in Phase 5.** This means correcting and improving the existing site while retaining its visual identity and current route structure unless an explicitly reviewed exception is necessary.

Approval of this proposal would authorize local implementation and a reviewable preview. It would not authorize a production deployment, new Tunis location pages, profile edits, outreach, bulk new articles or invented claims. Existing earlier SEO edits should be included in the review so the final change set is coherent.

Until approval is given, the website remains unchanged by this phase.

## Sources and evidence

- Owner-provided Search Console export; detailed baseline in [Search Console analysis](search-console-analysis-2026-09-08.md).
- Live HTTP/DOM observations and source inspection on 8 September 2026, as described above. Live state may change after this audit.
- [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) for initial HTML/canonical consistency.
- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) for clear sourcing, authorship and reader usefulness.
- [INPDP forms](https://www.inpdp.tn/Formulaires.html) and [procedure manual](https://www.inpdp.tn/Manuel_procedures_INPDP.pdf) for the transfer-regime finding.
- [Official Startup Tunisia framework](https://startup.gov.tn/fr/startup_act/discover), a starting point for verifying the article's claims, not proof of its asserted 2026 amendments.
- [Google local ranking guidance](https://support.google.com/business/answer/7091) for the distinction between service reach and physical proximity.
