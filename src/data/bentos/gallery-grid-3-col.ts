import type { BentoEntry } from './types';

export const galleryGrid3Col: BentoEntry = {
  meta: {
    id: 'gallery-grid-3-col',
    name: '3-Column Gallery',
    category: 'gallery',
    columns: 3,
    itemCount: 6,
    description: '3-column gallery with varied heights using CSS columns',
    tags: ['gallery', 'masonry', '3-column', 'responsive'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="gallery-grid-3-col" class="bt-div">
      <div class="bento-item bento-item-1"></div>
      <div class="bento-item bento-item-2"></div>
      <div class="bento-item bento-item-3"></div>
      <div class="bento-item bento-item-4"></div>
      <div class="bento-item bento-item-5"></div>
      <div class="bento-item bento-item-6"></div>
    </div>
        `,
    css: `
      :root {
        --space-sm: 1rem;
        --border-radius: 0.75rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #gallery-grid-3-col {
        width: 100%;
        columns: 3;
        column-gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        break-inside: avoid;
        margin-bottom: var(--space-sm);
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover {
        transform: scale(1.03);
      }

      .bento-item-1 {
        height: 22rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        height: 14rem;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        height: 18rem;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        height: 16rem;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        height: 20rem;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 {
        height: 12rem;
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      @media (max-width: 768px) {
        #gallery-grid-3-col {
          columns: 2;
        }
      }
        `,
    tailwind: `
    <div
      class="w-full columns-2 md:columns-3 gap-4 p-4"
    >
      <div class="break-inside-avoid mb-4 h-88 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic1.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="break-inside-avoid mb-4 h-56 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic2.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="break-inside-avoid mb-4 h-72 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic3.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="break-inside-avoid mb-4 h-64 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic4.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="break-inside-avoid mb-4 h-80 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic5.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="break-inside-avoid mb-4 h-48 group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic6.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    </div>
        `,
  },
};
