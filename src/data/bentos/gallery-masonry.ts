import type { BentoEntry } from "./types";

export const galleryMasonry: BentoEntry = {
	meta: {
		id: "gallery-masonry",
		name: "Masonry Gallery",
		category: "gallery",
		columns: 4,
		itemCount: 8,
		description: "Masonry-style gallery with varied item sizes",
		tags: ["gallery", "masonry", "pinterest", "varied"],
		createdAt: "2024-01-15",
	},
	code: {
		html: `
    <div id="gallery-masonry" class="bt-div">
      <div class="bento-item bento-item-1"></div>
      <div class="bento-item bento-item-2"></div>
      <div class="bento-item bento-item-3"></div>
      <div class="bento-item bento-item-4"></div>
      <div class="bento-item bento-item-5"></div>
      <div class="bento-item bento-item-6"></div>
      <div class="bento-item bento-item-7"></div>
      <div class="bento-item bento-item-8"></div>
    </div>
        `,
		css: `
      :root {
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --border-radius: 0.75rem;
      }

      #gallery-masonry {
        width: 100%;
        columns: 4;
        column-gap: var(--space-md);
        padding: var(--space-sm);
      }

      .bento-item {
        break-inside: avoid;
        margin-bottom: var(--space-md);
        border-radius: var(--border-radius);
        overflow: hidden;
        transition: transform 0.3s ease-in-out;
      }

      .bento-item:hover {
        transform: scale(1.02);
      }

      .bento-item-1 {
        height: 18rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 {
        height: 12rem;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 {
        height: 22rem;
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 {
        height: 14rem;
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 {
        height: 16rem;
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 {
        height: 20rem;
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      .bento-item-7 {
        height: 10rem;
        background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      }

      .bento-item-8 {
        height: 24rem;
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
      }

      @media (max-width: 768px) {
        #gallery-masonry {
          columns: 2;
        }
      }
        `,
		tailwind: `
    <div
      class="w-full columns-2 md:columns-4 gap-3 p-4"
    >
      <div class="break-inside-avoid mb-3 h-72 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic1.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-48 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic2.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-88 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic3.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-56 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic4.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-64 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic5.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-80 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic6.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-40 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic7.jpg" class="h-full w-full object-cover" /></div>
      <div class="break-inside-avoid mb-3 h-96 overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"><img src="images/aesthetic8.jpg" class="h-full w-full object-cover" /></div>
    </div>
        `,
	},
};
