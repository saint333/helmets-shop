export type CardBaseType = {
  title: string;
  image: string;
  postion: 'left' | 'right';
  children: React.ReactNode
}

export interface Product {
  image: string;
  title: string;
  link: string;
  oldprice: string;
  price: string;
  save: string;
  code: string;
  category: string;
}

export type ProductType = {
  title: string;
  image: string;
  postion: 'left' | 'right';
  products: Product[]
}

export type ProductGrid = {
  text?: string;
  image: string;
  link?: string;
}

export type ProductGridType = {
  title: string;
  product: ProductGrid[];
  children?: React.ReactNode
}

export type CardBlog = {
  title: string;
  image: string;
  link: string;
  date: string;
  description: string;
}

export type CardBlogType = {
  title: string;
  product: CardBlog[];
  children?: React.ReactNode
}

export const products: ProductType[] = [
  {
    title: "WELDING HELMETS WITH A PAPR",
    image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/with-papr-WKGJDIWB.webp",
    postion: 'right',
    products: [
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
    ]
  },
  {
    title: "WELDING HELMETS WITH A PAPR",
    image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/with-papr-WKGJDIWB.webp",
    postion: 'right',
    products: [
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
    ]
  },
  {
    title: "WELDING HELMETS WITH A PAPR",
    image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/with-papr-WKGJDIWB.webp",
    postion: 'right',
    products: [
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
      {
        image: "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
        title: "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr",
        oldprice: "$2,858.90",
        price: "$2,479.00",
        save: "$379.90",
        code: "617830",
        category: "3M Speedglas"
      },
    ]
  }
]

export const productGrid: ProductGridType[] = [
  {
    title: "SHOP WELDING HELMETS BY MOST POPULAR WELDING HELMET BRANDS",
    product: [
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/3mspeedglas_collection_image-WFLJCTKL.avif",
        text: "Tecmen Welding Helmets",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr"
      },
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/3mspeedglas_collection_image-WFLJCTKL.avif",
        text: "Tecmen Welding Helmets",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr"
      },
    ]
  },
  {
    title: "OUR PARTNERS",
    product: [
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/weldinghelmetsonline-speedglas-UYQ76BIG.avif",
      },
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/weldinghelmetsonline-speedglas-UYQ76BIG.avif",
      }
    ]
  }
]

export const blog: CardBlogType[] = [
  {
    title: "OUR WELDING HELMET BLOG",
    product: [
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/blog1-V4RI6UVW.webp",
        date: "May 27, 2020",
        title: "3M Speedglas G5-01VC Welding Helmet Review",
        description: "By now, the Speedglas G5-01VC welding helmet has firmly planted itself as the best flip up welding helmet with PAPR respiratory in the world. You’ve either seen one of these somewhere or know someone who has one… either that or you...",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr"
      },
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/blog1-V4RI6UVW.webp",
        date: "May 27, 2020",
        title: "3M Speedglas G5-01VC Welding Helmet Review",
        description: "By now, the Speedglas G5-01VC welding helmet has firmly planted itself as the best flip up welding helmet with PAPR respiratory in the world. You’ve either seen one of these somewhere or know someone who has one… either that or you...",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr"
      },
      {
        image: "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/blog3-LFBSJUIM.jpg",
        date: "May 27, 2020",
        title: "3M Speedglas G5-01VC Welding Helmet Review",
        description: "By now, the Speedglas G5-01VC welding helmet has firmly planted itself as the best flip up welding helmet with PAPR respiratory in the world. You’ve either seen one of these somewhere or know someone who has one… either that or you...",
        link: "/products/3m-speedglas-heavy-duty-flip-up-welding-helmet-g5-01-with-adflo-papr"
      }
    ]
  }
]
