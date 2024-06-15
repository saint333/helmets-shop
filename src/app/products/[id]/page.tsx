import Description from "@/components/selfrom/description/Description";
import GruopImagen from "@/components/selfrom/gruopImagen/GruopImagen";
import { productDetail } from "@/mocks/selfrom";
import CommentItem from "@/ui/comments/CommentItem";
import Raiting from "@/ui/raiting/Raiting";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR",
  description:
    "The Speedglas G5-01 VC Heavy Duty Flip Up Welding Helmet with Adflo PAPR is the highly anticipated and newest welding helmet with PAPR from the team that invented the auto darkening welding helmet.",
};

export default function Product({ params }: { params: { id: string } }) {
  console.log("🚀 ~ Product ~ id:", params.id);
  return (
    <div className='w-full p-4 container m-auto'>
      <ul className='flex gap-3 items-center flex-wrap'>
        <li className='text-red-shop'>Home</li>
        <li>&gt;</li>
        <li className='text-gray-500'>
          3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR
        </li>
      </ul>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-3 items-start'>
        <GruopImagen
          list={[
            "https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp",
          ]}
        />
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
