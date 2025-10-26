# Skills Mastery Grid — Redesign Blueprint

## Section Narrative
- **Headline:** “Master the Skills That Make You Unshakable.”
- **Subheadline:** “Learn to trade like Wall Street professionals — and integrate order flow into ICT, Smart Money, Price Action, or Supply & Demand strategies.”
- **Emotional intent:** Communicate institutional calm, precision, and certainty. Every element should reinforce elite Wall Street mastery and the learner’s transformation into a confident operator.

## Layout & Structure
- **Grid system:**
  - Desktop (≥1440px): two-column grid, four rows. Each cell uses equal width (50%) and equal min-height enforced via CSS (e.g., flexbox with `align-stretch` or CSS grid with consistent `minmax`).
  - Large tablet (1024–1439px): maintain two columns with adjusted padding to preserve proportion; ensure text wraps without increasing cell height disparity.
  - Tablet (768–1023px): switch to single column with uniform vertical spacing; maintain consistent padding (top/bottom 32px, sides 40px).
  - Mobile (≤767px): single column, padding 24px, text centered or left-aligned based on brand rules (default left). Guarantee equal vertical rhythm with consistent gap (24px).
- **Container spacing:**
  - Section padding: 120px top/bottom on desktop, 96px tablet, 72px mobile.
  - Internal grid gap: 32px desktop/tablet, 24px mobile.
- **Content alignment:** Use CSS grid with `grid-auto-rows: 1fr` or flexbox with equal-height cards. Verify no box grows taller because of text wrapping; increase line-height rather than padding to maintain proportion.

## Visual Design
- **Background:** Deep maroon gradient from #400000 (top-left) to #630000 (bottom-right). Apply subtle radial vignette (low-opacity black) to create cinematic depth.
- **Card treatment:**
  - Background overlay: slightly lighter maroon (#4C0000) with 12% transparency to separate from main gradient.
  - Borders: 1px solid with gold (#F2C14E) at 35% opacity; add subtle inner shadow to create dimensionality.
  - Hover/scroll animation: fade-in on scroll (upward 12px translate with opacity 0→1). On hover (desktop), border intensifies to full gold and emit soft outer glow (0 0 32px rgba(242, 193, 78, 0.35)).
- **Typography:**
  - Headline: Montserrat Bold, 52px desktop, 42px tablet, 34px mobile, tracking +2%. Color #F2C14E. Add subtle text shadow to lift from background.
  - Subheadline: Montserrat Regular, 22px desktop, 20px tablet, 18px mobile, color #F6EDE1, max-width 720px, line-height 150%.
  - Skill titles: Montserrat Bold, 24px desktop, 22px tablet, 20px mobile; color #F2C14E; uppercase with letter spacing +4%.
  - Descriptions: Lato Light (or Montserrat Regular), 18px desktop, 17px tablet, 16px mobile; color #F6EDE1; line-height 165%. Keep to 2 lines max per paragraph (adjust width/responsive wrap).
- **Iconography (optional):** Minimal gold line icons (32px) that represent each skill. Maintain consistent icon size and alignment top-left of each card.
- **Motion:** Use intersection observer for staggered reveal (100ms delay per card). Ensure performance friendly.

## Content Blocks
Order the cards top-to-bottom, left-to-right:
1. **Reading the Tape**  
   See what drives every candle. Read the tape like Wall Street traders — and apply it to ICT, Smart Money, or Price Action strategies with precision.
2. **Absorption & Exhaustion**  
   Spot when big players absorb or momentum dies. Anticipate reversals before they happen — the way professionals do.
3. **Volume Profile Mastery**  
   Identify where institutions build positions. Blend volume zones with your own strategy to trade from true areas of value.
4. **Footprint Chart Precision**  
   Read the aggression between buyers and sellers like a Wall Street pro. Use footprint data to strengthen any setup you trade.
5. **Auction Theory in Action**  
   Understand how markets find balance and break it. Align this logic with ICT or SMC frameworks for professional-level timing.
6. **Building Confluence**  
   Merge footprint, volume, and absorption into one clear picture. Build conviction and clarity behind every trade you take.
7. **Execution Mastery**  
   Execute with discipline and control. Manage risk and entries exactly like institutional traders operating on the inside.
8. **Process Thinking**  
   Think in probabilities, not emotions. Develop the calm, systematic mindset of Wall Street professionals.

## UX & Accessibility Checks
- Ensure 4.5:1 contrast ratio between text (#F6EDE1) and card backgrounds.
- Test hover states for keyboard focus (e.g., focus ring in gold, 2px offset).
- Verify animations reduce when `prefers-reduced-motion` is enabled (fallback: simple opacity transition).
- Confirm cards remain equal height on all breakpoints through responsive QA (use dev tools).

## Implementation Notes
- Build as reusable component to align with Order Flow design system tokens.
- Abstract colors, typography, and spacing into theme variables for consistency.
- Coordinate with motion designer if cinematic lighting/particles are desired; keep subtle to avoid distraction.
- Run snapshot tests or visual regression to confirm layout consistency.
