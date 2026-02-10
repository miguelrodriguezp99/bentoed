import type { BentoEntry } from "./types";

export const galleryGridMixed: BentoEntry = {
	meta: {
		id: "gallery-grid-mixed",
		name: "Mixed Grid Gallery",
		description: "Asymmetric grid with varied item sizes",
		category: "gallery",
		columns: 12,
		itemCount: 7,
		tags: ["gallery", "grid", "asymmetric", "mixed"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class=" p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-12 gap-4 auto-rows-[200px]">
    <!-- Large horizontal -->
    <div class="col-span-6 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic1.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4">
        <h3 class="text-white text-xl font-bold">Featured Work</h3>
      </div>
    </div>

    <!-- Two medium squares -->
    <div class="col-span-3 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic2.jpg" alt="Gallery item" class="w-full h-full object-cover" />
    </div>

    <div class="col-span-3 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic3.jpg" alt="Gallery item" class="w-full h-full object-cover" />
    </div>

    <!-- One tall on right -->
    <div class="col-span-3 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic4.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      <div class="absolute top-4 right-4 bg-slate-950/80 text-white text-xs px-3 py-1 rounded-full">Vertical</div>
    </div>

    <!-- One tall on left bottom -->
    <div class="col-span-3 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic5.jpg" alt="Gallery item" class="w-full h-full object-cover" />
    </div>

    <!-- Two wide horizontal at bottom -->
    <div class="col-span-6 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic6.jpg" alt="Gallery item" class="w-full h-full object-cover" />
    </div>

    <!-- Full width footer -->
    <div class="col-span-12 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic7.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent flex items-center">
        <div class="p-6 text-white">
          <h3 class="text-2xl font-bold">Panoramic View</h3>
          <p class="text-slate-300">Wide format showcase</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .col-span-6, .col-span-3, .col-span-12 {
    grid-column: span 2;
  }
}
</style>`,
		css: `<style>
.mixed-gallery {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.mixed-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  grid-auto-rows: 200px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item > div {
  width: 100%;
  height: 100%;
}

.item-1 {
  grid-column: span 6;
  grid-row: span 2;
}

.item-2 {
  grid-column: span 3;
  grid-row: span 1;
}

.item-3 {
  grid-column: span 3;
  grid-row: span 1;
}

.item-4 {
  grid-column: span 3;
  grid-row: span 2;
}

.item-5 {
  grid-column: span 3;
  grid-row: span 2;
}

.item-6 {
  grid-column: span 6;
  grid-row: span 1;
}

.item-7 {
  grid-column: span 12;
  grid-row: span 1;
}

.item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
  padding: 1rem;
  color: white;
}

.item-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.item-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(15, 23, 42, 0.8);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

.panoramic-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: white;
}

.panoramic-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.panoramic-subtitle {
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .mixed-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7 {
    grid-column: span 2;
  }
}
</style>

<div class="mixed-gallery">
  <div class="mixed-container">
    <div class="gallery-item item-1">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="item-overlay">
        <div class="item-title">Featured Work</div>
      </div>
    </div>

    <div class="gallery-item item-2">
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
    </div>

    <div class="gallery-item item-3">
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
    </div>

    <div class="gallery-item item-4">
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      <div class="item-badge">Vertical</div>
    </div>

    <div class="gallery-item item-5">
      <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
    </div>

    <div class="gallery-item item-6">
      <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
    </div>

    <div class="gallery-item item-7">
      <div style="background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
      <div class="panoramic-overlay">
        <div>
          <div class="panoramic-title">Panoramic View</div>
          <div class="panoramic-subtitle">Wide format showcase</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mixed Grid Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .mixed-gallery {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .mixed-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      grid-auto-rows: 200px;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .gallery-item:hover { transform: scale(1.05); }
    .gallery-item > div { width: 100%; height: 100%; }

    .item-1 { grid-column: span 6; grid-row: span 2; }
    .item-2 { grid-column: span 3; grid-row: span 1; }
    .item-3 { grid-column: span 3; grid-row: span 1; }
    .item-4 { grid-column: span 3; grid-row: span 2; }
    .item-5 { grid-column: span 3; grid-row: span 2; }
    .item-6 { grid-column: span 6; grid-row: span 1; }
    .item-7 { grid-column: span 12; grid-row: span 1; }

    .item-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
      padding: 1rem;
      color: white;
    }

    .item-title { font-size: 1.25rem; font-weight: bold; }

    .item-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: rgba(15, 23, 42, 0.8);
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }

    .panoramic-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
      display: flex;
      align-items: center;
      padding: 1.5rem;
      color: white;
    }

    .panoramic-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; }
    .panoramic-subtitle { color: #cbd5e1; }

    @media (max-width: 768px) {
      .mixed-container { grid-template-columns: repeat(2, 1fr); }
      .item-1, .item-2, .item-3, .item-4, .item-5, .item-6, .item-7 { grid-column: span 2; }
    }
  </style>
</head>
<body>
  <div class="mixed-gallery">
    <div class="mixed-container">
      <div class="gallery-item item-1">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="item-overlay">
          <div class="item-title">Featured Work</div>
        </div>
      </div>

      <div class="gallery-item item-2">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      </div>

      <div class="gallery-item item-3">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      </div>

      <div class="gallery-item item-4">
        <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
        <div class="item-badge">Vertical</div>
      </div>

      <div class="gallery-item item-5">
        <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
      </div>

      <div class="gallery-item item-6">
        <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
      </div>

      <div class="gallery-item item-7">
        <div style="background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
        <div class="panoramic-overlay">
          <div>
            <div class="panoramic-title">Panoramic View</div>
            <div class="panoramic-subtitle">Wide format showcase</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
