import type { BentoEntry } from './types';

export const blogMagazine: BentoEntry = {
  meta: {
    id: 'blog-magazine',
    name: 'Magazine Blog Layout',
    category: 'blog',
    columns: 12,
    itemCount: 5,
    description: 'Magazine-style blog layout with featured post and smaller articles',
    tags: ['blog', 'magazine', 'articles', 'editorial'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="blog-magazine" class="bt-div">
      <div class="bento-item bento-item-1">
        <span class="bento-category">Featured</span>
        <h2 class="bento-post-title">The Future of Web Design</h2>
        <p class="bento-post-excerpt">Explore the latest trends and technologies shaping the future of web design and development.</p>
        <div class="bento-post-meta">
          <span class="bento-date">Jan 15, 2024</span>
          <span class="bento-read-time">5 min read</span>
        </div>
      </div>
      <div class="bento-item bento-item-2">
        <span class="bento-category">Design</span>
        <h3 class="bento-post-title-small">Color Theory in Modern UI</h3>
        <span class="bento-date">Jan 14, 2024</span>
      </div>
      <div class="bento-item bento-item-3">
        <span class="bento-category">Development</span>
        <h3 class="bento-post-title-small">Building Responsive Grids</h3>
        <span class="bento-date">Jan 13, 2024</span>
      </div>
      <div class="bento-item bento-item-4">
        <span class="bento-category">Tutorial</span>
        <h3 class="bento-post-title-small">Getting Started with Bento</h3>
        <p class="bento-post-excerpt-small">A complete guide to building beautiful layouts</p>
        <span class="bento-date">Jan 12, 2024</span>
      </div>
      <div class="bento-item bento-item-5">
        <span class="bento-category">Tips</span>
        <h3 class="bento-post-title-small">10 CSS Tricks You Need</h3>
        <p class="bento-post-excerpt-small">Essential techniques for modern web development</p>
        <span class="bento-date">Jan 11, 2024</span>
      </div>
    </div>
        `,
    css: `
      :root {
        --space-xs: 0.25rem;
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --space-lg: 4rem;

        --border-radius: 0.375rem;
        --transition-fast: 0.5s ease-in-out;
      }

      .bt-section {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        margin-top: 4rem /* 64px */;
      }

      #blog-magazine {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 12rem; /* 192px */
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        background: #f7fafc;
        border: 2px solid #e2e8f0;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
      }

      .bento-item:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .bento-item-1 {
        grid-column: span 8;
        grid-row: span 2;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        justify-content: space-between;
      }

      .bento-item-2,
      .bento-item-3 {
        grid-column: span 4;
        justify-content: space-between;
      }

      .bento-item-4,
      .bento-item-5 {
        grid-column: span 6;
        justify-content: space-between;
      }

      .bento-category {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.25rem 0.75rem;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 9999px;
        width: fit-content;
        margin-bottom: 1rem;
      }

      .bento-item-2 .bento-category,
      .bento-item-3 .bento-category,
      .bento-item-4 .bento-category,
      .bento-item-5 .bento-category {
        background: #667eea;
        color: white;
      }

      .bento-post-title {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      .bento-post-title-small {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: 1rem;
        color: #2d3748;
      }

      .bento-post-excerpt {
        font-size: 1.125rem;
        line-height: 1.6;
        opacity: 0.9;
        margin-bottom: 1rem;
      }

      .bento-post-excerpt-small {
        font-size: 0.875rem;
        line-height: 1.5;
        color: #718096;
        margin-bottom: 1rem;
      }

      .bento-post-meta {
        display: flex;
        gap: 1rem;
        font-size: 0.875rem;
        opacity: 0.8;
      }

      .bento-date {
        font-size: 0.875rem;
        color: #718096;
      }

      .bento-item-1 .bento-date {
        color: white;
        opacity: 0.8;
      }

      .bento-read-time {
        font-size: 0.875rem;
      }

      @media (max-width: 768px) {
        .bt-div,
        #blog-magazine {
          grid-template-columns: repeat(12, 1fr);
        }

        .bento-item-1,
        .bento-item-2,
        .bento-item-3,
        .bento-item-4,
        .bento-item-5 {
          grid-column: span 12;
        }
      }
        `,
    tailwind: `
    <div
    class="w-full grid grid-cols-12 auto-rows-[12rem] gap-4 p-1"
    >
      <div class="col-span-12 md:col-span-8 row-span-2 bg-gray-800 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
        <div class="h-32 overflow-hidden"><img src="images/aesthetic1.jpg" class="h-full w-full object-cover" /></div>
        <div class="p-8 flex flex-col justify-between text-white">
          <div>
            <span class="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-white/20 rounded-full mb-4">Featured</span>
            <h2 class="text-3xl font-bold leading-tight mb-4">The Future of Web Design</h2>
            <p class="text-lg opacity-90 mb-4">Explore the latest trends and technologies shaping the future of web design and development.</p>
          </div>
          <div class="flex gap-4 text-sm opacity-80">
            <span>Jan 15, 2024</span>
            <span>5 min read</span>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 bg-gray-50 border-2 border-gray-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
        <div class="h-32 overflow-hidden"><img src="images/aesthetic2.jpg" class="h-full w-full object-cover" /></div>
        <div class="p-6 flex flex-col justify-between">
          <div>
            <span class="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-gray-800 text-white rounded-full mb-4">Design</span>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Color Theory in Modern UI</h3>
          </div>
          <span class="text-sm text-gray-600">Jan 14, 2024</span>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4 bg-gray-50 border-2 border-gray-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
        <div class="h-32 overflow-hidden"><img src="images/aesthetic3.jpg" class="h-full w-full object-cover" /></div>
        <div class="p-6 flex flex-col justify-between">
          <div>
            <span class="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-gray-800 text-white rounded-full mb-4">Development</span>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Building Responsive Grids</h3>
          </div>
          <span class="text-sm text-gray-600">Jan 13, 2024</span>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 bg-gray-50 border-2 border-gray-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
        <div class="h-32 overflow-hidden"><img src="images/aesthetic4.jpg" class="h-full w-full object-cover" /></div>
        <div class="p-6 flex flex-col justify-between">
          <div>
            <span class="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-gray-800 text-white rounded-full mb-4">Tutorial</span>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Getting Started with Bento</h3>
            <p class="text-sm text-gray-600 mb-4">A complete guide to building beautiful layouts</p>
          </div>
          <span class="text-sm text-gray-600">Jan 12, 2024</span>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 bg-gray-50 border-2 border-gray-200 rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
        <div class="h-32 overflow-hidden"><img src="images/aesthetic5.jpg" class="h-full w-full object-cover" /></div>
        <div class="p-6 flex flex-col justify-between">
          <div>
            <span class="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-gray-800 text-white rounded-full mb-4">Tips</span>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">10 CSS Tricks You Need</h3>
            <p class="text-sm text-gray-600 mb-4">Essential techniques for modern web development</p>
          </div>
          <span class="text-sm text-gray-600">Jan 11, 2024</span>
        </div>
      </div>
    </div>
        `,
  },
};
