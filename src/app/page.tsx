import Highlights from "@/components/info/Info";
import { CardProductBase, CardProductGrid } from "@/components/product/Product";
import { images } from "@/mocks/carrusel";
import { ProductType, productGrid, products } from "@/mocks/products";
import CardProduct, { CardGrid } from "@/ui/cardproduct/CardProduct";
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
              text={product.text}
              key={product.text}
            />
          ))}
        </CardProductGrid>
      ))}
    </main>
  );
}
