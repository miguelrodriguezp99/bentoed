import type { BentoEntry } from './types';

export const galleryPanoramic: BentoEntry = {
  meta: {
    id: 'gallery-panoramic',
    name: 'Panoramic Gallery',
    category: 'gallery',
    columns: 12,
    itemCount: 3,
    description: 'Full-width panoramic strips with varying heights',
    tags: ['gallery', 'panoramic', 'wide', 'strips'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="gallery-panoramic" class="bt-div">
      <div class="bento-item bento-item-1"></div>
      <div class="bento-item bento-item-2"></div>
      <div class="bento-item bento-item-3"></div>
    </div>
        `,
    css: `
      :root {
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --border-radius: 0.75rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #gallery-panoramic {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        grid-column: span 12;
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover {
        transform: scale(1.01);
      }

      .bento-item-1 {
        height: 8rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        height: 12rem;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        height: 10rem;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      @media (min-width: 768px) {
        .bento-item-1 {
          height: 12rem;
        }

        .bento-item-2 {
          height: 18rem;
        }

        .bento-item-3 {
          height: 14rem;
        }
      }
        `,
    tailwind: `
    <div
      class="w-full grid grid-cols-12 gap-4 p-4"
    >
      <div class="col-span-12 h-32 md:h-48 group overflow-hidden rounded-xl hover:scale-[1.01] transition-transform duration-500">
        <img src="images/aesthetic1.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-12 h-48 md:h-72 group overflow-hidden rounded-xl hover:scale-[1.01] transition-transform duration-500">
        <img src="images/aesthetic2.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-12 h-40 md:h-56 group overflow-hidden rounded-xl hover:scale-[1.01] transition-transform duration-500">
        <img src="images/aesthetic3.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>
    </div>
        `,
  },
};
