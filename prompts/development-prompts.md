# AI Development Prompt Sequence

This document records the structured sequence of AI prompts and workflows used to build, refine, test, and document this pixel-perfect Airbnb listing clone.

---

### Step 1: Reference Inspection & UI Decomposition
```text
Analyze the reference Airbnb listing page (https://airbnb-clone-umber-two.vercel.app). 
Extract the complete visual hierarchy, component architecture, spacing tokens (8px scale), typography hierarchy (26px h1, 22px h2, 16px body, 14px caption), color palette (#FF385C, #222222, #717171, #DDDDDD, #F7F7F7), layout grid (1280px max-width container, 7/5 two-column split, sticky booking card), and interactive behaviors for the Listing Page, Photo Tour, and single-photo Lightbox. Formulate an implementation blueprint using clean React 18/19, Next.js (App Router), TypeScript, and Tailwind CSS.
```

---

### Step 2: Component Architecture & Data Model Design
```text
Design the static data model in src/data/listing.ts representing an authentic luxury Malibu oceanfront villa with comprehensive details (15+ categorized photos, host profile, 6-factor reviews, sleeping arrangements, amenities, and dynamic pricing). Design an original component hierarchy:
- Header (Search bar pill, logo, user dropdown)
- ListingTitle (Title, ratings, share/save actions)
- HeroGallery (5-image grid, hover animations, Show all photos button)
- HostInfo & ListingHighlights
- ListingDescription & SleepingArrangements
- AmenitiesSection (top amenities & categorized modal)
- ReviewsSection (ratings progress bars & review cards)
- LocationSection & HostProfileSection
- BookingCard (sticky price calculator, date & guest pickers)
- PhotoTour (fullscreen categorized gallery modal)
- Lightbox (single-photo viewer with keyboard navigation & focus trap)
- Footer
```

---

### Step 3: Frontend Implementation & Visual Styling
```text
Implement the complete component hierarchy with pixel-perfect visual styling using Tailwind CSS. Replicate Airbnb's distinct micro-interactions:
- Radial button gradient on Reserve button
- Smooth image scale/brightness transitions on gallery hover
- Custom form controls and date/guest inputs
- Dynamic price breakdown calculation
- Sticky right-side column positioning
```

---

### Step 4: Photo Tour & Lightbox Interaction Engineering
```text
Implement the Photo Tour and Lightbox state management in src/hooks/useLightbox.ts and src/components/Lightbox/Lightbox.tsx.
Ensure complete keyboard and accessibility support:
- Left / Right Arrow keys navigate images
- Escape key dismisses modals and lightbox
- Focus moves inside dialog upon activation and traps Tab cycles
- Focus restores to the triggering element upon closure
- Screen reader ARIA roles (role="dialog", aria-modal="true", aria-label)
```

---

### Step 5: Visual QA & Pixel Refinement
```text
Run visual regression checks comparing the implemented screens (Listing, Photo Tour, Lightbox, Modals) against standard Airbnb desktop design tokens. Verify container widths, typography line heights, border radii (24px cards, 16px gallery outer corners), and interactive hover states.
```

---

### Step 6: Automated End-to-End Testing (Playwright)
```text
Develop comprehensive Playwright test cases in tests/listing.spec.ts to validate:
1. Listing page initial rendering
2. Opening Photo Tour from Show all photos button
3. Opening Lightbox from hero image click
4. Next / Previous button navigation
5. Keyboard ArrowLeft / ArrowRight navigation
6. Keyboard Escape key dismissal
7. Lightbox Close button and focus restoration
8. Photo Tour image selection triggering Lightbox
```

---

### Step 7: Architecture Modeling & Documentation
```text
Create a production-scale vacation-rental marketplace architecture diagram and write a clear, comprehensive README.md detailing local setup, test execution, technical decisions, and architecture overview.
```
