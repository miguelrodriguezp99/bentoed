import type { BentoEntry } from "./types";

export const gallerySpotlight: BentoEntry = {
	meta: {
		id: "gallery-spotlight",
		name: "Spotlight Gallery",
		description: "Hero showcase with sidebar thumbnails",
		category: "gallery",
		columns: 12,
		itemCount: 4,
		tags: ["gallery", "spotlight", "hero", "featured"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class=" p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
    <!-- Main spotlight image -->
    <div class="col-span-1 md:col-span-8 row-span-1 md:row-span-3 h-[400px] md:h-auto relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic1.jpg" alt="Spotlight" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end">
        <div class="p-8 text-white w-full">
          <h2 class="text-4xl font-bold mb-3">Featured Showcase</h2>
          <p class="text-slate-300 text-lg mb-4">Highlighting our most captivating work</p>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Featured</span>
            <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">Premium</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar thumbnails -->
    <div class="col-span-1 md:col-span-4 row-span-1 h-[200px] md:h-auto relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic2.jpg" alt="Thumbnail" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 transition-colors flex items-center justify-center">
        <div class="text-white text-center">
          <div class="text-2xl font-bold">02</div>
        </div>
      </div>
    </div>

    <div class="col-span-1 md:col-span-4 row-span-1 h-[200px] md:h-auto relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic3.jpg" alt="Thumbnail" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 transition-colors flex items-center justify-center">
        <div class="text-white text-center">
          <div class="text-2xl font-bold">03</div>
        </div>
      </div>
    </div>

    <div class="col-span-1 md:col-span-4 row-span-1 h-[200px] md:h-auto relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic4.jpg" alt="Thumbnail" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 transition-colors flex items-center justify-center">
        <div class="text-white text-center">
          <div class="text-2xl font-bold">04</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
		css: `<style>
.spotlight-gallery {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.spotlight-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  height: 600px;
}

.spotlight-hero {
  grid-column: span 8;
  grid-row: span 3;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.spotlight-hero:hover {
  transform: scale(1.05);
}

.spotlight-hero > div {
  width: 100%;
  height: 100%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  color: white;
}

.hero-content {
  width: 100%;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.hero-subtitle {
  color: #cbd5e1;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.hero-tags {
  display: flex;
  gap: 0.5rem;
}

.hero-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  font-size: 0.875rem;
}

.spotlight-thumb {
  grid-column: span 4;
  grid-row: span 1;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.spotlight-thumb:hover {
  transform: scale(1.05);
}

.spotlight-thumb > div {
  width: 100%;
  height: 100%;
}

.thumb-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.spotlight-thumb:hover .thumb-overlay {
  background-color: rgba(15, 23, 42, 0.2);
}

.thumb-number {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .spotlight-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }
  .spotlight-hero {
    grid-column: span 1;
    min-height: 400px;
  }
  .spotlight-thumb {
    grid-column: span 1;
    height: 200px;
  }
}
</style>

<div class="spotlight-gallery">
  <div class="spotlight-container">
    <div class="spotlight-hero">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="hero-overlay">
        <div class="hero-content">
          <div class="hero-title">Featured Showcase</div>
          <div class="hero-subtitle">Highlighting our most captivating work</div>
          <div class="hero-tags">
            <div class="hero-tag">Featured</div>
            <div class="hero-tag">Premium</div>
          </div>
        </div>
      </div>
    </div>

    <div class="spotlight-thumb">
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      <div class="thumb-overlay">
        <div class="thumb-number">02</div>
      </div>
    </div>

    <div class="spotlight-thumb">
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      <div class="thumb-overlay">
        <div class="thumb-number">03</div>
      </div>
    </div>

    <div class="spotlight-thumb">
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      <div class="thumb-overlay">
        <div class="thumb-number">04</div>
      </div>
    </div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spotlight Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .spotlight-gallery {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .spotlight-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      height: 600px;
    }

    .spotlight-hero {
      grid-column: span 8;
      grid-row: span 3;
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .spotlight-hero:hover { transform: scale(1.05); }
    .spotlight-hero > div { width: 100%; height: 100%; }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 50%, transparent 100%);
      display: flex;
      align-items: flex-end;
      padding: 2rem;
      color: white;
    }

    .hero-content { width: 100%; }
    .hero-title { font-size: 2.25rem; font-weight: bold; margin-bottom: 0.75rem; }
    .hero-subtitle { color: #cbd5e1; font-size: 1.125rem; margin-bottom: 1rem; }
    .hero-tags { display: flex; gap: 0.5rem; }

    .hero-tag {
      padding: 0.25rem 0.75rem;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border-radius: 9999px;
      font-size: 0.875rem;
    }

    .spotlight-thumb {
      grid-column: span 4;
      grid-row: span 1;
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .spotlight-thumb:hover { transform: scale(1.05); }
    .spotlight-thumb > div { width: 100%; height: 100%; }

    .thumb-overlay {
      position: absolute;
      inset: 0;
      background-color: rgba(15, 23, 42, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease;
    }

    .spotlight-thumb:hover .thumb-overlay { background-color: rgba(15, 23, 42, 0.2); }
    .thumb-number { color: white; font-size: 1.5rem; font-weight: bold; }

    @media (max-width: 768px) {
      .spotlight-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        height: auto;
      }
      .spotlight-hero {
        grid-column: span 1;
        min-height: 400px;
      }
      .spotlight-thumb {
        grid-column: span 1;
        height: 200px;
      }
    }
  </style>
</head>
<body>
  <div class="spotlight-gallery">
    <div class="spotlight-container">
      <div class="spotlight-hero">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="hero-overlay">
          <div class="hero-content">
            <div class="hero-title">Featured Showcase</div>
            <div class="hero-subtitle">Highlighting our most captivating work</div>
            <div class="hero-tags">
              <div class="hero-tag">Featured</div>
              <div class="hero-tag">Premium</div>
            </div>
          </div>
        </div>
      </div>

      <div class="spotlight-thumb">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
        <div class="thumb-overlay">
          <div class="thumb-number">02</div>
        </div>
      </div>

      <div class="spotlight-thumb">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
        <div class="thumb-overlay">
          <div class="thumb-number">03</div>
        </div>
      </div>

      <div class="spotlight-thumb">
        <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
        <div class="thumb-overlay">
          <div class="thumb-number">04</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
