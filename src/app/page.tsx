import Highlights from "@/components/info/Info";
import {
  BlogList,
  CardProductBase,
  CardProductGrid,
} from "@/components/product/Product";
import { images } from "@/mocks/carrusel";
import { blog, productGrid, products } from "@/mocks/products";
import CardProduct, { BlogCard, CardGrid } from "@/ui/cardproduct/CardProduct";
import Carousel from "@/ui/carrusel/Carrusel";

export default function Home() {
  return (
    <main className=''>
      <div className='flex flex-col-reverse lg:flex-col'>
        <Highlights />
        <Carousel images={images} />
      </div>
      {products.map((product) => (
        <CardProductBase
          key={product.title}
          image={product.image}
          title={product.title}
          postion={product.postion}
        >
          {product.products.map((product) => (
            <CardProduct
              category={product.category}
              code={product.code}
              image={product.image}
              link={product.link}
              oldprice={product.oldprice}
              price={product.price}
              save={product.save}
              title={product.title}
              key={product.title}
            />
          ))}
        </CardProductBase>
      ))}
      {productGrid.map((product) => (
        <CardProductGrid key={product.title} title={product.title}>
          {product.product.map((product) => (
            <CardGrid
              image={product.image}
              link={product.link}
              title={product.title}
              key={product.title}
            />
          ))}
        </CardProductGrid>
      ))}
      {blog.map((blog) => (
        <BlogList key={blog.title} title={blog.title}>
          {blog.product.map((product) => (
            <BlogCard key={product.title} {...product} />
          ))}
        </BlogList>
      ))}
    </main>
  );
}
