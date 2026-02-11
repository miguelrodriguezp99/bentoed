import type { BentoEntry } from "./types";

export const galleryCross: BentoEntry = {
	meta: {
		id: "gallery-cross",
		name: "Cross Gallery",
		category: "gallery",
		columns: 12,
		itemCount: 5,
		description:
			"Cross/plus pattern with center focal point surrounded by items",
		tags: ["gallery", "cross", "focal", "responsive"],
		createdAt: "2024-01-15",
	},
	code: {
		html: `
    <div id="bento-div" class="bt-div">
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
        --border-radius: 0.75rem;
        --transition-fast: 0.5s ease-in-out;
      }

      #bento-div {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 14rem);
        gap: var(--space-sm);
        padding: var(--space-sm);
      }

      .bento-item {
        overflow: hidden;
        border-radius: var(--border-radius);
        transition: transform var(--transition-fast);
      }

      .bento-item:hover {
        transform: scale(1.03);
      }

      .bento-item-1 {
        grid-column: 2;
        grid-row: 1;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        grid-column: 1;
        grid-row: 2;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        grid-column: 2;
        grid-row: 2;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        grid-column: 3;
        grid-row: 2;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        grid-column: 2;
        grid-row: 3;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      @media (max-width: 768px) {
        #bento-div {
          grid-template-columns: 1fr;
          grid-template-rows: auto;
        }

        .bento-item-1,
        .bento-item-2,
        .bento-item-3,
        .bento-item-4,
        .bento-item-5 {
          grid-column: 1;
          grid-row: auto;
          height: 14rem;
        }
      }
        `,
		tailwind: `
    <div
      id="bento-div"
      class="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-[14rem_14rem_14rem] gap-4 p-4"
    >
      <div class="md:col-start-2 md:row-start-1 row-start-1 col-start-0 h-56 md:h-auto group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic1.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="md:col-start-1 md:row-start-2 row-start-1 col-start-0 h-56 md:h-auto group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic2.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="md:col-start-2 md:row-start-2 row-start-1 col-start-0 h-56 md:h-auto group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic3.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="md:col-start-3 md:row-start-2 row-start-1 col-start-0 h-56 md:h-auto group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic4.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div class="md:col-start-2 md:row-start-3 row-start-1 col-start-0 h-56 md:h-auto group overflow-hidden rounded-xl hover:scale-[1.03] transition-transform duration-500">
        <img src="images/aesthetic5.jpg" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
    </div>
        `,
	},
};
