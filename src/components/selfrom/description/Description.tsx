import { Selfrom } from '@/mocks/selfrom'
import Image from 'next/image'
import React from 'react'

export default function Description({product}: {product: Selfrom}) {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-semibold'>{product.title}</h1>
      <p className='text-gray-500 text-base'>{product.category}</p>
      <div className='flex justify-between items-center'>
        <p className='text-base font-semibold'>Part Number: {product.id}</p>
        <p className='py-2 px-3 border border-[#419839] rounded-lg text-[#419839]'>{product.stock} Remaining in Stock</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col gap-3'>
          <p className='text-4xl font-semibold text-[#419839]'>{product.price} <span className='text-gray-500 text-base'>(Inc. GST)</span></p>
          <p className='text-gray-500 text-lg'>WAS: <span className='line-through'>{product.oldPrice}</span> <span className='ml-2 py-2 px-3 bg-[#1b1b1b] text-white text-xl rounded-lg'>Save {product.save}</span></p>
        </div>
        <Image src="7promo.svg" alt="promo" width={100} height={100}/>
      </div>
      <div dangerouslySetInnerHTML={{__html: product.description1}}></div>
      <div className='flex gap-2'>
        <div className='flex'>
          <button>-</button>
          <input type="number" value={1}/>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
      <div dangerouslySetInnerHTML={{__html: product.description2}}></div>
    </div>
  )
}
