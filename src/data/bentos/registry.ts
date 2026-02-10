import type { BentoEntry, BentoCategory } from './types';

// Blog
import { blogMagazine } from './blog-magazine';
import { blogPhotoJournal } from './blog-photo-journal';

// Gallery
import { galleryAsymmetric } from './gallery-asymmetric';
import { galleryCenterTall } from './gallery-center-tall';
import { galleryCross } from './gallery-cross';
import { galleryDiamond } from './gallery-diamond';
import { galleryFeaturedRow } from './gallery-featured-row';
import { galleryFilmStrip } from './gallery-film-strip';
import { galleryFullWidth } from './gallery-full-width';
import { galleryGrid3Col } from './gallery-grid-3-col';
import { galleryGrid4Col } from './gallery-grid-4-col';
import { galleryGrid8Item } from './gallery-grid-8-item';
import { galleryGridMixed } from './gallery-grid-mixed';
import { galleryHeroGrid } from './gallery-hero-grid';
import { galleryMasonry } from './gallery-masonry';
import { galleryMosaic9 } from './gallery-mosaic-9';
import { galleryPanoramic } from './gallery-panoramic';
import { galleryPolaroid } from './gallery-polaroid';
import { gallerySidebar } from './gallery-sidebar';
import { gallerySplit } from './gallery-split';
import { gallerySpotlight } from './gallery-spotlight';
import { galleryStaircase } from './gallery-staircase';
import { galleryTiles } from './gallery-tiles';
import { galleryWaterfall } from './gallery-waterfall';
import { galleryWindow } from './gallery-window';
import { galleryZigzag } from './gallery-zigzag';

// Portfolio
import { portfolioGrid } from './portfolio-grid';
import { portfolioImageGrid } from './portfolio-image-grid';

// Gallery first (original bentos with images), then rest alphabetically by name
const galleryBentos: BentoEntry[] = [
  galleryGrid4Col,
  galleryGrid8Item,
  galleryMosaic9,
  galleryCenterTall,
  galleryAsymmetric,
  galleryFullWidth,
  galleryMasonry,
  galleryPolaroid,
  galleryCross,
  galleryDiamond,
  galleryFeaturedRow,
  galleryFilmStrip,
  galleryGrid3Col,
  galleryGridMixed,
  galleryHeroGrid,
  galleryPanoramic,
  gallerySidebar,
  gallerySplit,
  gallerySpotlight,
  galleryStaircase,
  galleryTiles,
  galleryWaterfall,
  galleryWindow,
  galleryZigzag,
];

const otherBentos: BentoEntry[] = [
  blogMagazine,
  blogPhotoJournal,
  portfolioGrid,
  portfolioImageGrid,
].sort((a, b) => a.meta.name.localeCompare(b.meta.name));

export const allBentos: BentoEntry[] = [...galleryBentos, ...otherBentos];

export const categories: BentoCategory[] = [...new Set(allBentos.map(b => b.meta.category))].sort();

export function getBentosByCategory(category: BentoCategory): BentoEntry[] {
  return allBentos.filter(b => b.meta.category === category);
}

export function getBentoById(id: string): BentoEntry | undefined {
  return allBentos.find(b => b.meta.id === id);
}
