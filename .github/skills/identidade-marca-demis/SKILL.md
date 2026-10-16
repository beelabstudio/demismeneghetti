---
name: identidade-marca-demis
description: Visual identity and voice for Demis Meneghetti's personal brand (@demismeneghetti). Defines palette, typography, marks, graphic devices, imagery, formats and voice. Use before creating or reviewing any graphic, carousel, reel cover, thumbnail, slide deck, banner or web UI for the personal brand, and for collab content with Bee Lab Studio.
---

# Demis Meneghetti: Brand Identity

> **Status:** v1.1 draft, 2026-10-16 (v1.1: amber family + companion
> colours, per Demis). Visual system is fully specified and
> ready to use. Items marked **OPEN** need Demis's decision (see
> [Open decisions](#open-decisions)). Built with
> `~/repos/ai/skills/design/brand-designer`; taste rules from
> `frontend-taste` and `web-visual-design`.
>
> Doc language is English (repo convention). Example copy is in pt-BR,
> the language the site and talks already use.

---

## 1. Brand foundation

| Element | Definition | Source |
|---|---|---|
| **Who** | Demis Meneghetti. Founder of Bee Lab Studio, co-founder of UFlowApp. Based in Leça da Palmeira, Portugal. | site, vault |
| **Positioning** | Technology and AI applied to real business processes, explained for SME owners, with a QA engineer's rigor: *test before you automate*. | `Canais de Aquisição`, talk *QA-First na Era da IA* |
| **Content pillars** | AI applied to business processes · Behind the scenes at Bee Lab Studio · Client before/after · AI myths | `Canais de Aquisição` |
| **Personality** | Direct, practical, plain-spoken, grounded about AI, warm. *(proposed from the evidence above, confirm)* | inferred |
| **Mission / values** | **OPEN.** Not documented anywhere. Deliberately not invented here: the visual system below is justified by the positioning, not by made-up values. | n/a |

### Brand architecture: the root of the Bee family

**Grupo Bee** is Demis's informal umbrella for the brands he created: Bee
Lab Studio, Bee Lab Academy, Bee Creator Studio, BeeVideoEditor. Until
now it existed only in his head; this section is its first written
record. In his words: *"Eu sou Bee."* The personal brand is the person at
the centre of that family. It carries the family colour without copying
any single company, and also has to carry UFlowApp, talks and a career
beyond any one business.

- **Shared with the whole Bee family:** the amber yellows (§2.1), anchored
  on Honey `#FFC107`, identical in every Bee brand. Yellow always leads.
- **Owned by the personal brand:** typography, the companion colours as
  used here, warm neutrals, the highlighter, the portrait as primary mark.
- **Owned by BLS, never used here:** hexagons, honeycomb patterns, bee
  illustrations, Jost, the "Bee Lab **Studio**" two-colour wordmark rule,
  brand gradients.

### Directions considered

| Direction | What it is | Verdict |
|---|---|---|
| **A. Highlighter** | The amber family leads, with three deep companions (Noite, Petróleo, Brasa), warm ink/paper neutrals and a characterful grotesk. The signature gesture is a honey highlighter behind the words that matter. The portrait on a honey circle is the mark. | **Chosen.** Keeps the yellow recognition the avatar already has; ties the personal brand to every Bee brand; the marker is the QA reviewer's gesture (*this is the part that matters*) and does real work on reel covers. Refined by Demis on 2026-10-16: yellows lead, explore their variants and colours that combine with them. |
| B. Independent Cobalt | Drop yellow entirely; a cobalt accent on bone and ink. | **Rejected by Demis** on 2026-10-16: everything in the Bee family is yellow-toned. |
| C. BLS Extension | Adopt the BLS system wholesale (Jost + Inter, hexagons, honey). | Cheapest, but turns Demis into a BLS spokesperson account and can't carry the rest of the family, UFlowApp or talks. Rejected. |

---

## 2. Colour system

Three layers. **Yellow leads**, as in every Bee brand. Neutrals carry
text and calm, and the companions add range without leaving the family.

### 2.1 Amber family (the Bee yellows)

Taken from the **Material Design Amber scale**, which the Bee brands
already use: BLS uses 50 and 500, Bee Creator Studio 300, 500 and 600, and
BeeVideoEditor's default caption highlight is A400. The steps are spaced
far enough apart that none of them reads as a "wrong yellow" next to
another.

| Token | Name | HEX | RGB | Scale | Role |
|---|---|---|---|---|---|
| `--creme` | Creme | `#FFF8E1` | 255 248 225 | Amber 50 | Yellow-tinted light background: covers, quote slides, cards on Paper |
| `--mel` | Mel | `#FFE082` | 255 224 130 | Amber 200 | Soft fills and blocks; labels and secondary accents on dark backgrounds; chart step |
| `--honey` | Honey | `#FFC107` | 255 193 7 | Amber 500 | **The signature.** Highlighter, avatar circle, CTAs, honey covers. Identical in every Bee brand, never altered |
| `--ambar` | Âmbar | `#FF8F00` | 255 143 0 | Amber 800 | Hot accent and loud cover background; deepest chart step |
| `--ocre` | Ocre | `#8A5A00` | 138 90 0 | custom | The only yellow that works as **text on light** (5.6:1): labels, big numbers, small accents on Paper/Creme |

### 2.2 Neutrals

| Token | Name | HEX | RGB | Role |
|---|---|---|---|---|
| `--ink` | Ink | `#1C1A17` | 28 26 23 | Text on light; dark background. Warm off-black, biased toward honey. Never `#000000`. |
| `--paper` | Paper | `#FAF8F3` | 250 248 243 | Neutral light background: text-heavy slides, screenshots, the site. Text on dark. |
| `--graphite` | Graphite | `#2A2723` | 42 39 35 | Raised surfaces and code blocks on dark. |
| `--stone` | Stone | `#6B655C` | 107 101 92 | Secondary text on light. |
| `--ash` | Ash | `#A29C92` | 162 156 146 | Secondary text on Ink, Graphite and Noite. |
| `--line-light` | Line Light | `#E5E0D6` | 229 224 214 | Dividers on light. Decorative only. |
| `--line-dark` | Line Dark | `#3D3933` | 61 57 51 | Dividers on dark. Decorative only. |

### 2.3 Companion colours

Three deep colours that make the yellows stand out. Each has a **default
content pillar**, so the feed varies while each series stays recognisable.
The pillar mapping is a default, not a law; the "one companion per piece"
rule below is the law.

| Token | Name | HEX | RGB | Relationship to yellow | Default pillar |
|---|---|---|---|---|---|
| `--noite` | Noite | `#1E2761` | 30 39 97 | Complementary (blue-violet): maximum pop | IA aplicada a processos; talks and teaching (Bee Lab Academy) |
| `--petroleo` | Petróleo | `#11484B` | 17 72 75 | Cool, calm counterweight | Antes/depois de clientes |
| `--brasa` | Brasa | `#B8430F` | 184 67 15 | Analogous, hotter: alert | Mitos sobre IA |

*Bastidores* (behind the scenes at BLS and Grupo Bee) uses no companion:
only the amber family and neutrals. Noite is the navy the *QA-First* talk
deck already uses, kept for continuity. BeeVideoEditor's `noite` (navy)
and `laranja` (orange) styles are the in-family precedent for a blue and
an orange companion.

Print: convert with the printer's ICC profile, don't hand-type CMYK.
Pantone matches are **OPEN** until the first print job (pick from a
physical swatch book against the screen colours).

### Approved pairings (WCAG 2.1, computed)

Read by background. "Large only" = ≥24px bold or ≥32px regular on screen
(≥64px bold on a 1080 canvas), and UI shapes.

| Background | Text, any size (≥4.5:1) | Large only (≥3:1) | Never as text |
|---|---|---|---|
| Paper | Ink 16.4 · Ocre 5.6 · Stone 5.4 · Brasa 5.1 | n/a | Honey 1.5 · Âmbar 2.2 · Mel · Creme |
| Creme | Ink 16.3 · Ocre 5.6 · Stone 5.4 | n/a | Honey · Mel · Âmbar · Brasa (see rules) |
| Mel | Ink 13.4 · Ocre 4.6 | Stone 4.46 | Paper · Honey |
| Honey | Ink 10.7 | Ocre 3.6 · Stone 3.5 | Paper / white 1.6 · Mel · Âmbar |
| Âmbar | Ink 7.6 | n/a | Paper 2.2 · any yellow |
| Ink | Paper 16.4 · Creme 16.3 · Mel 13.4 · Honey 10.7 · Âmbar 7.6 · Ash 6.4 | n/a | Ocre · Brasa · Noite · Petróleo |
| Graphite | Paper 14.0 · Honey 9.1 · Âmbar 6.5 · Ash 5.5 | n/a | Ocre · Brasa |
| Noite | Paper 13.0 · Creme 13.0 · Mel 10.7 · Honey 8.5 · Âmbar 6.0 · Ash 5.1 | n/a | Ocre · Brasa · Petróleo |
| Petróleo | Paper 9.6 · Creme 9.6 · Mel 7.9 · Honey 6.3 | Âmbar 4.47 · Ash 3.8 | Ocre · Brasa · Noite |
| Brasa | Paper 5.1 · Creme 5.1 | Mel 4.2 · Honey 3.4 · Ink 3.2 | Âmbar · Ocre |

Lines (`--line-*`) are decorative. Never make a line the only thing that
tells someone an element is clickable.

### Usage rules

- **Yellow leads.** Every piece carries at least one amber-family colour.
  Companions never appear without yellow.
- **One companion per piece**, never two. A carousel keeps the same
  companion on every slide.
- **Backgrounds:** Paper, Creme, Honey, Âmbar, Ink, or a companion. Mel is
  a fill, not a full background (too close to Creme and Honey at that
  size).
- **Text-heavy slides** sit on Paper, Creme, Ink, Noite or Petróleo. Honey,
  Âmbar and Brasa backgrounds are for covers, single statements and closing
  slides.
- **Highlighter:** Honey block with Ink text on every background except
  Honey and Âmbar, where it flips to an Ink block with Honey or Mel text.
- **No Brasa on Creme as a pattern.** Cream plus burnt orange is the
  overused "editorial cream + terracotta" look. Brasa pieces sit on Paper,
  Ink or a Brasa background.
- **Charts and data:** sequential scale Creme → Mel → Honey → Âmbar →
  Ocre. Use the piece's companion only for the one series being called out.
- **Links:** on light, Ink text with a 2px Honey underline
  (`text-underline-offset: 0.2em`); on dark backgrounds, Honey text.
- **Primary CTA:** Honey fill + Ink text; on Honey or Âmbar backgrounds,
  Ink fill + Honey text.
- **Light and dark** are both first-class on the web. Dark: Ink background,
  Paper text, Ash secondary, Graphite surfaces. Light: Paper background,
  Ink text, Stone secondary. Yellows are identical in both.
- **No** gradients, glows, coloured shadows or transparency. Flat colour
  only: the amber steps exist so you never need a tint.
- **Deprecated yellows, replace on sight:** `#FFDE59` (current avatar
  circle), `#F5C842` / `#E0B52E` (current site accent), `#F9E795` (talk
  deck "gold"). Any yellow not in §2.1 is off-brand. Bee Creator Studio's
  `#FFD54F` / `#FFB300` are its app's hover and pressed states; don't use
  them in graphics.
- Third-party colours (WhatsApp green, LinkedIn blue, etc.) are allowed only
  on those platforms' own icons/buttons, never as decoration.

---

## 3. Typography

### Families

| Role | Family | Why this one |
|---|---|---|
| Display (headlines, wordmark, covers) | **Bricolage Grotesque** | A grotesk with real character (slightly irregular, hand-touched details) that reads warm and human rather than corporate, matching how Demis talks. Its width axis gives punchy condensed covers that stay legible in a phone feed. Clearly different from BLS's geometric Jost. |
| Body and UI | **Geist** | Neutral, highly legible at small sizes on screen, calm next to an expressive display face. Engineering lineage suits a QA/tech voice without looking like a code editor. |
| Code only | **Geist Mono** | Talks and posts show real test code. Same family as body, so it pairs cleanly. Never used as decoration to "look technical". |

Licences: all three are **SIL Open Font License 1.1** (free for web, print,
video, apps, and uploading to design tools). Source: Google Fonts.

Not used: Inter (BLS body, and the default every template reaches for),
Jost (BLS), any serif, Space Grotesk, Fraunces, Instrument Serif.

### Bricolage Grotesque settings

The variable font has three axes: weight 200–800, width 75–100, optical
size 12–96. Tools without variable support (Canva, Keynote) use the named
static instances, so the spec uses those.

| Use | Instance | Weight | Tracking | Leading |
|---|---|---|---|---|
| Default headline | **SemiCondensed** (width 87.5) | ExtraBold 800 | −0.5% (−5 in Figma/Canva units ≈ −0.005em) | 1.0–1.05 |
| Reel cover / thumbnail headline | **Condensed** (width 75) | ExtraBold 800 | 0 (never negative, letters collide) | 0.95–1.0 |
| Sub-headline, slide title | Normal (width 100) | Bold 700 | −0.01em | 1.1 |
| Wordmark | Normal (width 100) | Bold 700 | −0.01em | n/a |

Optical size: largest available (96) for headlines ≥48px; on the web,
`font-optical-sizing: auto` does it for you.

### Type scale: graphics (px, on 1080px-wide canvases)

| Role | Font | Size | Notes |
|---|---|---|---|
| Cover headline | Bricolage SemiCondensed 800 | 120–144 | ≤4 lines, ≤16 characters per line |
| Reel cover headline | Bricolage Condensed 800 | 128–160 | ≤3 lines |
| Slide title | Bricolage 700 | 72–88 | |
| Body | Geist 400 | 40–44 | Leading 1.4. Ink/Paper for the main line, Stone/Ash for support |
| Signature / caption | Geist 500 | 28–30 | |
| Code | Geist Mono 400 | 32–36 | Honey on Graphite or Paper on Graphite |
| **Absolute minimum** | any | **28** | A 1080 canvas shows at ~36% on a phone; smaller text is unreadable |

Talk slides (1920×1080): title 96–120, body 40–48, code ≥32.

### Type scale: web

```css
--fs-display: clamp(2.5rem, 1.5rem + 4vw, 4.5rem); /* Bricolage 800, wdth 87.5, lh 1.02 */
--fs-h1:      2.5rem;    /* 40px  Bricolage 800, lh 1.05 */
--fs-h2:      2rem;      /* 32px  Bricolage 700, lh 1.1  */
--fs-h3:      1.5rem;    /* 24px  Bricolage 700, lh 1.2  */
--fs-body:    1.0625rem; /* 17px  Geist 400, lh 1.55     */
--fs-small:   0.875rem;  /* 14px  Geist 400/500, lh 1.5  */
--fs-caption: 0.8125rem; /* 13px  Geist 500, lh 1.4      */
```

Body measure 65–75ch. Display caps at 6rem. Tracking floor −0.04em.

### Type rules

- Sentence case everywhere. No ALL CAPS headlines (labels at caption size
  may use uppercase with +0.06em tracking, sparingly).
- Emphasis inside a headline = the **Highlighter** (section 5), never a
  different font, never italics from another family.
- Left-aligned by default. Centre only single-statement covers.
- On the web, **self-host** the woff2 files instead of loading from the
  Google Fonts CDN (EU/GDPR: the CDN sends visitor IPs to Google).
- **OPEN:** confirm Bricolage Grotesque and Geist are in Canva's font list.
  If not, upload the static OTF/TTF files to the Canva Brand Kit (needs
  Canva Pro); the OFL permits it.

---

## 4. Marks

There is no logo, and the personal brand doesn't need one: **the face is
the mark.** Three marks cover every context:

### 4.1 Portrait (primary mark)

Profile pictures, signatures, covers.

- Real **cutout** of Demis (proper alpha matte, not a geometric mask),
  head breaking the **top edge** of a Honey `#FFC107` circle, as the
  current avatar already does.
- No white ring, stroke, shadow or second colour around the circle.
- Square canvas, transparent or Paper background, circle ≈85% of the
  canvas width.
- Minimum size 32px. Below that, use the monogram.
- **Action:** the current `assets/logo.png` uses `#FFDE59` plus a white
  ring. Re-export it with `#FFC107` and no ring, then replace it everywhere
  (Instagram, LinkedIn, site, WhatsApp).

### 4.2 Wordmark

`Demis Meneghetti` in Bricolage Grotesque Bold 700, width 100, tracking
−0.01em, one colour: Ink on Paper, Creme, Mel, Honey and Âmbar; Paper on
Ink, Graphite and the companions. Never a yellow on light, never two
colours, never highlighted.

- **Clear space:** the cap height of the wordmark on all sides.
- **Minimum size:** 120px wide on screen, 25mm in print.
- Typeset, not drawn. A designer may later optically kern it into an
  outlined vector file; until then, set it live in the font.

### 4.3 Monogram (favicon, ≤32px, app icons)

An Ink capital **D** (Bricolage Grotesque ExtraBold, Condensed) centred on
a Honey circle, the D's height ≈55% of the circle. *Direction sketch, not
final artwork:* have it drawn and optically centred as a vector before
shipping. Not "DM": on social platforms that reads as "direct message".

### Prohibited for all marks

Stretching or squashing, rotating, outlines, drop shadows, gradients,
recolouring with anything outside the palette, placing on busy photos
without a solid palette block behind, combining with BLS motifs
(hexagons, bees).

---

## 5. Graphic devices

### Highlighter (signature device)

A flat Honey block behind the 1–3 words that carry the idea.

- Text stays Ink. Block covers the full line height, padding `0 0.12em`,
  square corners, no rotation, no "hand-drawn" texture.
- **One highlight per piece.** Two means neither matters.
- Works on every background, including Noite, Petróleo and Brasa. Inverted
  on Honey and Âmbar backgrounds: Ink block, Honey (or Mel) text.
- Highlight the meaning (*automatizar*, *processo*), not filler words.
- CSS: `background: var(--honey); color: var(--ink); padding: 0 .12em;
  box-decoration-break: clone;`

### Myth strike (*Mitos sobre IA* only)

The myth is set in Stone (on light) or Ash (on Ink) with a Brasa
strikethrough 0.12em thick, so it stays readable but recedes. The truth
follows in Ink with the Honey highlight. Example: ~~*A IA vai substituir
sua equipe.*~~ *Ela substitui* **tarefas**. CSS: `text-decoration:
line-through var(--brasa) .12em;`

### Everything else

- **Dividers:** 1px Line Light / Line Dark, full content width.
- **Corners:** square (0) in graphics and slides. Web interactive elements
  (buttons, inputs, link cards): 12px, one radius for the whole site. The
  portrait circle is the only round shape.
- **No** cards with drop shadows, no blobs, no patterns, no textures, no
  emoji as graphic elements, no "slide 1/7" eyebrows, no decorative
  monospace.

---

## 6. Imagery and iconography

**Photography**

- Real Demis in real contexts: desk, screen, client sites, stage. No
  stock photos, no AI-generated people.
- Natural or soft light, true-to-life warm colour. No heavy filters, no
  duotones, no black-and-white unless the whole series is.
- Plain tops (white, black, grey; the current white tee is ideal) so the
  palette carries the colour, not the wardrobe.
- Talking-head video: eye-level, the face in the upper third, Paper or
  neutral wall behind.

**Screenshots and demos**

- Real screenshots only. Never fake terminals or dashboards built from
  shapes. Frame them with a 1px Line on Paper, square corners, no device
  mockups.

**Icons**

- **Lucide**, stroke 2px at 24px, round caps and joins, in the text colour
  of the background they sit on, or Honey on dark backgrounds.
- Never emoji in graphics or site UI. Emoji are fine in captions and DMs.

---

## 7. Formats and layout

8px base grid. Outer margin on 1080-wide canvases: **88px**.

| Format | Size | Safe area / notes |
|---|---|---|
| Instagram carousel / post | 1080×1350 (4:5) | The profile grid crops to 3:4, roughly 34px off each side; 88px margins cover it. |
| Reel / Story | 1080×1920 | Keep text in x 64–940, y 250–1470. The grid shows the cover's centre 1080×1440; the app UI covers the bottom and right. Verify against the current app UI, Instagram changes it often. |
| LinkedIn post / PDF carousel | 1080×1350 | Same template as Instagram. |
| LinkedIn banner | 1584×396 | Keep text right of ~x 480 (profile photo overlaps bottom left on desktop) and check on mobile. |
| YouTube thumbnail | 1280×720 | Reel-cover rules: Condensed headline, portrait cutout. |
| Talk slides | 1920×1080 | Noite, Ink or Paper background, 96px margins. |

**Carousel structure**

1. **Cover:** headline with one highlight, on any approved background
   (§2.3 pillar default).
2. **Body slides:** one idea per slide, slide title plus ≤40 words.
3. **Closing slide:** one CTA, one action (e.g. *Me chama no WhatsApp*).
4. **Signature** on cover and closing slide, bottom-left, above the bottom
   margin: portrait 64px, wordmark at 30px, handle in Geist 400 at 26px
   in the background's secondary text colour (§2 pairings), a 1px divider
   above it.

### Co-branding

- **Bee family collabs** (@beelabstudiocom, Bee Lab Academy, Bee Creator
  Studio): use the personal template. Put the partner's official logo in
  the signature row, right-aligned, no taller than the portrait, following
  that brand's own logo rules. The amber family is the shared bridge;
  don't import any other element of the partner's system.
- **UFlowApp and others outside the family:** same rule, partner logo in
  its own official colours, never recoloured to a yellow.

---

## 8. Voice and tone

Language: **pt-BR** for audience-facing copy (matches site and talks;
**OPEN** whether content aimed at Portuguese SMEs should switch to pt-PT).

| Attribute | Means | Is not |
|---|---|---|
| **Direct** | The point is in the first line. | Curt or arrogant. |
| **Practical** | Every piece leaves something to do, test or measure. | Listicle bait ("10 ferramentas que…"). |
| **Plain-spoken** | Tech explained with everyday analogies, no jargon. | Condescending ("para leigos"). |
| **Grounded about AI** | Says what AI can't do, with real numbers. | Doom, or contrarian for clicks. |
| **Warm** | First person, light humour, sounds like Demis talking. | Salesy or fake intimacy. |

**Tone by context** (voice constant, tone adapts)

| Context | Tone |
|---|---|
| Reel / carousel | High energy, one idea, hook in the first 2 seconds or line |
| LinkedIn post | Reflective, first person, behind the scenes, real numbers |
| Talk | Didactic, technically rigorous, bilingual PT/EN |
| Site / bio | Factual, short, no adjectives |
| WhatsApp / DM | Close and quick, emoji OK |

**Words**

- Use: processo, tempo, erro, testar, medir, na prática, real numbers
  (*economizou 6h por semana*, not *economize muito tempo*).
- Avoid: revolucionar, disruptivo, game changer, hack, alavancar,
  potencializar, sinergia, "o segredo que ninguém te conta", "transformação
  digital" as a vague promise.
- No em dashes (—) in visible copy: use a full stop or comma. No ALL-CAPS
  shouting, no 🚀 in headlines.

**Examples**

- ✅ *A IA não vai arrumar um processo bagunçado. Ela só deixa a bagunça mais rápida.*
- ❌ *Descubra como a IA vai REVOLUCIONAR seu negócio 🚀*
- ✅ *Teste antes de automatizar.*
- ❌ *O hack secreto de automação que ninguém te conta*

---

## 9. Design tokens (CSS)

```css
:root {
  /* Amber family (Material Amber scale, shared by the Bee brands) */
  --creme:      #FFF8E1; /* Amber 50  */
  --mel:        #FFE082; /* Amber 200 */
  --honey:      #FFC107; /* Amber 500 */
  --ambar:      #FF8F00; /* Amber 800 */
  --ocre:       #8A5A00; /* text-safe deep amber */

  /* Companions: one per piece */
  --noite:      #1E2761;
  --petroleo:   #11484B;
  --brasa:      #B8430F;

  /* Neutrals */
  --ink:        #1C1A17;
  --paper:      #FAF8F3;
  --graphite:   #2A2723;
  --stone:      #6B655C;
  --ash:        #A29C92;
  --line-light: #E5E0D6;
  --line-dark:  #3D3933;

  /* Semantic, light theme */
  --bg:         var(--paper);
  --surface:    #FFFFFF;
  --text:       var(--ink);
  --text-muted: var(--stone);
  --line:       var(--line-light);
  --accent:     var(--honey);

  /* Type */
  --font-display: 'Bricolage Grotesque', sans-serif;
  --font-body:    'Geist', sans-serif;
  --font-mono:    'Geist Mono', monospace;

  /* Shape */
  --radius: 12px; /* web interactive elements only */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg:         var(--ink);
    --surface:    var(--graphite);
    --text:       var(--paper);
    --text-muted: var(--ash);
    --line:       var(--line-dark);
  }
}

::selection { background: var(--honey); color: var(--ink); }
:focus-visible { outline: 2px solid var(--honey); outline-offset: 2px; }
```

Stone on white (`--surface` in light) is 5.8:1, so it passes too.

---

## 10. Current state vs. this identity

Audit of this repo on 2026-10-16. Nothing has been migrated yet.

| Where | Today | Should be |
|---|---|---|
| `style.css` accent | `#F5C842` / `#E0B52E` | `--honey` `#FFC107` |
| `style.css` neutrals | `#0F0F0F`, `#1A1A1A`, `#2A2A2A`, `#888` | Ink, Graphite, Line Dark, Ash |
| `style.css` theme | Dark only | Light + dark via `prefers-color-scheme` |
| `index.html` fonts | Inter from Google Fonts CDN | Bricolage Grotesque + Geist, self-hosted |
| `index.html` location | 📍 emoji | Lucide `map-pin` |
| `assets/logo.png` | `#FFDE59` circle + white ring | Honey circle, no ring (§4.1) |
| Favicon | Full portrait (unreadable at 16px) | Monogram (§4.3) |
| `talks/qa-first-in-the-age-of-ai` | Navy `#1E2761` + teal `#028090`, coral `#F96167`, mint `#02C39A`, gold `#F9E795`; Segoe UI, Cascadia Code | Keep the navy (it is Noite); replace teal, coral, mint and gold with the amber family; Bricolage + Geist + Geist Mono at the talk slide scale (§3) |

---

## 11. Audit checklist

Before publishing any piece:

- [ ] Only palette colours; every yellow is one of the five in §2.1
- [ ] At least one amber-family colour; at most one companion
- [ ] Every text/background pair is in the approved pairings table
- [ ] Bricolage for display, Geist for text, Geist Mono only for code
- [ ] At most one highlight, Ink text inside it
- [ ] No text below 28px on a 1080 canvas
- [ ] Portrait is the honey-circle version, no ring, ≥32px
- [ ] No BLS motifs, gradients, shadows, emoji graphics or fake UI
- [ ] Text inside the format's safe area
- [ ] Copy passes the voice table: hook first, no banned words, no em dash

Name the exact deviation when flagging it (*"title uses `#FFDE59`, should be
`#FFC107`"*), never "feels off".

---

## Open decisions

1. **Mission and values:** write them (or decide the personal brand
   doesn't need them beyond the positioning above).
2. **Personality adjectives:** confirm or correct the five proposed.
3. **pt-BR vs pt-PT** for content aimed at Portuguese SMEs.
4. **Canva:** check font availability; upload to Brand Kit if missing.
5. **Pantone** for the palette, at the first print job.
6. **Assets to produce:** re-exported avatar (§4.1), transparent cutout
   without circle, vector monogram and favicon set (§4.3).
7. **Grupo Bee as a documented umbrella:** the amber scale in §2.1 is
   written down here for the first time. If the other Bee brands should
   follow it too, move §2.1 to a shared Grupo Bee note (second brain or
   `beelabstudio/ai`) and have every Bee brand reference that one source.
