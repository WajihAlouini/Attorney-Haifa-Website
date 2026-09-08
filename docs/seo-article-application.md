# SEO article: application to this firm

Audit date: 8 September 2026. Based on the user-provided article and repository inspection. These are local changes and draft profile assets; no profile updates or deployment were performed.

## Business context

- Firm: Cabinet Maître Haifa Guedhami Alouini.
- Website: https://maitre-haifaguedhami.me
- Office: Beb Djelladine, Rue des Martyrs, Kairouan 3100, Tunisia (existing website data).
- Phone: +216 98 643 612.
- Google Maps: https://www.google.com/maps?cid=2428048899655277535
- Languages: French, Arabic, English.
- Existing practice areas: family, property, business and criminal law; legal consultations.
- Existing location pages cover Kairouan and national Tunisian service queries. National coverage does not establish additional physical offices.
- Search Console performance, current GBP categories/attributes and current competitor positions remain unverified. Semrush returned an insufficient API units response. No search-volume or ranking estimates have been invented.

## What was applied

| Article idea               | Decision and implementation                                                          | Expected benefit                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Load business context      | Recorded existing firm details above                                                 | Consistent future copy                                                                                                                       |
| Audit existing pages first | Added final HTML audit to production build                                           | Catch missing metadata, wrong canonicals/languages, duplicate titles, broken language alternates and stale compressed HTML before deployment |
| Strengthen trust           | Visible article author links to the localized biography; author URL in schema        | Readers can identify the author and find their background                                                                                    |
| Keep content current       | Optional `updated` frontmatter flows to visible date, article metadata and JSON-LD   | Accurate dates when an article is actually revised                                                                                           |
| Describe services clearly  | Service nodes now use `Service`, linked to the existing firm, with a contact channel | Distinguish services from the business providing them                                                                                        |
| Improve image presentation | Permit large search image previews                                                   | Allows larger previews where Google chooses them                                                                                             |
| Service + city pages       | Retained the existing pages rather than generating repetitive city variants          | Preserve existing intent coverage                                                                                                            |

Technical fixes take effect when deployed. Search effects require recrawling and should be assessed over several weeks; no position or traffic increase is guaranteed.

## Ready-to-review Google Business Profile copy

These drafts use services already present on the website. The profile has not been audited or edited. Confirm that each offered service and location remains accurate before publication.

### Business description

Maître Haifa Guedhami Alouini, avocate à Kairouan, accompagne les particuliers et les entreprises dans leurs démarches juridiques en Tunisie. Le cabinet intervient en droit de la famille, droit immobilier, droit des affaires et droit pénal. Situé à Beb Djelladine, rue des Martyrs, il propose un accompagnement adapté à votre situation et à vos documents. Les échanges sont possibles en français, en arabe et en anglais. Contactez le cabinet pour convenir d’une consultation.

### Service descriptions

**Droit de la famille** — Le cabinet accompagne les particuliers à Kairouan pour leurs questions de divorce et de droit de la famille. Une consultation permet de présenter votre situation, d’examiner les documents disponibles et de préciser les démarches adaptées à votre dossier.

**Droit immobilier** — Vous préparez une opération immobilière ou rencontrez un litige à Kairouan ? Le cabinet vous accompagne dans l’examen des titres et contrats ainsi que dans les questions de location et de contentieux immobilier. Présentez vos pièces pour définir les points à vérifier et les prochaines étapes.

**Droit des affaires** — Maître Haifa Guedhami Alouini accompagne les entreprises pour leurs questions de sociétés, de contrats et de litiges commerciaux en Tunisie. Depuis le cabinet de Kairouan, une consultation permet d’examiner votre projet ou votre différend et d’identifier les documents et démarches nécessaires.

**Droit pénal** — Le cabinet propose un accompagnement en droit pénal à Kairouan. Lors du premier échange, précisez l’objet de votre demande et les dates figurant sur les convocations ou documents reçus. L’examen du dossier permet d’organiser la suite de l’accompagnement.

**Consultation juridique** — Préparez votre consultation à Kairouan en réunissant les documents utiles, les dates importantes et vos principales questions. Le cabinet examine votre situation et vous aide à comprendre les démarches envisageables. Contactez-le pour convenir des modalités du rendez-vous.

### Two publication drafts

**Préparer votre consultation juridique à Kairouan**

Un contrat, une convocation ou un échange écrit peut aider à comprendre votre situation. Avant votre rendez-vous, rassemblez les documents utiles, notez les dates importantes et préparez vos questions. Contactez le cabinet pour convenir d’une consultation.

CTA destination: https://maitre-haifaguedhami.me/contact

Photo: an existing real consultation-room photo, with no client documents visible.

**Un projet immobilier en Tunisie ?**

Les titres, contrats et pièces disponibles sont le point de départ de l’examen de votre projet. Le cabinet de Maître Haifa Guedhami Alouini à Kairouan accompagne les particuliers pour leurs questions immobilières. Présentez votre situation au cabinet afin de préparer une consultation adaptée.

CTA destination: https://maitre-haifaguedhami.me/avocat-immobilier-kairouan

Photo: the actual office entrance so visitors can recognize the location.

## Measurement and remaining account work

1. Export Search Console's last 90 days by query **and page**, with clicks, impressions, CTR and position, filtered to the relevant country. Compare with the preceding period. Separate branded queries and languages.
2. Prioritize existing service pages with meaningful impressions at positions 4–20. Match the page to search intent before rewriting titles. Low CTR alone does not prove a title problem.
3. Track calls, consultation submissions and WhatsApp clicks alongside organic visits. Record deployment dates; avoid attributing every change to SEO edits.
4. Check the live GBP's address, phone, hours, appointment link and actual services. Select only categories and attributes that accurately describe the firm, even if competitors use others.
5. Review legal articles for primary sources and current accuracy before adding a genuine `updated: "YYYY-MM-DD"` date. This implementation does not certify the articles' legal accuracy or imply a new attorney review.

## Claims from the article that are not implementation rules

Google describes local ranking in terms of relevance, distance and prominence. Its documentation does not establish the article's promises about keyword-rich replies, photo geotagging, posting frequency or guaranteed rankings within 90 days. Helpful responses and real photos are useful to prospective clients without those promises. Do not coach clients to insert SEO phrases or disclose case details in reviews.

Google also does not prescribe a minimum word count, exact title character limit or a separate page for every city/service combination. Write useful pages for real services and genuine locations; do not manufacture testimonials, offices or same-day availability.

Sources:

- [Google local ranking guidance](https://support.google.com/business/answer/7091)
- [Helpful content and author transparency](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google image guidance](https://developers.google.com/search/docs/appearance/google-images)
- [Schema.org Service](https://schema.org/Service)

## Verification

Run `npm run build:prerender` to build, render all sitemap pages and run the SEO gate. `npm run audit:seo` checks an existing build. These checks validate local artifacts; they do not replace live HTTP status checks, Search Console or Google's rich-results validation.
