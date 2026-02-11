import type { BentoEntry } from "./types";

export const galleryMosaic9: BentoEntry = {
	meta: {
		id: "gallery-mosaic-9",
		name: "Gallery Mosaic 9-Item",
		category: "gallery",
		columns: 8,
		itemCount: 9,
		description: "9-item mosaic gallery with varied row and column spans",
		tags: ["gallery", "images", "mosaic", "grid", "responsive"],
		createdAt: "2024-01-01",
	},
	code: {
		html: `
  <div id="gallery-mosaic-9" class="bt-div">
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

    #gallery-mosaic-9 {
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
      class="w-full grid grid-cols-1 md:grid-cols-8 auto-rows-[14rem] md:auto-rows-[10rem] gap-4 p-1"
    >
      <div
        class="col-span-1 md:col-span-4 lg:col-span-2 row-span-1 lg:row-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-1 md:col-span-2 lg:col-span-2 group overflow-hidden rounded-md">
        <img
          src="images/image2.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div class="col-span-1 md:col-span-2 lg:col-span-2 group overflow-hidden rounded-md">
        <img
          src="images/image3.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image4.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 lg:row-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image6.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-2 lg:col-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image8.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 lg:row-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image9.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-2 lg:col-span-4 group overflow-hidden rounded-md"
      >
        <img
          src="images/image3.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div
        class="col-span-1 md:col-span-3 lg:col-span-2 group overflow-hidden rounded-md"
      >
        <img
          src="images/image.avif"
          class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
        `,
	},
};
