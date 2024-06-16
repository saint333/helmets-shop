export type raiting = {
  stars: number;
  check: number;
  count?: number;
  text?: string;
  size?: "small" | "large";
};

export type comments = {
  image: string;
  title: string;
  date: string;
  comment: string;
  rating: raiting;
};
export type Selfrom = {
  title: string;
  images: string[];
  category: string;
  id: string;
  price: string;
  oldPrice: string;
  save: string;
  raiting: raiting;
  description1: string;
  description2: string;
  description3: string;
  comments: comments[];
  stock: number;
};