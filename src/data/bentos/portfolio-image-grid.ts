import type { BentoEntry } from "./types";

export const portfolioImageGrid: BentoEntry = {
	meta: {
		id: "portfolio-image-grid",
		name: "Image Portfolio",
		description: "Portfolio grid with image overlays and project details",
		category: "portfolio",
		columns: 12,
		itemCount: 6,
		tags: ["portfolio", "projects", "showcase", "grid"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class=" p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
    <!-- Project 1 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic1.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">Brand Identity</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Complete visual identity for modern startup</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Design</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Branding</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic2.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">E-commerce App</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Mobile shopping experience with modern UI</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">React Native</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">UI/UX</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic3.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">Dashboard Design</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Analytics platform with data visualization</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Vue.js</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Charts</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 4 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic4.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">Photography Site</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Minimalist portfolio for visual artist</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Next.js</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Gallery</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 5 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic5.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">Fitness Tracker</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Health monitoring app with gamification</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">SwiftUI</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">HealthKit</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project 6 -->
    <div class="col-span-1 md:col-span-4 row-span-1 md:row-span-2 h-[300px] md:h-auto group relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-105 cursor-pointer">
      <img src="images/aesthetic6.jpg" alt="Project" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
        <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform">
          <h3 class="text-white text-2xl font-bold mb-2">Restaurant Menu</h3>
          <p class="text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">Digital menu with ordering system</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">React</span>
            <span class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white text-xs">Stripe</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .col-span-4 {
    grid-column: span 1;
    min-height: 300px;
  }
}
</style>`,
		css: `<style>
.portfolio-grid {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.portfolio-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}

.portfolio-item {
  grid-column: span 4;
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.portfolio-item:hover {
  transform: scale(1.05);
}

.portfolio-item > div {
  width: 100%;
  height: 100%;
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.6) 50%, transparent 100%);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 0.9;
}

.portfolio-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  transform: translateY(0);
  transition: transform 0.3s ease;
}

.portfolio-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.portfolio-description {
  color: #cbd5e1;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-description {
  opacity: 1;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.portfolio-tag {
  padding: 0.25rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 0.25rem;
  color: white;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .portfolio-container {
    grid-template-columns: 1fr;
  }
  .portfolio-item {
    grid-column: span 1;
    min-height: 300px;
  }
}
</style>

<div class="portfolio-grid">
  <div class="portfolio-container">
    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">Brand Identity</h3>
          <p class="portfolio-description">Complete visual identity for modern startup</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">Design</span>
            <span class="portfolio-tag">Branding</span>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">E-commerce App</h3>
          <p class="portfolio-description">Mobile shopping experience with modern UI</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">React Native</span>
            <span class="portfolio-tag">UI/UX</span>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">Dashboard Design</h3>
          <p class="portfolio-description">Analytics platform with data visualization</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">Vue.js</span>
            <span class="portfolio-tag">Charts</span>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">Photography Site</h3>
          <p class="portfolio-description">Minimalist portfolio for visual artist</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">Next.js</span>
            <span class="portfolio-tag">Gallery</span>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">Fitness Tracker</h3>
          <p class="portfolio-description">Health monitoring app with gamification</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">SwiftUI</span>
            <span class="portfolio-tag">HealthKit</span>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item">
      <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
      <div class="portfolio-overlay">
        <div class="portfolio-content">
          <h3 class="portfolio-title">Restaurant Menu</h3>
          <p class="portfolio-description">Digital menu with ordering system</p>
          <div class="portfolio-tags">
            <span class="portfolio-tag">React</span>
            <span class="portfolio-tag">Stripe</span>
          </div>
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
  <title>Image Portfolio</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .portfolio-grid {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .portfolio-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
    }

    .portfolio-item {
      grid-column: span 4;
      grid-row: span 2;
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .portfolio-item:hover { transform: scale(1.05); }
    .portfolio-item > div { width: 100%; height: 100%; }

    .portfolio-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.6) 50%, transparent 100%);
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .portfolio-item:hover .portfolio-overlay { opacity: 0.9; }

    .portfolio-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      transform: translateY(0);
      transition: transform 0.3s ease;
    }

    .portfolio-title {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .portfolio-description {
      color: #cbd5e1;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .portfolio-item:hover .portfolio-description { opacity: 1; }

    .portfolio-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .portfolio-tag {
      padding: 0.25rem 0.5rem;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border-radius: 0.25rem;
      color: white;
      font-size: 0.75rem;
    }

    @media (max-width: 768px) {
      .portfolio-container { grid-template-columns: 1fr; }
      .portfolio-item {
        grid-column: span 1;
        min-height: 300px;
      }
    }
  </style>
</head>
<body>
  <div class="portfolio-grid">
    <div class="portfolio-container">
      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">Brand Identity</h3>
            <p class="portfolio-description">Complete visual identity for modern startup</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">Design</span>
              <span class="portfolio-tag">Branding</span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">E-commerce App</h3>
            <p class="portfolio-description">Mobile shopping experience with modern UI</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">React Native</span>
              <span class="portfolio-tag">UI/UX</span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">Dashboard Design</h3>
            <p class="portfolio-description">Analytics platform with data visualization</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">Vue.js</span>
              <span class="portfolio-tag">Charts</span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">Photography Site</h3>
            <p class="portfolio-description">Minimalist portfolio for visual artist</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">Next.js</span>
              <span class="portfolio-tag">Gallery</span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">Fitness Tracker</h3>
            <p class="portfolio-description">Health monitoring app with gamification</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">SwiftUI</span>
              <span class="portfolio-tag">HealthKit</span>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-item">
        <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
        <div class="portfolio-overlay">
          <div class="portfolio-content">
            <h3 class="portfolio-title">Restaurant Menu</h3>
            <p class="portfolio-description">Digital menu with ordering system</p>
            <div class="portfolio-tags">
              <span class="portfolio-tag">React</span>
              <span class="portfolio-tag">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
