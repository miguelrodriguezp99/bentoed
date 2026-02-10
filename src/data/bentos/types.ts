export type BentoCategory =
  | 'portfolio'
  | 'blog'
  | 'gallery';

export interface BentoMeta {
  id: string;
  name: string;
  category: BentoCategory;
  columns: number;
  itemCount: number;
  description: string;
  tags: string[];
  createdAt: string;
}

export interface BentoCode {
  html: string;
  css: string;
  tailwind: string;
}

export interface BentoEntry {
  meta: BentoMeta;
  code: BentoCode;
}
