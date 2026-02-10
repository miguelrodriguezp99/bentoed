import type { BentoEntry } from "./types";

export const galleryWindow: BentoEntry = {
	meta: {
		id: "gallery-window",
		name: "Window Gallery",
		description: "3x3 grid with enlarged center showcase",
		category: "gallery",
		columns: 4,
		itemCount: 9,
		tags: ["gallery", "grid", "showcase", "window"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class="grid grid-cols-4 gap-4 p-8 rounded-2xl max-w-7xl mx-auto">
  <!-- Top row -->
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic1.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic2.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic3.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic4.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>

  <!-- Middle row with center showcase -->
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic5.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
  <div class="col-span-2 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic6.jpg" alt="Gallery showcase" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end">
      <div class="p-6 text-white">
        <h3 class="text-2xl font-bold mb-2">Featured</h3>
        <p class="text-slate-300">Center spotlight</p>
      </div>
    </div>
  </div>
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic7.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>

  <!-- Bottom row -->
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic8.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
  <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
    <img src="images/aesthetic1.jpg" alt="Gallery item" class="w-full h-48 object-cover" />
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .col-span-2 { grid-column: span 2; }
}
</style>`,
		css: `<style>
.window-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem;
  background-color: #0f172a;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
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

.gallery-item img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  display: block;
}

.gallery-showcase {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-showcase img {
  height: 100%;
}

.showcase-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  color: white;
}

.showcase-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.showcase-subtitle {
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .window-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<div class="window-gallery">
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#fa709a,#fee140)"></div>
  </div>
  <div class="gallery-item gallery-showcase">
    <div style="width:100%;height:100%;background:linear-gradient(135deg,#30cfd0,#330867)"></div>
    <div class="showcase-overlay">
      <div>
        <div class="showcase-title">Featured</div>
        <div class="showcase-subtitle">Center spotlight</div>
      </div>
    </div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div>
  </div>
  <div class="gallery-item">
    <div style="width:100%;height:12rem;background:linear-gradient(135deg,#ffecd2,#fcb69f)"></div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Window Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .window-gallery {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      padding: 2rem;
      background-color: #0f172a;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .gallery-item:hover { transform: scale(1.05); }
    .gallery-item > div { width: 100%; height: 12rem; }

    .gallery-showcase {
      grid-column: span 2;
      grid-row: span 2;
    }

    .gallery-showcase > div { height: 100%; }

    .showcase-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 50%);
      display: flex;
      align-items: flex-end;
      padding: 1.5rem;
      color: white;
    }

    .showcase-title { font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem; }
    .showcase-subtitle { color: #cbd5e1; }

    @media (max-width: 768px) {
      .window-gallery { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>
  <div class="window-gallery">
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div></div>
    <div class="gallery-item gallery-showcase">
      <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
      <div class="showcase-overlay">
        <div>
          <div class="showcase-title">Featured</div>
          <div class="showcase-subtitle">Center spotlight</div>
        </div>
      </div>
    </div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#a8edea,#fed6e3)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div></div>
    <div class="gallery-item"><div style="background:linear-gradient(135deg,#ffecd2,#fcb69f)"></div></div>
  </div>
</body>
</html>`,
	},
};
