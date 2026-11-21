---
name: Stealth Robotics
description: Low-Observable. A dark faceted hull lit by one Cedarcrest red, where the season's footage is the light.
colors:
  hull-0: "#0b0c0e"
  hull-1: "#111316"
  hull-2: "#181b1f"
  hull-3: "#22262b"
  seam: "#33383e"
  steel: "#5d636a"
  ink: "#eceae4"
  ink-2: "#bcbec1"
  ink-3: "#8f949a"
  cedarcrest-red: "#b01e2f"
  cedarcrest-red-lit: "#c72737"
  cedarcrest-red-hot: "#e0485a"
  cedarcrest-red-deep: "#7d1422"
  focus-ball-yellow: "#f2c14e"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 1.2rem + 6.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.6vw, 4.75rem)"
    fontWeight: 880
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  h3:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1vw, 2rem)"
    fontWeight: 800
    lineHeight: 1
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Big Shoulders Stencil Display, Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.16em"
  stat:
    fontFamily: "Big Shoulders Stencil Display, Archivo, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  chamfer: "12px"
  chamfer-lg: "28px"
  button-cut: "10px"
spacing:
  gutter: "clamp(1.25rem, 0.4rem + 4vw, 4rem)"
  section-y: "clamp(5rem, 3rem + 7vw, 9rem)"
  wrap: "1312px"
components:
  button-primary:
    backgroundColor: "{colors.cedarcrest-red}"
    textColor: "#ffffff"
    rounded: "{rounded.button-cut}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.cedarcrest-red-lit}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button-cut}"
    padding: "0 1.6rem"
    height: "3.25rem"
  button-paper:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.hull-0}"
    rounded: "{rounded.button-cut}"
    height: "3.25rem"
  data-plate:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.stat}"
    padding: "0.7rem 1rem 0.8rem"
---

# Design System: Stealth Robotics

## Overview

**Low-Observable.** Stealth is a machine you see when the light hits it. The site is a matte, faceted airframe in graphite steps; the only light on it is the deep Cedarcrest red of Jeff's bumpers, and the real colour on the page comes from the work itself: match footage, photos, the robot, and the FTC teams' own logos. Proof leads, claims follow: every number on the page is sourced (see PRODUCT.md).

The page refuses the default FIRST-team site (team photo hero over a four-stat row, rounded cards, a logo wall). Headlines are condensed and loud; data is stencilled like maintenance markings on an aircraft; frames are chamfered, never rounded.

## Colors

Restrained-plus-one: an achromatic hull and one committed red that owns a whole region once (the sponsor field).

### Primary
- **Cedarcrest red** `#b01e2f`: measured from Jeff's bumpers (studio median #c72737, shadow #9d2930). Fills, primary actions, the full-bleed sponsor section, the hull's cut edge.
- **Red lit** `#c72737`: hover on red fills.
- **Red hot** `#e0485a`: red *text* on the hull (wins, the hero's "Duvall", plate highlights). Use it, not the base red, for anything under 24px on dark: it holds 4.5:1 on hull-1.
- **Red deep** `#7d1422`: the inset panel inside the red field (sponsor list).

### Neutral
- **Hull 0–3** `#0b0c0e → #22262b`: section grounds step between hull-0 and hull-1 so sections read as separate panels without borders; hull-2/3 for hover and pressed fills.
- **Seam** `#33383e`: 1px rules and plate outlines. **Steel** `#5d636a`: ghost-button outline, scrollbar.
- **Ink** `#eceae4` (headlines), **ink-2** `#bcbec1` (lead and body), **ink-3** `#8f949a` (notes, labels).

### Named Rules
**The One Light Rule.** Red is the only hue the system owns. Every other colour on the page belongs to content (footage, photos, team logos), never to UI.
**The Red Field Rule.** One section per page may go fully red (the decisive beat: the page's main ask). Never two. Home: Get in touch; /donate: How to give; /sponsors: Join them; /robots: Help build the next one.
**Ball-yellow focus.** The focus ring is `#f2c14e`, the game-piece yellow, so keyboard focus is unmistakable on both hull and red.

## Typography

**Archivo** (variable, width 62–125%) carries everything: condensed 62–74% black caps for headings, ~92–96% width for reading text. **Big Shoulders Stencil Display** is the maintenance-stencil voice for labels, data plates, part numbers and results, never for sentences.

### Hierarchy
- **Display** (h1): 900, width 62%, uppercase, line-height 0.88, max 6rem.
- **H2**: 880, width 64%, uppercase, line-height 0.9.
- **H3 / row titles**: 800–850, width 72–78%, uppercase.
- **Lead**: 400, width 92%, ink-2, max 34em.
- **Body**: 17px / 1.55, max 62ch.
- **Label**: stencil 13px, tracking 0.16em, uppercase, ink-3.
- **Stat**: stencil 800, tracking 0.02em, for numbers and results (`9th of 74`, `Won`).

### Named Rules
**FIRST in italics.** The word *FIRST* is always italic (FIRST brand rule); copy stores it as `<em>FIRST</em>`.
**Stencil is for data.** If it is a sentence, it is Archivo.

## Layout
Max content width 1312px with a fluid gutter (20–64px). Sections are one to two screens tall, separated by hull-step changes rather than rules. Headers split 7/5: heading left, lead right-aligned to the far column, except where a long intro would leave a hole above a short heading (What is FIRST): there heading and intro stack. Inner pages (/about, /robots, /sponsors, /donate) open on a hull-0 intro under the nav: display title with a red second half, lead, optional data plate, chamfered photo right.

**Ground order.** Sections alternate hull-0 / hull-1. The section above the footer must be hull-1, because the footer steps down to hull-0 on its red-edged facet. Home: About 0 → Jeff 1 → FIRST 0 → Teams 1. Lists are ledgers (rows with 1px seams), not card grids. Phones: one column, full-width actions, the hero's hull panel drops below the reel.

## Elevation & Depth
No shadows. Depth comes from the hull steps, chamfered clipping, and the angled dark gradient the hero copy sits on. The only glow is the red floor light under the 3D robot.

### Named Rules
**Flat hull.** No drop shadows, no glass. If something needs to sit above, it changes hull step or is cut out by a chamfer.

## Shapes
No border-radius anywhere. Corners are **chamfered** (two opposite corners cut at 45°): 10px on buttons and controls, 12px on small frames, 28px on large frames. On desktop the hero reel runs full-bleed under an angled dark gradient that carries the copy; on phones the copy panel enters on a slanted red edge below the reel. The sponsor field enters on a slanted top edge.

## Components

### Buttons
Chamfered, uppercase Archivo 800, tracking 0.06em, min-height 52px (44px for compact nav CTA). **Red** (primary), **Ghost** (1.5px steel chamfer outline, ink text; outline turns ink on hover), **Paper** (ink on red fields), **Ink** (hull-0 on red fields). Press: `scale(0.97)` at 160ms ease-out. Hover only under `(hover: hover) and (pointer: fine)`. The chamfered plate is drawn on `::before` and the ball-yellow focus ring on `::after` (itself chamfered, 4px out), so focus is never clipped away.

**Nosed** (`.btn-nose`, hero actions): 56px tall, 12px cut, label left with a separate square arrow cell on the right. On red the cell is tinted darker; on ghost the outline stays one unbroken 2px ink-3 edge over a flat dark plate so it reads on footage. Hover passes the arrow out of the cell and back in (440ms; no motion under reduced motion). Full width on phones.

### Cards / Containers
No cards. Teams use a chamfered photo frame with a **decal**: a hull-0 chamfered plate holding the team's own logo, overlapping the photo's bottom edge. Photos zoom 1.025 on hover inside their frame.

### Navigation
Transparent over the hero, uppercase Archivo 700 links (Home, About, Robots, Sponsors) with a drawn underline on hover; the current page keeps its underline. A compact red "Donate" action. Under 1024px a full-screen hull-0 menu with 3rem condensed links.

### Sponsor wall
White chamfered plates, 4-up (2-up on phones), so every logo shows in its own colours, like the robot's sponsor board. Compact badges get a larger box; logos that are only a mark get the name set beside or under it in the sponsor's own style; a sponsor with no logo yet gets a condensed-caps name plate. Every plate has a stencil caption and links to the sponsor's site.

### Robot ledger
/robots lists robots newest first: photo, game logo on a small white plate, year and game in stencil, name, a season summary, feature tags (seam-outlined), events with dates and results, and links to the game animation and The Blue Alliance (external links carry a diagonal arrow). This season's robot is featured above it on a white studio plate.

### Footer
The last hull plate: hull-0, entering on a chamfered step whose 45° facet carries a 4px Cedarcrest-red edge (the hull's cut edge). Lean: lockup on the left, social brand marks (simple-icons, 18px) in 48px chamfered ghost tiles on the right; then a seam, the © line and a compact ghost "Back to top". Each tile is labelled "Stealth Robotics on <network>". No contact block, credits or decorative numerals.

### Data plate (signature)
A stencilled grid of label/value cells with 1px seam dividers, used for verified facts (join, About, Robots, Meet Jeff). The hot cell uses red-hot. A single stencil metadata line above a feature title ("This season's robot · 2026 · REBUILT") counts as data, not an eyebrow.

### Season reel (signature)
Full-bleed sequence of short clips and photos (cropped and recentred on the robot), with a "now playing" title + stencil meta, chamfered prev/pause/next controls, and a story-style segmented breadcrumb: one segment per clip, labelled tooltips, click to jump, arrow keys, pauses off-screen and when the tab is hidden. Reduced motion: starts paused, no push-in.

### Jeff in 3D (signature)
A dark bay with the CAD model restyled into the hull palette (graphite metal, Cedarcrest-red bumpers, smoked polycarbonate), red rim light, drag to rotate; a ledger of part callouts (stencil part number + name) that swing the camera to a red marker on the part.

## Do's and Don'ts
- **Do** let footage and photos carry the colour; keep UI in hull + red.
- **Do** source every figure; keep unverified facts off the page.
- **Do** use group and action photos only; no close-up portraits of students, no student names.
- **Don't** round corners, add drop shadows, or use glass/blur as decoration.
- **Don't** add a second accent hue, gradient text, eyebrow/kicker labels above headings, or numbered section labels.
- **Don't** set sentences in the stencil face.
