import type { BentoEntry } from './types';

export const galleryPolaroid: BentoEntry = {
  meta: {
    id: 'gallery-polaroid',
    name: 'Polaroid Gallery',
    category: 'gallery',
    columns: 12,
    itemCount: 6,
    description: 'Gallery with polaroid-style cards and captions',
    tags: ['gallery', 'polaroid', 'vintage', 'captions'],
    createdAt: '2024-01-15',
  },
  code: {
    html: `
    <div id="gallery-polaroid" class="bt-div">
      <div class="bento-item bento-item-1">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">Summer Memories</p>
        </div>
      </div>
      <div class="bento-item bento-item-2">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">City Lights</p>
        </div>
      </div>
      <div class="bento-item bento-item-3">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">Mountain View</p>
        </div>
      </div>
      <div class="bento-item bento-item-4">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">Beach Day</p>
        </div>
      </div>
      <div class="bento-item bento-item-5">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">Forest Trail</p>
        </div>
      </div>
      <div class="bento-item bento-item-6">
        <div class="polaroid-card">
          <div class="polaroid-image"></div>
          <p class="polaroid-caption">Sunset Vibes</p>
        </div>
      </div>
    </div>
        `,
    css: `
      :root {
        --space-sm: 1rem;
        --space-md: 1.25rem;
        --border-radius: 0.25rem;
      }

      #gallery-polaroid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-auto-rows: minmax(22rem, auto);
        gap: var(--space-md);
        padding: var(--space-sm);
      }

      .bento-item {
        grid-column: span 4;
      }

      .polaroid-card {
        background: white;
        padding: 1rem;
        padding-bottom: 3rem;
        border-radius: var(--border-radius);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
      }

      .bento-item-1 .polaroid-card {
        transform: rotate(-2deg);
      }

      .bento-item-2 .polaroid-card {
        transform: rotate(1deg);
      }

      .bento-item-3 .polaroid-card {
        transform: rotate(-1deg);
      }

      .bento-item-4 .polaroid-card {
        transform: rotate(2deg);
      }

      .bento-item-5 .polaroid-card {
        transform: rotate(-1.5deg);
      }

      .bento-item-6 .polaroid-card {
        transform: rotate(1.5deg);
      }

      .polaroid-card:hover {
        transform: rotate(0deg) translateY(-0.5rem);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      }

      .polaroid-image {
        width: 100%;
        height: 15rem;
        background-size: cover;
        background-position: center;
      }

      .bento-item-1 .polaroid-image {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .bento-item-2 .polaroid-image {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }

      .bento-item-3 .polaroid-image {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }

      .bento-item-4 .polaroid-image {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }

      .bento-item-5 .polaroid-image {
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }

      .bento-item-6 .polaroid-image {
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }

      .polaroid-caption {
        margin: 1rem 0 0 0;
        text-align: center;
        font-family: 'Comic Sans MS', cursive, sans-serif;
        color: #334155;
        font-size: 1rem;
      }

      @media (max-width: 768px) {
        #gallery-polaroid {
          grid-template-columns: repeat(1, 1fr);
        }

        .bento-item {
          grid-column: span 1;
        }

        .polaroid-card {
          transform: rotate(0deg) !important;
        }
      }
        `,
    tailwind: `
    <div
      class="w-full grid grid-cols-1 md:grid-cols-12 auto-rows-[auto] md:auto-rows-[minmax(22rem,auto)] gap-5 p-4"
    >
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 -rotate-2">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700"><img src="images/aesthetic1.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">Summer Memories</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 rotate-1">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-pink-400 to-red-500"><img src="images/aesthetic2.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">City Lights</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 -rotate-1">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-cyan-400 to-cyan-600"><img src="images/aesthetic3.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">Mountain View</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 rotate-2">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-green-400 to-teal-400"><img src="images/aesthetic4.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">Beach Day</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 -rotate-1.5">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-pink-500 to-yellow-400"><img src="images/aesthetic5.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">Forest Trail</p>
        </div>
      </div>
      <div class="col-span-12 md:col-span-4">
        <div class="bg-white p-4 pb-12 rounded shadow-lg hover:rotate-0 hover:-translate-y-2 transition-all duration-300 rotate-1.5">
          <div class="w-full h-60 overflow-hidden bg-gradient-to-br from-cyan-400 to-indigo-900"><img src="images/aesthetic6.jpg" class="h-full w-full object-cover" /></div>
          <p class="mt-4 text-center text-slate-700 font-comic">Sunset Vibes</p>
        </div>
      </div>
    </div>
        `,
  },
};
