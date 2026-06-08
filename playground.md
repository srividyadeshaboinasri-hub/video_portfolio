# Sri Vidya Portfolio — Collaboration Space
> Shared AI workspace (Claude + Gemini). Updated after every code change.

---

## Project Info
- **Subject:** Deshaboina Sri Vidya
- **Role:** Fraud Investigation Analyst · AML/KYC · Trust & Safety
- **Email:** srividya.deshaboinasri@gmail.com
- **Location:** Hyderabad, India · Open to Remote / Relocation
- **Portfolio URL:** TBD (GitHub Pages after setup)
- **Repo:** TBD

---

## Stack
- React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion + AOS
- Hosted: GitHub Pages via GitHub Actions

---

## Sections Live ✅
| Section | File | Status |
|---------|------|--------|
| Preloader | `src/components/Preloader.jsx` | ✅ |
| Navbar | `src/components/Navbar.jsx` | ✅ |
| Hero + Canvas | `src/components/Hero.jsx` + `HeroCanvas.jsx` | ✅ |
| About | `src/components/About.jsx` | ✅ |
| Skills | `src/components/Skills.jsx` | ✅ |
| Experience | `src/components/Experience.jsx` | ✅ |
| Process (Services) | `src/components/Services.jsx` | ✅ |
| Contact | `src/components/Contact.jsx` | ✅ |
| Footer | `src/components/Footer.jsx` | ✅ |
| App | `src/App.jsx` | ✅ |
| Deploy workflow | `.github/workflows/deploy.yml` | ✅ |

---

## Design Tokens
- Background: `#030712` (dark navy)
- Accent: `#f59e0b` (gold/amber)
- Preloader bg: `#1e3a5f`
- Canvas: fraud/AML themed — nodes with AML/KYC/SAR/OFAC labels, gold data packets, typing investigation commands

---

## TODOs
- [x] ~~Replace emoji avatar in About section with real profile photo~~ ✅ Done — `srividya.png`
- [ ] Create GitHub repo & push
- [ ] Enable GitHub Pages with GitHub Actions source
- [ ] Update `vite.config.js` base if deploying to subpath (e.g. `/srividya_portfolio/`)
- [ ] Add LinkedIn URL once confirmed

---

## Conversation Log
| Date | Change |
|------|--------|
| 2026-06-08 | Initial build — all components created from Sri Vidya CV. Build passes ✅ |
| 2026-06-08 | Profile photo wired up — `srividya.png` in About section ✅ |
| 2026-06-08 | Full light theme applied — white/slate bg, navy (#1e3a5f) + gold (#f59e0b) accents across all components ✅ |
| 2026-06-08 | **PREMIUM REDESIGN** — luxury "$10k" aesthetic: deep jewel-tone gradient backgrounds (navy→purple→teal), gold gradient (#c9a84c→#f7d47a) accents, glassmorphism cards, Playfair Display serif headings, Plus Jakarta Sans body, dramatic glow effects, animated preloader with progress bar, redesigned all 10 components ✅ |
| 2026-06-08 | **FRAUD INTELLIGENCE COMMAND CENTER** — complete platform-style rebuild. New palette (#020817/#04142B/#061C3A bg, #D4AF37/#F5D76E gold, #3B82F6/#06B6D4 secondary). NEW: boot-sequence preloader (ACCESS GRANTED), Hero with live dashboard + count-up metrics + activity ticker, interactive CaseInvestigation simulation ($14,750 / 92% risk / 9 screening checks / HIGH RISK report), canvas SanctionsMap (global hubs + animated arcs + radar sweep + hover tooltips), Experience as expandable classified Case Files, Skills as Investigation Modules with 3D tilt, Contact as Open Investigation Request. Added cursor-follow spotlight, IntersectionObserver scroll reveals (dropped AOS lib), JetBrains Mono for terminal text. Build passes ✅ |
| 2026-06-08 | **THE FRAUDVERSE — game-style luxury LIGHT theme.** Full reimagining as "Payment City" interactive experience. Light palette (#F8FAFC pearl, #F7E7CE champagne, #D4AF37 gold, #DBEAFE sky, #EDE9FE lavender, navy text). NEW components: cinematic boot intro (Loading Payment City…), `City.jsx` interactive skyline with 7 glass towers/buildings + clouds + floating payment cards, 5 playable missions — `MissionATO` (magnifying-glass scan + risk meter + blocked actor), `MissionAML` (SVG money-trail with red suspicious paths), `MissionSanctions` (world shield map, toggle OFAC/EU/UN/HMT shields), `MissionSAR` (float & collect 6 evidence → file report), `Career.jsx` (5-level game progression with scroll-unlock + 🏆 achievement toasts), `Skills.jsx` (6 flip power cards with rarity tiers), `Contact.jsx` (Start a New Investigation + flying golden envelope). Game-map navbar, cursor spotlight, light glassmorphism. Kept JSX (no TS/Three.js). Build passes ✅. Old components (Hero/About/Experience/Services/CaseInvestigation/SanctionsMap/HeroCanvas) left unused in repo. |
| 2026-06-08 | Profile photo re-added — floating "Investigator ID" badge (with LIVE status) in Payment City hero + circular avatar with verified ✓ in Contact HQ. Build passes ✅ |

---

## Commands
```bash
export PATH="/Users/karthikbangari/Terraf/.tools/node-v22.22.3-darwin-arm64/bin:$PATH"
cd /Users/karthikbangari/srividya_portfolio
npm install
npm run dev       # local preview
npm run build     # production build
```

---

## Notes
- Contact section uses `mailto:` only — no backend form
- HeroCanvas uses gold (#f59e0b) accents with AML/KYC compliance-themed labels
- No profile photo yet — using placeholder emoji; replace when photo is available
