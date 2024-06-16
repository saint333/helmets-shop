interface commonProperties {
  title: string;
  image: string;
}

export type CardBaseType = commonProperties & {
  postion: "left" | "right";
  children: React.ReactNode;
};

export type Product = commonProperties & {
  link: string;
  oldprice: string;
  price: string;
  save: string;
  code: string;
  category: string;
}

export type ProductType = commonProperties & {
  postion: "left" | "right";
  products: Product[];
};

export type ProductGrid = {
  title?: string;
  image: string;
  link?: string;
};

export type ProductGridType = {
  title: string;
  product: ProductGrid[];
  children?: React.ReactNode;
};

export type CardBlog = commonProperties & {
  link: string;
  date: string;
  description: string;
};

export type CardBlogType = {
  title: string;
  product: CardBlog[];
  children?: React.ReactNode;
};