import type { BentoEntry } from "./types";

export const galleryFilmStrip: BentoEntry = {
	meta: {
		id: "gallery-film-strip",
		name: "Film Strip Gallery",
		description: "Horizontal film strip with varying widths",
		category: "gallery",
		columns: 12,
		itemCount: 5,
		tags: ["gallery", "film-strip", "horizontal", "cinema"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class=" p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-12 gap-4 h-80">
    <!-- Frame 1: Narrow -->
    <div class="col-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic1.jpg" alt="Film frame" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-slate-950/80 text-white text-xs px-2 py-1 rounded">01</div>
    </div>

    <!-- Frame 2: Wide -->
    <div class="col-span-4 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic2.jpg" alt="Film frame" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-slate-950/80 text-white text-xs px-2 py-1 rounded">02</div>
    </div>

    <!-- Frame 3: Medium -->
    <div class="col-span-3 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic3.jpg" alt="Film frame" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-slate-950/80 text-white text-xs px-2 py-1 rounded">03</div>
    </div>

    <!-- Frame 4: Narrow -->
    <div class="col-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic4.jpg" alt="Film frame" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-slate-950/80 text-white text-xs px-2 py-1 rounded">04</div>
    </div>

    <!-- Frame 5: Extra wide -->
    <div class="col-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic5.jpg" alt="Film frame" class="w-full h-full object-cover" />
      <div class="absolute top-2 left-2 bg-slate-950/80 text-white text-xs px-2 py-1 rounded">05</div>
    </div>
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 12rem);
    height: auto;
  }
  .col-span-2, .col-span-3, .col-span-4, .col-span-1 {
    grid-column: span 1;
  }
}
</style>`,
		css: `<style>
.film-strip {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.film-strip-inner {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  height: 20rem;
}

.film-frame {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.film-frame:hover {
  transform: scale(1.05);
}

.film-frame > div {
  width: 100%;
  height: 100%;
}

.frame-number {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: rgba(15, 23, 42, 0.8);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.frame-1 { grid-column: span 2; }
.frame-2 { grid-column: span 4; }
.frame-3 { grid-column: span 3; }
.frame-4 { grid-column: span 2; }
.frame-5 { grid-column: span 1; }

@media (max-width: 768px) {
  .film-strip-inner {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 12rem);
    height: auto;
  }
  .frame-1, .frame-2, .frame-3, .frame-4, .frame-5 {
    grid-column: span 1;
  }
}
</style>

<div class="film-strip">
  <div class="film-strip-inner">
    <div class="film-frame frame-1">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="frame-number">01</div>
    </div>
    <div class="film-frame frame-2">
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      <div class="frame-number">02</div>
    </div>
    <div class="film-frame frame-3">
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      <div class="frame-number">03</div>
    </div>
    <div class="film-frame frame-4">
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      <div class="frame-number">04</div>
    </div>
    <div class="film-frame frame-5">
      <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
      <div class="frame-number">05</div>
    </div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Film Strip Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .film-strip {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .film-strip-inner {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
      height: 20rem;
    }

    .film-frame {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .film-frame:hover { transform: scale(1.05); }
    .film-frame > div { width: 100%; height: 100%; }

    .frame-number {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      background-color: rgba(15, 23, 42, 0.8);
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }

    .frame-1 { grid-column: span 2; }
    .frame-2 { grid-column: span 4; }
    .frame-3 { grid-column: span 3; }
    .frame-4 { grid-column: span 2; }
    .frame-5 { grid-column: span 1; }

    @media (max-width: 768px) {
      .film-strip-inner {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 12rem);
        height: auto;
      }
      .frame-1, .frame-2, .frame-3, .frame-4, .frame-5 { grid-column: span 1; }
    }
  </style>
</head>
<body>
  <div class="film-strip">
    <div class="film-strip-inner">
      <div class="film-frame frame-1">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="frame-number">01</div>
      </div>
      <div class="film-frame frame-2">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
        <div class="frame-number">02</div>
      </div>
      <div class="film-frame frame-3">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
        <div class="frame-number">03</div>
      </div>
      <div class="film-frame frame-4">
        <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
        <div class="frame-number">04</div>
      </div>
      <div class="film-frame frame-5">
        <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
        <div class="frame-number">05</div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
