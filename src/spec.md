# Specification

## Summary
**Goal:** Replace the Gallery page’s placeholder images with the 12 uploaded real event photos while keeping the current responsive grid and lightbox experience.

**Planned changes:**
- Add the 12 uploaded image files as static frontend assets.
- Update `frontend/src/pages/GalleryPage.tsx` so `galleryImages` references the uploaded assets (not `/assets/generated/gallery-*.jpg`) and renders exactly 12 tiles.
- Provide user-friendly English `alt` text and `title` values for each gallery image.
- Ensure clicking any tile still opens the lightbox modal showing the corresponding uploaded image.

**User-visible outcome:** Visitors see a Gallery of 12 real event photos (instead of placeholders) and can open each photo in the existing lightbox preview.
