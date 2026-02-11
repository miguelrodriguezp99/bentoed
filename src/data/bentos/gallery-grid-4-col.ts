import type { BentoEntry } from './types';

export const galleryGrid4Col: BentoEntry = {
  meta: {
    id: 'gallery-grid-4-col',
    name: 'Gallery Grid 4-6',
    category: 'gallery',
    columns: 10,
    itemCount: 4,
    description: '4-item image gallery with 4-6-6-4 column split layout',
    tags: ['gallery', 'images', 'grid', 'responsive'],
    createdAt: '2024-01-01',
  },
  code: {
    html: `
    <div id="gallery-grid-4-col" class="bt-div">
      <div class="bento-item bento-item-1">
        <img src="images/image.avif" />
      </div>
      <div class="bento-item bento-item-2">
        <img src="images/image2.avif" />
      </div>
      <div class="bento-item bento-item-3">
        <img src="images/image3.avif" />
      </div>
      <div class="bento-item bento-item-4">
        <img src="images/image4.avif" />
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

      #gallery-grid-4-col {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(10, minmax(0, 1fr));
        grid-auto-rows: 35rem; /* 560px */
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
      }
      .bento-item-1 {
        grid-column: span 4;
      }
      .bento-item-2 {
        grid-column: span 6;
      }
      .bento-item-3 {
        grid-column: span 6;
      }
      .bento-item-4 {
        grid-column: span 4;
      }

      .bento-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-fast);
      }

      .bento-item:hover img {
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        .bt-div,
        #gallery-grid-4-col {
          grid-template-columns: repeat(2, 1fr);
        }

        .bento-item-1,
        .bento-item-2,
        .bento-item-3,
        .bento-item-4 {
          grid-column: span 2;
        }
      }
        `,
    tailwind: `
    <div
    class="w-full grid grid-cols-10 max-auto auto-rows-[35rem] gap-4 p-1"
    >
      <div class="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
        <img
          src="images/image.avif"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
        <img
          src="images/image2.avif"
          class="h-full w-full object-cover
      group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-10 lg:col-span-6 group overflow-hidden rounded-md">
        <img
          src="images/image3.avif"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-10 lg:col-span-4 group overflow-hidden rounded-md">
        <img
          src="images/image4.avif"
          class="h-full w-full object-cover
        group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
        `,
  },
};
