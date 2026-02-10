import type { BentoEntry } from "./types";

export const galleryTiles: BentoEntry = {
	meta: {
		id: "gallery-tiles",
		name: "Tiles Gallery",
		description: "Tetris-like asymmetric tile pattern",
		category: "gallery",
		columns: 6,
		itemCount: 8,
		tags: ["gallery", "tiles", "tetris", "geometric"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class="p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-6 gap-4 auto-rows-[200px]">
    <!-- L-shape piece: 2x2 main + 1x1 extension -->
    <div class="col-span-2 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic1.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
      <div class="absolute top-4 left-4 bg-slate-950/80 text-white text-xs px-3 py-1 rounded-full">L-Tile</div>
    </div>

    <!-- Tall vertical -->
    <div class="col-span-1 row-span-2 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic2.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>

    <!-- Square -->
    <div class="col-span-1 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic3.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>

    <!-- Wide horizontal -->
    <div class="col-span-2 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic4.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>

    <!-- T-shape top: horizontal bar -->
    <div class="col-span-2 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic5.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
      <div class="absolute top-4 left-4 bg-slate-950/80 text-white text-xs px-3 py-1 rounded-full">T-Top</div>
    </div>

    <!-- Small square -->
    <div class="col-span-1 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic6.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>

    <!-- T-shape stem: vertical drop -->
    <div class="col-start-0 col-span-2 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic7.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
      <div class="absolute top-4 left-4 bg-slate-950/80 text-white text-xs px-3 py-1 rounded-full">T-Stem</div>
    </div>

    <!-- Wide bottom piece -->
    <div class="col-span-3 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic8.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>

		<div class="col-span-1 row-span-1 relative overflow-hidden rounded-xl transition-transform hover:scale-105 shadow-2xl">
      <img src="images/aesthetic5.jpg" alt="Gallery tile" class="w-full h-full object-cover" />
    </div>
  </div>
</div>

<!-- Mobile responsive -->
<style>
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
  .col-span-2, .col-span-3 {
    grid-column: span 2;
  }
  .col-span-1 {
    grid-column: span 1;
  }
  .col-start-2 {
    grid-column: auto;
  }
}
</style>`,
		css: `<style>
.tiles-gallery {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.tiles-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  grid-auto-rows: 200px;
}

.tile-item {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

.tile-item:hover {
  transform: scale(1.05);
}

.tile-item > div {
  width: 100%;
  height: 100%;
}

.tile-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(15, 23, 42, 0.8);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
}

/* L-shape main */
.tile-1 {
  grid-column: span 2;
  grid-row: span 2;
}

/* Tall vertical */
.tile-2 {
  grid-column: span 1;
  grid-row: span 2;
}

/* Square */
.tile-3 {
  grid-column: span 1;
  grid-row: span 1;
}

/* Wide horizontal */
.tile-4 {
  grid-column: span 2;
  grid-row: span 1;
}

/* T-shape top */
.tile-5 {
  grid-column: span 2;
  grid-row: span 1;
}

/* Small square */
.tile-6 {
  grid-column: span 1;
  grid-row: span 1;
}

/* T-shape stem */
.tile-7 {
  grid-column-start: 2;
  grid-column: span 1;
  grid-row: span 2;
}

/* Wide bottom */
.tile-8 {
  grid-column: span 3;
  grid-row: span 1;
}

@media (max-width: 768px) {
  .tiles-container {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 150px;
  }
  .tile-1, .tile-4, .tile-5, .tile-8 {
    grid-column: span 2;
  }
  .tile-2, .tile-3, .tile-6, .tile-7 {
    grid-column: span 1;
  }
  .tile-7 {
    grid-column-start: auto;
  }
}
</style>

<div class="tiles-gallery">
  <div class="tiles-container">
    <div class="tile-item tile-1">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="tile-badge">L-Tile</div>
    </div>

    <div class="tile-item tile-2">
      <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
    </div>

    <div class="tile-item tile-3">
      <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
    </div>

    <div class="tile-item tile-4">
      <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
    </div>

    <div class="tile-item tile-5">
      <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
      <div class="tile-badge">T-Top</div>
    </div>

    <div class="tile-item tile-6">
      <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
    </div>

    <div class="tile-item tile-7">
      <div style="background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
      <div class="tile-badge">T-Stem</div>
    </div>

    <div class="tile-item tile-8">
      <div style="background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div>
    </div>
  </div>
</div>`,
		html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiles Gallery</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .tiles-gallery {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .tiles-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
      grid-auto-rows: 200px;
    }

    .tile-item {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      transition: transform 0.3s ease;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
    }

    .tile-item:hover { transform: scale(1.05); }
    .tile-item > div { width: 100%; height: 100%; }

    .tile-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background-color: rgba(15, 23, 42, 0.8);
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }

    .tile-1 { grid-column: span 2; grid-row: span 2; }
    .tile-2 { grid-column: span 1; grid-row: span 2; }
    .tile-3 { grid-column: span 1; grid-row: span 1; }
    .tile-4 { grid-column: span 2; grid-row: span 1; }
    .tile-5 { grid-column: span 2; grid-row: span 1; }
    .tile-6 { grid-column: span 1; grid-row: span 1; }
    .tile-7 { grid-column-start: 2; grid-column: span 1; grid-row: span 2; }
    .tile-8 { grid-column: span 3; grid-row: span 1; }

    @media (max-width: 768px) {
      .tiles-container {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 150px;
      }
      .tile-1, .tile-4, .tile-5, .tile-8 { grid-column: span 2; }
      .tile-2, .tile-3, .tile-6, .tile-7 { grid-column: span 1; }
      .tile-7 { grid-column-start: auto; }
    }
  </style>
</head>
<body>
  <div class="tiles-gallery">
    <div class="tiles-container">
      <div class="tile-item tile-1">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="tile-badge">L-Tile</div>
      </div>

      <div class="tile-item tile-2">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      </div>

      <div class="tile-item tile-3">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      </div>

      <div class="tile-item tile-4">
        <div style="background:linear-gradient(135deg,#43e97b,#38f9d7)"></div>
      </div>

      <div class="tile-item tile-5">
        <div style="background:linear-gradient(135deg,#fa709a,#fee140)"></div>
        <div class="tile-badge">T-Top</div>
      </div>

      <div class="tile-item tile-6">
        <div style="background:linear-gradient(135deg,#30cfd0,#330867)"></div>
      </div>

      <div class="tile-item tile-7">
        <div style="background:linear-gradient(135deg,#a8edea,#fed6e3)"></div>
        <div class="tile-badge">T-Stem</div>
      </div>

      <div class="tile-item tile-8">
        <div style="background:linear-gradient(135deg,#ff9a9e,#fecfef)"></div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
