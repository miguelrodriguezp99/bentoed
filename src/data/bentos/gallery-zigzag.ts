import type { BentoEntry } from './types';

export const galleryZigzag: BentoEntry = {
  meta: {
    id: 'gallery-zigzag',
    name: 'Zigzag Gallery',
    category: 'gallery',
    columns: 12,
    itemCount: 6,
    description: 'Alternating zigzag pattern with big-small-big layout',
    tags: ['gallery', 'zigzag', 'alternating', 'responsive'],
    createdAt: '2024-01-01',
  },
  code: {
    html: `
    <div id="bento-div" class="bt-div">
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
        --border-radius: 0.375rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #bento-div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 18rem;
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
        grid-column: span 8;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        grid-column: span 4;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        grid-column: span 4;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        grid-column: span 8;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        grid-column: span 8;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 {
        grid-column: span 4;
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      @media (max-width: 768px) {
        #bento-div {
          grid-template-columns: repeat(2, 1fr);
        }

        .bento-item-1,
        .bento-item-2,
        .bento-item-3,
        .bento-item-4,
        .bento-item-5,
        .bento-item-6 {
          grid-column: span 2;
        }
      }
        `,
    tailwind: `
    <div
    id="bento-div"
    class="w-full grid grid-cols-12 auto-rows-[18rem] gap-4 p-4"
    >
      <div class="col-span-12 lg:col-span-8 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic1.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-12 lg:col-span-4 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic2.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-12 lg:col-span-4 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic3.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-12 lg:col-span-8 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic4.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-12 lg:col-span-8 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic5.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-12 lg:col-span-4 group overflow-hidden rounded-md">
        <img
          src="images/aesthetic6.jpg"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
        `,
  },
};
