import type { BentoEntry } from './types';

export const galleryGrid8Item: BentoEntry = {
  meta: {
    id: 'gallery-grid-8-item',
    name: 'Gallery Grid 8-Item',
    category: 'gallery',
    columns: 12,
    itemCount: 8,
    description: '8-item responsive grid gallery with varied column spans',
    tags: ['gallery', 'images', 'grid', 'responsive', '8-item'],
    createdAt: '2024-01-01',
  },
  code: {
    html: `
  <div id="bento-div" class="bt-div">
    <div class="bento-item bento-item-1">
      <img src="images/image.avif" />
    </div>
    <div class="bento-item bento-item-2">
      <img src="images/image2.avif" />
    </div>
    <div class="bento-item bento-item-3">
      <img src="images/image.avif" />
    </div>
    <div class="bento-item bento-item-4">
      <img src="images/image2.avif" />
    </div>
    <div class="bento-item bento-item-5">
      <img src="images/image3.avif" />
    </div>
    <div class="bento-item bento-item-6">
      <img src="images/image4.avif" />
    </div>
    <div class="bento-item bento-item-7">
      <img src="images/image5.avif" />
    </div>
    <div class="bento-item bento-item-8">
      <img src="images/image6.avif" />
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

    #bento-div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: 20rem; /* 560px */
      gap: var(--space-sm);
      padding: var(--space-sm);
    }
    .bento-item {
      overflow: hidden;
      border-radius: var(--border-radius);
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

    .bento-item-1 {
      grid-column: span 12;

      img {
        object-position: top;
      }
    }

    .bento-item-2 {
      grid-column: span 12;

      img {
        object-position: top;
      }
    }
    .bento-item-3,
    .bento-item-4 {
      grid-column: span 6;
      display: none;
    }

    .bento-item-5,
    .bento-item-6,
    .bento-item-7,
    .bento-item-8 {
      grid-column: span 6;
    }

    @media (min-width: 768px) {
      .bento-item-1,
      .bento-item-2 {
        grid-column: span 6;
      }

      .bento-item-3,
      .bento-item-4 {
        grid-column: span 6;
        display: block;
      }

      .bento-item-5,
      .bento-item-6,
      .bento-item-7,
      .bento-item-8 {
        grid-column: span 3;
      }
    }
        `,
    tailwind: `
    <div
    id="bento-div"
    class="w-full grid grid-cols-12 max-auto auto-rows-[20rem] gap-4 p-1"
    >
      <div class="col-span-12 md:col-span-6 group overflow-hidden rounded-lg">
        <img
          src="images/image.avif"
          class="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-12 md:col-span-6 group overflow-hidden rounded-lg">
        <img
          src="images/image2.avif"
          class="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="hidden md:block col-span-12 md:col-span-6 group overflow-hidden rounded-lg"
      >
        <img
          src="images/image.avif"
          class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="hidden md:block col-span-12 md:col-span-6 group overflow-hidden rounded-lg"
      >
        <img
          src="images/image2.avif"
          class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-6 md:col-span-3 group overflow-hidden rounded-lg">
        <img
          src="images/image6.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-6 md:col-span-3 group overflow-hidden rounded-lg">
        <img
          src="images/image7.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div class="col-span-6 md:col-span-3 group overflow-hidden rounded-lg">
        <img
          src="images/image8.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-6 md:col-span-3 group overflow-hidden rounded-lg">
        <img
          src="images/image9.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
        `,
  },
};
