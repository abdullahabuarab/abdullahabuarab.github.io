# Portfolio design plan

Method: Anthropic `frontend-design` skill (anthropics/skills, ~198k stars): plan tokens, review for generic defaults, build, critique.

## Brief
- **Subject:** Abdullah Abu Arab, a registered structural engineer in Saudi Arabia moving into AI / forward-deployed engineering.
- **Audience:** engineering firms, collaborators and anyone reviewing his work.
- **Primary job:** in under a minute, prove he ships real software and AI, and that he knows construction from the inside.

## Visual idea
Taken from the vernacular of structural drawings: a column grid plan with grid bubbles and a drawing **title block**.
- **The one memorable element:** the hero is a structural grid plan that draws itself once on load. Its title block holds real facts (name, SCE number, location, discipline), styled like the stamp corner of an IFC sheet.
- Everything else stays quiet: plain type, generous whitespace, no card grids.

## Tokens
| Token | Light | Dark | Use |
|---|---|---|---|
| paper | `#F3F4F1` | `#121416` | page background (cool drafting white, not cream) |
| surface | `#FFFFFF` | `#1A1D20` | title block, raised areas |
| ink | `#16212B` | `#E7E9E6` | text, grid lines |
| muted | `#59646E` | `#9BA4AB` | secondary text |
| line | `#CDD2CD` | `#2B3035` | rules, borders |
| accent | `#2340C9` | `#8499FF` | links, highlighted bay; the blue of drawing markups |

**Type:** one family, **Archivo** (variable width), used at wide widths for headings and normal width for body. Scale: 15 / 17 / 21 / 30 / 48–84 (fluid). Body line length ≤ 68ch.

## Layout
```
[name]                         work  practice  research  contact  [CV]
-----------------------------------------------------------------------
Headline (2 lines)             |  grid plan A–E / 1–4, draws on load
Intro paragraph                |  one bay highlighted in accent
[See the work] [Email me]      |  ┌ title block ────────────┐
                               |  │ name · SCE · location   │
                               |  └─────────────────────────┘
Work: two case studies as wide rows (problem / build / result), not cards
Practice: structural work at Hajar Creative + tools
Research: 13 papers as a list with DOI links; senior design
Credentials: license, education, certificates with verify links
Contact: email, LinkedIn, CV
```

## Review pass (what was cut as generic)
- No "big number, small label" stat row in the hero; numbers live inside sentences.
- No all-caps eyebrows, no arrows on links, no monospace data labels, no uniform card grid.
- Motion: only the grid drawing on load. Respects `prefers-reduced-motion`.
- Phone number left off the public page on purpose (email + LinkedIn only).
- No job-seeking language (availability, notice period, iqama). The site shows the work only.
