import type { BentoEntry } from './types';

export const galleryFullWidth: BentoEntry = {
  meta: {
    id: 'gallery-full-width',
    name: 'Full Width Gallery',
    category: 'gallery',
    columns: 12,
    itemCount: 5,
    description: 'Alternating full-width and half-width gallery layout',
    tags: ['gallery', 'full-width', 'alternating', 'hero'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="gallery-full-width" class="bt-div">
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
        --space-md: 1.25rem;
        --border-radius: 0.75rem;
      }

      #gallery-full-width {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 20rem;
        gap: var(--space-md);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
      }

      .bento-item-1 {
        grid-column: span 12;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        grid-column: span 6;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        grid-column: span 6;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        grid-column: span 12;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        grid-column: span 12;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      @media (max-width: 768px) {
        #gallery-full-width {
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: 16rem;
        }

        .bento-item-1,
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
      class="w-full grid grid-cols-12 auto-rows-[20rem] gap-5 p-4"
    >
      <div class="col-span-12 overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-700"><img src="images/aesthetic1.jpg" class="h-full w-full object-cover" /></div>
      <div class="col-span-12 md:col-span-6 overflow-hidden rounded-xl bg-gradient-to-br from-pink-400 to-red-500"><img src="images/aesthetic2.jpg" class="h-full w-full object-cover" /></div>
      <div class="col-span-12 md:col-span-6 overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600"><img src="images/aesthetic3.jpg" class="h-full w-full object-cover" /></div>
      <div class="col-span-12 overflow-hidden rounded-xl bg-gradient-to-br from-green-400 to-teal-400"><img src="images/aesthetic4.jpg" class="h-full w-full object-cover" /></div>
      <div class="col-span-12 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-yellow-400"><img src="images/aesthetic5.jpg" class="h-full w-full object-cover" /></div>
    </div>
        `,
  },
};
