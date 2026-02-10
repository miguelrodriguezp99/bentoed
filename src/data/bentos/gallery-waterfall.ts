import type { BentoEntry } from "./types";

export const galleryWaterfall: BentoEntry = {
	meta: {
		id: "gallery-waterfall",
		name: "Waterfall Gallery",
		description: "Pinterest-style masonry waterfall layout",
		category: "gallery",
		columns: 5,
		itemCount: 10,
		tags: ["gallery", "masonry", "waterfall", "pinterest"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class=" p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="columns-5 gap-4 space-y-4">
    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 20rem;">
        <img src="images/aesthetic1.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 12rem;">
        <img src="images/aesthetic2.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 28rem;">
        <img src="images/aesthetic3.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 16rem;">
        <img src="images/aesthetic4.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 24rem;">
        <img src="images/aesthetic5.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 14rem;">
        <img src="images/aesthetic6.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 22rem;">
        <img src="images/aesthetic7.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 8rem;">
        <img src="images/aesthetic8.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 18rem;">
        <img src="images/aesthetic1.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="break-inside-avoid mb-4">
      <div class="relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl" style="height: 26rem;">
        <img src="images/aesthetic2.jpg" alt="Gallery item" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 1024px) {
  .columns-5 { columns: 3; }
}
@media (max-width: 768px) {
  .columns-5 { columns: 2; }
}
@media (max-width: 480px) {
  .columns-5 { columns: 1; }
}
</style>`,
		css: `<style>
.waterfall-gallery {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.waterfall-container {
  column-count: 5;
  column-gap: 1rem;
}

.waterfall-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.waterfall-card {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.waterfall-card:hover {
  transform: scale(1.05);
}

.waterfall-card > div {
  width: 100%;
}

@media (max-width: 1024px) {
  .waterfall-container { column-count: 3; }
}
@media (max-width: 768px) {
  .waterfall-container { column-count: 2; }
}
@media (max-width: 480px) {
  .waterfall-container { column-count: 1; }
}
</style>

<div class="waterfall-gallery">
  <div class="waterfall-container">
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:20rem;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:12rem;background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:28rem;background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:16rem;background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:24rem;background:linear-gradient(135deg,#fa709a,#fee140)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:14rem;background:linear-gradient(135deg,#30cfd0,#330867)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:22rem;background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:8rem;background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:18rem;background:linear-gradient(135deg,#ffecd2,#fcb69f)"></div>
      </div>
    </div>
    <div class="waterfall-item">
      <div class="waterfall-card">
        <div style="height:26rem;background:linear-gradient(135deg,#e0c3fc,#8ec5fc)"></div>
      </div>
    </div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Waterfall Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .waterfall-gallery {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .waterfall-container {
      column-count: 5;
      column-gap: 1rem;
    }

    .waterfall-item {
      break-inside: avoid;
      margin-bottom: 1rem;
    }

    .waterfall-card {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .waterfall-card:hover { transform: scale(1.05); }
    .waterfall-card > div { width: 100%; }

    @media (max-width: 1024px) {
      .waterfall-container { column-count: 3; }
    }
    @media (max-width: 768px) {
      .waterfall-container { column-count: 2; }
    }
    @media (max-width: 480px) {
      .waterfall-container { column-count: 1; }
    }
  </style>
</head>
<body>
  <div class="waterfall-gallery">
    <div class="waterfall-container">
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:20rem;background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:12rem;background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:28rem;background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:16rem;background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:24rem;background:linear-gradient(135deg,#fa709a,#fee140)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:14rem;background:linear-gradient(135deg,#30cfd0,#330867)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:22rem;background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:8rem;background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:18rem;background:linear-gradient(135deg,#ffecd2,#fcb69f)"></div>
        </div>
      </div>
      <div class="waterfall-item">
        <div class="waterfall-card">
          <div style="height:26rem;background:linear-gradient(135deg,#e0c3fc,#8ec5fc)"></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
