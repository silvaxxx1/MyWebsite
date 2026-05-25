---
name: Mohammed Sedeg Portfolio
description: Senior AI engineer portfolio — rigorous work, human voice, Forge Amber on warm parchment.
colors:
  forge-amber: "#B45309"
  forge-amber-light: "#F59E0B"
  warm-ash-paper: "#FAFAF8"
  old-page: "#F3F0EA"
  archive-ink: "#1C1917"
  ink-secondary: "#44403C"
  ink-body: "#78716C"
  ink-muted: "#A8A29E"
  crease-line: "#E8E3DB"
  border-strong: "#D4CEC5"
  badge-research: "#2563EB"
  badge-systems: "#7C3AED"
typography:
  display:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(52px, 7vw, 88px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(28px, 4vw, 44px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Spectral, Georgia, serif"
    fontSize: "clamp(20px, 2.5vw, 28px)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree, Cairo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  base: "6px"
  large: "12px"
  pill: "100px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.archive-ink}"
    textColor: "{colors.warm-ash-paper}"
    rounded: "{rounded.base}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.forge-amber}"
    textColor: "{colors.warm-ash-paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.archive-ink}"
    rounded: "{rounded.base}"
    padding: "14px 24px"
  button-cta:
    backgroundColor: "{colors.forge-amber}"
    textColor: "#FFFFFF"
    rounded: "{rounded.base}"
    padding: "16px 32px"
  button-cta-hover:
    backgroundColor: "{colors.forge-amber}"
    textColor: "#FFFFFF"
  chip-tag:
    backgroundColor: "{colors.old-page}"
    textColor: "{colors.ink-muted}"
    rounded: "4px"
    padding: "3px 10px"
  chip-tag-hover:
    backgroundColor: "#B4530914"
    textColor: "{colors.forge-amber}"
  pill-info:
    backgroundColor: "{colors.old-page}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  project-link:
    backgroundColor: "transparent"
    textColor: "{colors.forge-amber}"
    rounded: "{rounded.base}"
    padding: "8px 14px"
---

# Design System: Mohammed Sedeg Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Notebook"**

A portfolio that reads like a notebook left open on a desk: precise annotations in the margins, amber highlights on the lines that matter, warm paper underneath everything. The system rewards close reading. Every element has a reason to be there; decoration is not a reason. The human dimension comes from the writing and the story, not from the chrome.

This is a system for someone who writes pure-PyTorch autograd engines from scratch and also founded a free AI research organisation in Sudan. That combination, rigorous and generous, technical and personal, is the throughline. The typography asserts authority; the amber accent signals warmth. Neither dominates.

What this system explicitly rejects: the dark dev portfolio template (black background, neon green or purple, terminal rain, floating code snippets), the generic SaaS landing page (gradient text, hero-metric stat blocks, AI-generated copy feel), and the overdesigned creative agency site (scroll-jacking, WebGL heroes, motion for motion's sake). If it looks like it was assembled from a Framer template, it has failed.

**Key Characteristics:**
- Warm parchment surfaces, not clinical white
- Forge Amber used sparingly: headings, accents, interactive highlights only
- Spectral italic for the signature moment (the last name in the hero); Figtree carries the argument
- JetBrains Mono for all metadata, labels, and technical tags
- Flat by default; depth through tonal layering, not shadows
- Motion is purposeful and exits smoothly; no bounce, no overshooting


## 2. Colors: The Forge Palette

A restrained palette anchored by warm amber on warm parchment. Forge Amber is the only voice; it earns its presence by appearing rarely.

### Primary
- **Forge Amber** (`#B45309` light / `#F59E0B` dark): The single accent. Used on interactive elements, section labels, the italic last name in the hero, active states, and any element that demands attention. Its rarity is the point. In dark mode, the amber shifts warmer and slightly brighter.

### Neutral
- **Warm Ash Paper** (`#FAFAF8`): The primary canvas. Not white. A barely-there warm tint that suggests paper rather than screen.
- **Old Page** (`#F3F0EA`): Secondary surface. Used for section backgrounds (SAiR, Contact), hover states, and chip tags. The visible step between Warm Ash Paper and cards.
- **Archive Ink** (`#1C1917`): Primary text and the primary button background. A warm near-black, not `#000`. The warmth is critical; cold black would kill the parchment feeling.
- **Ink Secondary** (`#44403C`): Lead sentences, prominent body copy. Slightly lifted from Archive Ink.
- **Ink Body** (`#78716C`): Standard body text, story paragraphs, bio text.
- **Ink Muted** (`#A8A29E`): Metadata, years, captions, muted labels.
- **Crease Line** (`#E8E3DB`): Standard dividers and borders.
- **Border Strong** (`#D4CEC5`): Prominent separators (stat section borders in SAiR).

### Secondary (badge roles)
- **Research Blue** (`#2563EB` / `#60A5FA` dark): Project type badge for research work.
- **Systems Purple** (`#7C3AED` / `#A78BFA` dark): Project type badge for systems work.

### Named Rules
**The Forge Rule.** Forge Amber appears on ≤10% of any screen. Every additional use of amber dilutes the signal. When in doubt, use Archive Ink or Ink Body instead.

**The Warmth Rule.** No pure black (`#000`), no pure white (`#FFF`). Every neutral is tinted toward the amber hue. If a neutral reads as cool or clinical on the warm parchment background, it is wrong.


## 3. Typography

**Display Font:** Spectral (Georgia, serif fallback)
**Body Font:** Figtree (Cairo for Arabic RTL, system-ui fallback)
**Label / Mono Font:** JetBrains Mono (Fira Code fallback)

**Character:** Spectral is an optical-size serif designed for screen reading at display sizes, with an italic cut that carries genuine personality. It signs the work. Figtree is a geometric humanist sans that carries the argument — clean, warm, readable, without the overused associations of Inter. JetBrains Mono grounds technical metadata in its native register.

### Hierarchy
- **Display** (800, `clamp(52px, 7vw, 88px)`, lh 0.95, ls -0.04em): Hero name only. Split into regular (first name) and Spectral italic + Forge Amber (last name). This is the one moment of typographic risk; everything else is restraint.
- **Headline** (800, `clamp(28px, 4vw, 44px)`, lh 1.1, ls -0.02em): Section titles. Spectral, tight tracking. No italic at this level.
- **Title** (800, `clamp(20px, 2.5vw, 28px)`, lh 1.15, ls -0.02em): Project titles within Work. Same weight as Headline; smaller to distinguish the hierarchy level.
- **Lead** (700, `clamp(20px, 2.5vw, 26px)`, lh 1.4): Hero sub-headline. Spectral, one weight lighter than Display. Reads as a statement, not a heading.
- **Body** (400, `1rem` / 16px, lh 1.75–1.85): Figtree. All narrative text: bios, project summaries, SAiR story. Max line length 65ch where unconstrained.
- **Label** (500, 11px, ls 0.16em, uppercase): JetBrains Mono. Section labels above headings (`WORK`, `SAIR INITIATIVE`, `ABOUT`). Forge Amber. The amber at label size reads as a filing tab, not a shout.
- **Tag** (400, 10–11px, ls 0.03–0.14em): JetBrains Mono. Stack tech tags, project type badges, nav links, year metadata.

### Named Rules
**The Spectral Signature Rule.** Spectral italic appears in exactly two places: the hero last name and the project story paragraphs (italic, Ink Body colour). It does not appear in headings, body copy, or UI labels. Its italic cut is reserved for the personal and the narrative.

**The Mono as Metadata Rule.** JetBrains Mono signals technical metadata, never emphasis. If text needs emphasis, use Spectral or weight. Mono is not a substitute for visual hierarchy.


## 4. Elevation

This system is flat by default. Depth is conveyed through tonal surface layering, not shadows. Moving from Warm Ash Paper to Old Page is one elevation step; that is usually enough. The primary text on a secondary surface is already a depth signal.

Shadows appear in two specific contexts only, both purposeful:

### Shadow Vocabulary
- **Portrait shadow** (`0 20px 60px rgba(28,25,23,0.15), 0 8px 24px rgba(28,25,23,0.1)`): The hero photo frame. A two-layer warm shadow that lifts the portrait off the page. The warmth of the shadow (Archive Ink base, not pure black) preserves the parchment tone.
- **Hover lift** (`0 2px 16px rgba(0,0,0,0.06)`): Project card rows on hover. An almost invisible lift that confirms interactivity without drama.
- **CTA glow** (`0 2px 8px rgba(180,83,9,0.2)`, hover: `0 4px 16px rgba(180,83,9,0.3)`): The Schedule a Call button only. The amber glow is specific to the amber button; no other button has a coloured shadow.

### Named Rules
**The Flat-By-Default Rule.** If a surface elevation can be expressed through background colour (Warm Ash Paper vs Old Page), it must be. Shadows are reserved for portrait photography, hover confirmation, and the amber CTA. Three uses only.


## 5. Components

Components are tactile and restrained. Interactions are felt, not performed. The hover is a shift in weight, not a spectacle.

### Buttons
Three distinct roles, each with a clear hierarchy:

- **Primary** ("View my work"): Archive Ink background, Warm Ash Paper text, 2px solid Archive Ink border, 6px radius, 14px 24px padding, JetBrains Mono 13px 600. On hover: background shifts to Forge Amber. The primary action is the darkest element on the page.
- **Ghost** ("Get in touch"): Transparent background, Archive Ink border and text. Same shape as Primary. On hover: border tightens to Archive Ink full opacity. Reads as a secondary offer.
- **CV / Amber** ("Download CV", "Schedule a Call"): Forge Amber background, white text. Used only for download and calendar actions. 16px 32px padding on the Schedule button (larger surface = CTA weight). Carries the amber glow shadow.

No rounded-corner excess. 6px is gently curved; not sharp, not bubbly.

### Chips and Tags

- **Stack tags** (tech chips in project cards): Old Page background, Ink Muted text, 1px Crease Line border, 4px radius, JetBrains Mono 11px, 3px 10px padding. On hover: amber tint background, Forge Amber text. These transition as a group when the project row is hovered.
- **Info pills** (hero metadata): Old Page background, Ink Body text, 1px Crease Line border, 100px radius (fully pill), JetBrains Mono 11px. Static; no hover state. Reads as a label, not a button.
- **Project link** ("View ↗"): Forge Amber text, 1px amber-20% border, 6px radius, JetBrains Mono 12px, 8px 14px padding. On hover: amber tint background, `translateY(-2px)`. Paired with the project title; always top-right aligned on the project row.

### Cards / Containers

The Work section uses a ruled list, not cards. Projects are separated by 1px Crease Line dividers, with 44px top/bottom padding. On hover: background fills to Old Page, a barely-visible box shadow appears. No border radius on hover; the row stays flush-width.

The SAiR section uses a two-column layout with a statistics bar separated by Border Strong dividers. The blockquote sits in a Forge Amber tint (amber-8%) background with 6px radius: a callout block, not a stripe.

### Navigation
- **Desktop**: fixed header, transparent until scrolled, then blurred (purposeful backdrop-filter for content separation). Logo in Spectral 800. Links in JetBrains Mono 12px, Ink Body colour; hover adds Old Page background chip. Language and theme toggles right-aligned.
- **Mobile**: hamburger (three 20px lines) replaces the link row below 768px. Dropdown expands below the nav bar with a full-width list, 14px link size, 10px vertical padding per link.

### Signature: The Project Row

The Work section's canonical pattern. Each row contains: mono type badge (colour-coded by project type), year metadata, Spectral title, Figtree summary, italic story paragraph, stack chip group, and project link. On hover the entire row fills Old Page. The title shifts to Forge Amber. The stack chips shift to amber tint. This coordinated hover is the most complex interaction in the system; do not add animation layers on top of it.


## 6. Do's and Don'ts

### Do:
- **Do** use Forge Amber on ≤10% of any screen. Rarity is the signal.
- **Do** tint every neutral toward the amber hue. Warm Ash Paper, Old Page, Archive Ink: all warm, none cool.
- **Do** use Spectral italic exclusively for the hero last name and italic story paragraphs. Nowhere else.
- **Do** cap body text line length at 65ch on unconstrained layouts (About bio, SAiR story paragraphs).
- **Do** use tonal layering (Warm Ash Paper → Old Page) before reaching for shadows.
- **Do** write project story paragraphs in first person, past tense, honest about the hard parts. The typography makes room for them; the copy must earn it.
- **Do** honour the Arabic RTL context: Cairo font, `dir="rtl"`, direction-aware spacing. Both languages are first-class.
- **Do** ease out with exponential curves (`cubic-bezier(0.22, 1, 0.36, 1)`). Exits are smooth; nothing overshoots.
- **Do** respect `prefers-reduced-motion`. All animation durations collapse to `0.01ms`.

### Don't:
- **Don't** use a side-stripe border (`border-left` or `border-right` > 1px as a coloured accent). Prohibited. Use a background tint and border-radius instead.
- **Don't** use gradient text (`background-clip: text`). Decorative, never meaningful. Emphasis through weight or Forge Amber solid colour.
- **Don't** use glassmorphism decoratively. Backdrop-filter blur is permitted only on the scrolled nav bar (purposeful separation from content) and nowhere else.
- **Don't** build a hero-metric template: big number, small label, gradient accent, supporting stats. The SAiR statistics block is the only place numbers appear; it uses Archive Ink and a ruled separator, not a gradient.
- **Don't** use bounce or elastic easing. No `cubic-bezier` with overshoot. No spring animations. Spectral and Forge Amber are the personality; motion is infrastructure.
- **Don't** add floating particles, animated code rain, or atmospheric particle effects. "Dark dev portfolio template: particle effects, floating code snippets" is the explicit anti-reference. This prohibition applies equally on light backgrounds.
- **Don't** make the site look like a SaaS landing page: no feature grids with identical icon+heading+text cards, no gradient-text hero, no metric cards with amber gradients, no floating badge overlays.
- **Don't** use Inter, Playfair Display, Fraunces, Cormorant, DM Sans, or Space Grotesk. The reflex-reject list is a prohibition, not a suggestion.
- **Don't** use `font-weight: 900`. Spectral's maximum is 800. Request 900 and you get 800 rendered with fallback interpolation artifacts.
- **Don't** animate `width`, `height`, `padding`, or `margin` directly. Use `transform: scaleX()`, `transform: translateX()`, or `grid-template-rows` for equivalent visual effects without layout thrash.
