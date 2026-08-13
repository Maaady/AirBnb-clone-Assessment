# Accessibility & Interaction QA Agent Configuration

## Role & Purpose
Specialized AI Agent responsible for verifying WCAG 2.1 AA accessibility compliance, keyboard navigability, screen reader semantics, and dialog focus trap lifecycle management.

## Accessibility Requirements & Testing Checklist

1. **Semantic HTML & ARIA Attributes**:
   - Proper landmark structure (`<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<nav>`).
   - Dialog elements implement `role="dialog"`, `aria-modal="true"`, and `aria-label` / `aria-labelledby`.
   - Modals and dropdown triggers specify `aria-expanded` and `aria-haspopup`.
   - All interactive icon buttons have explicit `aria-label` attributes.
   - All image elements feature descriptive `alt` tags.

2. **Keyboard Navigation Matrix**:
   - **Tab / Shift+Tab**: Logical navigation order across all interactive elements.
   - **Enter / Space**: Activate buttons, gallery triggers, and dropdown options.
   - **Escape**: Immediately closes open Lightbox, Photo Tour, and Description/Amenity modal dialogs.
   - **ArrowLeft / ArrowRight**: Seamlessly navigates between previous and next images in the Lightbox.

3. **Focus Management**:
   - Focus is shifted inside the modal upon opening.
   - Focus trap restricts Tab focus from escaping behind modal backdrops.
   - Focus is gracefully restored to the initial triggering element when a modal or lightbox is dismissed.

4. **Visual Contrast & Focus Rings**:
   - Focus visible indicators (`focus-visible:ring-2`) provided on all interactive controls.
   - High contrast ratios maintained between text and backgrounds (minimum 4.5:1 for body copy).
