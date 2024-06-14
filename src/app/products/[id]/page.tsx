import Description from '@/components/selfrom/description/Description'
import GruopImagen from '@/components/selfrom/gruopImagen/GruopImagen'
import { productDetail } from '@/mocks/selfrom'
import React from 'react'

export default function Product({params}:{params:{id:string}}) {
  console.log("🚀 ~ Product ~ id:", params.id)
  return (
    <div className='w-full p-4 container m-auto'>
      <ul className='flex gap-3 items-center flex-wrap'>
        <li className='text-red-shop'>Home</li>
        <li>&gt;</li>
        <li className='text-gray-500'>3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR</li>
      </ul>
      <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 mt-3 items-start'>
        <GruopImagen list={["https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp"]}/>
        <Description product={productDetail}/>
      <div dangerouslySetInnerHTML={{__html: productDetail.description3}}></div>
      </div>
    </div>
  )
}
