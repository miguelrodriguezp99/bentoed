import type { BentoEntry } from "./types";

export const galleryDiamond: BentoEntry = {
	meta: {
		id: "gallery-diamond",
		name: "Diamond Gallery",
		category: "gallery",
		columns: 12,
		itemCount: 7,
		description: "Diamond/offset pattern gallery with centered items",
		tags: ["gallery", "diamond", "offset", "centered", "responsive"],
		createdAt: "2024-01-15",
	},
	code: {
		html: `
    <div id="gallery-diamond" class="bt-div">
      <div class="bento-item bento-item-1"></div>
      <div class="bento-item bento-item-2"></div>
      <div class="bento-item bento-item-3"></div>
      <div class="bento-item bento-item-4"></div>
      <div class="bento-item bento-item-5"></div>
      <div class="bento-item bento-item-6"></div>
      <div class="bento-item bento-item-7"></div>
    </div>
        `,
		css: `
      :root {
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --border-radius: 0.75rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #gallery-diamond {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: 10rem;
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover {
        transform: scale(1.02);
      }

      .bento-item-1 {
        grid-column: 1 / span 6;
        grid-row: span 2;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        grid-column: 7 / span 6;
        grid-row: span 2;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        grid-column: span 12;
        grid-row: span 2;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        grid-column: span 12;
        grid-row: span 2;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        grid-column: span 12;
        grid-row: span 2;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 {
        grid-column: 1 / span 6;
        grid-row: span 2;
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      .bento-item-7 {
        grid-column: 7 / span 6;
        grid-row: span 2;
        background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      }

      @media (min-width: 768px) {
        .bento-item-1 {
          grid-column: 3 / span 4;
        }

        .bento-item-2 {
          grid-column: 7 / span 4;
        }

        .bento-item-3,
        .bento-item-4,
        .bento-item-5 {
          grid-column: span 4;
        }

        .bento-item-6 {
          grid-column: 3 / span 4;
        }

        .bento-item-7 {
          grid-column: 7 / span 4;
        }
      }
        `,
		tailwind: `
    <div
      class="w-full grid grid-cols-12 auto-rows-[10rem] gap-4 p-4"
    >
      <div class="col-span-6 row-span-2 md:col-start-3 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic1.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-6 row-span-2 md:col-start-7 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic2.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-12 row-span-2 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic3.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-12 row-span-2 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic4.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-12 row-span-2 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic5.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-6 row-span-2 md:col-start-3 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic6.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>

      <div class="col-span-6 row-span-2 md:col-start-7 md:col-span-4 group overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-500">
        <img src="images/aesthetic7.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>
    </div>
        `,
	},
};
