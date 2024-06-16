import Description from "@/components/selfrom/description/Description";
import GruopImagen from "@/components/selfrom/gruopImagen/GruopImagen";
import { productDetail } from "@/mocks/selfrom";
import CommentItem from "@/ui/comments/CommentItem";
import Raiting from "@/ui/raiting/Raiting";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

type PropsMetadata = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: PropsMetadata,
  parent: ResolvingMetadata
): Promise<Metadata> {
  console.log("🚀 ~ generateMetadata ~ params:", params.id);
  return {
    title: productDetail.title,
    description: productDetail.description1,
  };
}

export default function Product({ params }: Props) {
  console.log("🚀 ~ Product ~ id:", params.id);
  return (
    <div className='w-full p-4 container m-auto'>
      <ul className='flex gap-3 items-center flex-wrap'>
        <li className='text-red-shop'>Home</li>
        <li>&gt;</li>
        <li className='text-gray-500'>{productDetail.title}</li>
      </ul>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-3 items-start'>
        <GruopImagen list={productDetail.images} />
        <Description product={productDetail} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: productDetail.description3 }}
        className='mb-4'
      ></div>
      <Raiting item={{ ...productDetail.raiting, text: "Reviews" }} />
      <div className='overflow-x-auto mt-5'>
        <div className='flex gap-3 w-max'>
          {productDetail.comments.map((item, index) => (
            <CommentItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
