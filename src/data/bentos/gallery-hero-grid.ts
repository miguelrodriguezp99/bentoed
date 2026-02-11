import type { BentoEntry } from './types';

export const galleryHeroGrid: BentoEntry = {
  meta: {
    id: 'gallery-hero-grid',
    name: 'Hero Grid Gallery',
    category: 'gallery',
    columns: 12,
    itemCount: 5,
    description: 'Hero image at top with equal grid items below',
    tags: ['gallery', 'hero', 'grid', 'responsive'],
    createdAt: '2024-01-01',
  },
  code: {
    html: `
    <div id="gallery-hero-grid" class="bt-div">
      <div class="bento-item bento-item-1"></div>
      <div class="bento-item bento-item-2"></div>
      <div class="bento-item bento-item-3"></div>
      <div class="bento-item bento-item-4"></div>
      <div class="bento-item bento-item-5"></div>
    </div>
        `,
    css: `
      :root {
        --space-sm: 1rem;
        --border-radius: 0.375rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #gallery-hero-grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 15rem;
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover {
        transform: scale(1.05);
      }

      .bento-item-1 {
        grid-column: span 12;
        grid-row: span 2;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        grid-column: span 3;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        grid-column: span 3;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        grid-column: span 3;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        grid-column: span 3;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      @media (max-width: 768px) {
        #gallery-hero-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .bento-item-1 {
          grid-column: span 2;
        }

        .bento-item-2,
        .bento-item-3,
        .bento-item-4,
        .bento-item-5 {
          grid-column: span 1;
        }
      }
        `,
    tailwind: `
    <div
    class="w-full grid grid-cols-12 auto-rows-[15rem] gap-4 p-4"
    >
      <div class="col-span-12 row-span-2 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic1.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-6 lg:col-span-3 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic2.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-6 lg:col-span-3 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic3.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-6 lg:col-span-3 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic4.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-6 lg:col-span-3 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic5.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
        `,
  },
};
