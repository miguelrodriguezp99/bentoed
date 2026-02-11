import type { BentoEntry } from "./types";

export const blogPhotoJournal: BentoEntry = {
	meta: {
		id: "blog-photo-journal",
		name: "Photo Journal",
		description: "Blog layout with prominent photography",
		category: "blog",
		columns: 12,
		itemCount: 3,
		tags: ["blog", "photography", "journal", "articles"],
		createdAt: "2024-01-15",
	},
	code: {
		tailwind: `<div class="p-8 rounded-2xl max-w-7xl mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
    <!-- Hero image with title overlay -->
    <div class="col-span-1 md:col-span-12 row-span-1 md:row-span-2 relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02] h-[300px] md:h-[500px]">
      <img src="images/aesthetic1.jpg" alt="Hero post" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end">
        <div class="p-8 text-white w-full">
          <div class="flex gap-2 mb-3">
            <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">Travel</span>
            <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">Photography</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-3">Journey Through Mountains</h1>
          <div class="flex items-center gap-4 text-sm text-slate-300">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Card 1: Image + Content -->
    <div class="col-span-1 md:col-span-6 relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02] bg-slate-900">
      <div class="h-64 overflow-hidden">
        <img src="images/aesthetic2.jpg" alt="Post image" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <div class="flex gap-2 mb-3">
          <span class="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Design</span>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">Minimalist Architecture</h2>
        <p class="text-slate-400 text-sm mb-4">Exploring the beauty of simplicity in modern design. How less can truly be more when crafted with intention.</p>
        <div class="flex items-center gap-3 text-xs text-slate-500">
          <span>January 12, 2024</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>
    </div>

    <!-- Card 2: Image + Content -->
    <div class="col-span-1 md:col-span-6 relative overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02] bg-slate-900">
      <div class="h-64 overflow-hidden">
        <img src="images/aesthetic3.jpg" alt="Post image" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <div class="flex gap-2 mb-3">
          <span class="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs">Nature</span>
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">Coastal Wanderings</h2>
        <p class="text-slate-400 text-sm mb-4">A journey along forgotten shores where the ocean meets ancient stone. Discovering hidden coves and timeless views.</p>
        <div class="flex items-center gap-3 text-xs text-slate-500">
          <span>January 10, 2024</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>
  </div>
</div>
`,
		css: `<style>
.photo-journal {
  background-color: #0f172a;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 80rem;
  margin: 0 auto;
}

.journal-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.journal-hero {
  grid-column: span 12;
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  height: 500px;
}

.journal-hero:hover {
  transform: scale(1.02);
}

.journal-hero > div {
  width: 100%;
  height: 100%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.6) 40%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  color: white;
}

.hero-content {
  width: 100%;
}

.hero-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.hero-tag {
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: #cbd5e1;
}

.journal-card {
  grid-column: span 6;
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  background-color: #1e293b;
}

.journal-card:hover {
  transform: scale(1.02);
}

.card-image {
  height: 16rem;
  overflow: hidden;
}

.card-image > div {
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 1.5rem;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.card-tag {
  padding: 0.25rem 0.5rem;
  background-color: #334155;
  color: #cbd5e1;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
}

.card-excerpt {
  color: #94a3b8;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .journal-card {
    grid-column: span 12;
  }
  .hero-title {
    font-size: 2rem;
  }
}
</style>

<div class="photo-journal">
  <div class="journal-grid">
    <div class="journal-hero">
      <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
      <div class="hero-overlay">
        <div class="hero-content">
          <div class="hero-tags">
            <span class="hero-tag">Travel</span>
            <span class="hero-tag">Photography</span>
          </div>
          <h1 class="hero-title">Journey Through Mountains</h1>
          <div class="hero-meta">
            <span>January 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </div>

    <div class="journal-card">
      <div class="card-image">
        <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
      </div>
      <div class="card-content">
        <div class="card-tags">
          <span class="card-tag">Design</span>
        </div>
        <h2 class="card-title">Minimalist Architecture</h2>
        <p class="card-excerpt">Exploring the beauty of simplicity in modern design. How less can truly be more when crafted with intention.</p>
        <div class="card-meta">
          <span>January 12, 2024</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>
    </div>

    <div class="journal-card">
      <div class="card-image">
        <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
      </div>
      <div class="card-content">
        <div class="card-tags">
          <span class="card-tag">Nature</span>
        </div>
        <h2 class="card-title">Coastal Wanderings</h2>
        <p class="card-excerpt">A journey along forgotten shores where the ocean meets ancient stone. Discovering hidden coves and timeless views.</p>
        <div class="card-meta">
          <span>January 10, 2024</span>
          <span>•</span>
          <span>6 min read</span>
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
  <title>Photo Journal</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #111827; padding: 2rem; }

    .photo-journal {
      background-color: #0f172a;
      padding: 2rem;
      border-radius: 1rem;
      max-width: 80rem;
      margin: 0 auto;
    }

    .journal-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.5rem;
    }

    .journal-hero {
      grid-column: span 12;
      grid-row: span 2;
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
      height: 500px;
    }

    .journal-hero:hover { transform: scale(1.02); }
    .journal-hero > div { width: 100%; height: 100%; }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, #0f172a 0%, rgba(15, 23, 42, 0.6) 40%, transparent 100%);
      display: flex;
      align-items: flex-end;
      padding: 2rem;
      color: white;
    }

    .hero-content { width: 100%; }

    .hero-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .hero-tag {
      padding: 0.25rem 0.75rem;
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }

    .hero-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.875rem;
      color: #cbd5e1;
    }

    .journal-card {
      grid-column: span 6;
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s ease;
      background-color: #1e293b;
    }

    .journal-card:hover { transform: scale(1.02); }

    .card-image {
      height: 16rem;
      overflow: hidden;
    }

    .card-image > div { width: 100%; height: 100%; }

    .card-content { padding: 1.5rem; }

    .card-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .card-tag {
      padding: 0.25rem 0.5rem;
      background-color: #334155;
      color: #cbd5e1;
      border-radius: 0.25rem;
      font-size: 0.75rem;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
      margin-bottom: 0.5rem;
    }

    .card-excerpt {
      color: #94a3b8;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.75rem;
      color: #64748b;
    }

    @media (max-width: 768px) {
      .journal-card { grid-column: span 12; }
      .hero-title { font-size: 2rem; }
    }
  </style>
</head>
<body>
  <div class="photo-journal">
    <div class="journal-grid">
      <div class="journal-hero">
        <div style="background:linear-gradient(135deg,#667eea,#764ba2)"></div>
        <div class="hero-overlay">
          <div class="hero-content">
            <div class="hero-tags">
              <span class="hero-tag">Travel</span>
              <span class="hero-tag">Photography</span>
            </div>
            <h1 class="hero-title">Journey Through Mountains</h1>
            <div class="hero-meta">
              <span>January 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div class="journal-card">
        <div class="card-image">
          <div style="background:linear-gradient(135deg,#f093fb,#f5576c)"></div>
        </div>
        <div class="card-content">
          <div class="card-tags">
            <span class="card-tag">Design</span>
          </div>
          <h2 class="card-title">Minimalist Architecture</h2>
          <p class="card-excerpt">Exploring the beauty of simplicity in modern design. How less can truly be more when crafted with intention.</p>
          <div class="card-meta">
            <span>January 12, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>

      <div class="journal-card">
        <div class="card-image">
          <div style="background:linear-gradient(135deg,#4facfe,#00f2fe)"></div>
        </div>
        <div class="card-content">
          <div class="card-tags">
            <span class="card-tag">Nature</span>
          </div>
          <h2 class="card-title">Coastal Wanderings</h2>
          <p class="card-excerpt">A journey along forgotten shores where the ocean meets ancient stone. Discovering hidden coves and timeless views.</p>
          <div class="card-meta">
            <span>January 10, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
	},
};
