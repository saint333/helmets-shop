import { Selfrom } from "@/mocks/selfrom";
import Raiting from "@/ui/raiting/Raiting";
import Image from "next/image";
import React from "react";

export default function Description({ product }: { product: Selfrom }) {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-semibold'>{product.title}</h1>
      <p className='text-gray-500 text-base'>{product.category}</p>
      <div className='flex justify-between items-center'>
        <p className='text-base font-semibold'>Part Number: {product.id}</p>
        <p className='py-2 px-3 border border-[#419839] rounded-lg text-[#419839] text-nowrap'>
          {product.stock} Remaining in Stock
        </p>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-3'>
        <div className='flex flex-col gap-3'>
          <p className='text-4xl font-semibold text-[#419839]'>
            {product.price}{" "}
            <span className='text-gray-500 text-base'>(Inc. GST)</span>
          </p>
          <p className='text-gray-500 text-lg flex items-center'>
            WAS: <span className='line-through'>{product.oldPrice}</span>{" "}
            <span className='ml-2 py-2 px-3 bg-[#1b1b1b] text-white text-xl rounded-lg'>
              Save {product.save}
            </span>
          </p>
        </div>
        <Image
          src='/promo.svg'
          alt='promo'
          fill
          priority
          className='object-contain !static !h-auto !w-full'
        />
      </div>
      <Raiting item={product.raiting} />
      <div dangerouslySetInnerHTML={{ __html: product.description1 }}></div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='grid grid-cols-3'>
          <button className='text-2xl py-2 px-4 border border-gray-400 rounded-lg rounded-e-none border-e-0'>
            -
          </button>
          <input
            type='text'
            inputMode='numeric'
            defaultValue={1}
            className='py-2 px-4 text-center border border-gray-400 focus:outline-none'
          />
          <button className='text-2xl py-2 px-4 border border-gray-400 rounded-lg rounded-s-none border-s-0 text-center'>
            +
          </button>
        </div>
        <button className='bg-red-shop text-white py-2 px-4 rounded-lg'>
          Add to cart
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: product.description2 }}></div>
    </div>
  );
}
