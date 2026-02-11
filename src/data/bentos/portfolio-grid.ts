import type { BentoEntry } from './types';

export const portfolioGrid: BentoEntry = {
  meta: {
    id: 'portfolio-grid',
    name: 'Portfolio Grid',
    category: 'portfolio',
    columns: 12,
    itemCount: 6,
    description: '3x2 grid of project cards with overlay text',
    tags: ['portfolio', 'grid', 'projects', 'overlay'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="portfolio-grid" class="bt-div">
      <div class="bento-item bento-item-1">
        <div class="project-overlay">
          <span class="project-badge">Featured</span>
          <div class="overlay-content">
            <h3 class="overlay-title">Web Dashboard</h3>
            <p class="overlay-category">Web Design</p>
            <div class="overlay-tags">
              <span class="tag">React</span>
              <span class="tag">UI/UX</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bento-item bento-item-2">
        <div class="project-overlay">
          <span class="project-badge">New</span>
          <div class="overlay-content">
            <h3 class="overlay-title">Brand Identity</h3>
            <p class="overlay-category">Branding</p>
            <div class="overlay-tags">
              <span class="tag">Logo</span>
              <span class="tag">Design</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bento-item bento-item-3">
        <div class="project-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">Mobile Banking</h3>
            <p class="overlay-category">App Design</p>
            <div class="overlay-tags">
              <span class="tag">iOS</span>
              <span class="tag">Android</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bento-item bento-item-4">
        <div class="project-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">E-Learning Platform</h3>
            <p class="overlay-category">Web Development</p>
            <div class="overlay-tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Node</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bento-item bento-item-5">
        <div class="project-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">Social Network</h3>
            <p class="overlay-category">Full Stack</p>
            <div class="overlay-tags">
              <span class="tag">GraphQL</span>
              <span class="tag">AWS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bento-item bento-item-6">
        <div class="project-overlay">
          <div class="overlay-content">
            <h3 class="overlay-title">Fitness Tracker</h3>
            <p class="overlay-category">Mobile App</p>
            <div class="overlay-tags">
              <span class="tag">Swift</span>
              <span class="tag">HealthKit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
    css: `
      :root {
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --border-radius: 0.75rem;
        --transition-fast: 0.3s ease-in-out;
      }

      #portfolio-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 20rem;
        gap: var(--space-md);
        padding: var(--space-sm);
      }

      .bento-item {
        grid-column: span 4;
        overflow: hidden;
        border-radius: var(--border-radius);
        position: relative;
        cursor: pointer;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        background: #111827;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
      }

      .bento-item:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
      }

      .bento-item-1 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 {
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      .project-overlay {
        position: absolute;
        inset: 0;
        padding: 1.5rem;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        transition: background var(--transition-fast);
      }

      .bento-item:hover .project-overlay {
        background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.2) 100%);
      }

      .project-badge {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        padding: 0.375rem 0.75rem;
        background: rgba(255, 255, 255, 0.95);
        color: #2d3748;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .overlay-content {
        transform: translateY(0);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover .overlay-content {
        transform: translateY(-0.5rem);
      }

      .overlay-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 0.5rem 0;
        color: white;
      }

      .overlay-category {
        font-size: 0.875rem;
        opacity: 0.9;
        margin: 0 0 1rem 0;
        color: rgba(255, 255, 255, 0.9);
      }

      .overlay-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .tag {
        padding: 0.25rem 0.625rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        backdrop-filter: blur(10px);
        color: white;
      }

      @media (max-width: 768px) {
        #portfolio-grid {
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: 16rem;
        }

        .bento-item {
          grid-column: span 1;
        }
      }
        `,
    tailwind: `
    <div
      class="w-full grid grid-cols-12 auto-rows-[20rem] gap-5 p-4"
    >
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic1.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <span class="absolute top-6 right-6 px-3 py-1.5 bg-white/95 text-gray-800 rounded text-xs font-semibold uppercase tracking-wide">Featured</span>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">Web Dashboard</h3>
          <p class="text-sm opacity-90 mb-4">Web Design</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">React</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">UI/UX</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-red-500 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic2.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <span class="absolute top-6 right-6 px-3 py-1.5 bg-white/95 text-gray-800 rounded text-xs font-semibold uppercase tracking-wide">New</span>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">Brand Identity</h3>
          <p class="text-sm opacity-90 mb-4">Branding</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Logo</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Design</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic3.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">Mobile Banking</h3>
          <p class="text-sm opacity-90 mb-4">App Design</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">iOS</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Android</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic6.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">E-Learning Platform</h3>
          <p class="text-sm opacity-90 mb-4">Web Development</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Vue.js</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Node</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-yellow-400 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic7.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">Social Network</h3>
          <p class="text-sm opacity-90 mb-4">Full Stack</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">GraphQL</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">AWS</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-800 relative cursor-pointer group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 shadow-lg">
        <div class="absolute inset-0">
          <img src="images/aesthetic8.jpg" class="w-full h-full object-cover" alt="Project" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-300"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 class="text-2xl font-bold mb-2">Fitness Tracker</h3>
          <p class="text-sm opacity-90 mb-4">Mobile App</p>
          <div class="flex gap-2 flex-wrap">
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">Swift</span>
            <span class="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded text-xs font-medium">HealthKit</span>
          </div>
        </div>
      </div>
    </div>
        `,
  },
};
