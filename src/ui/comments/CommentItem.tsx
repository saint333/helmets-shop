import { comments } from '@/mocks/selfrom'
import Image from 'next/image'
import React from 'react'
import Raiting from '../raiting/Raiting'

export default function CommentItem(item: comments) {
  return (
    <div className='border border-gray-300 rounded-lg relative w-[300px] pb-3'>
      <Image src={item.image} alt={item.title} fill priority className='object-contain !static !w-full !h-[200px] rounded-lg m-auto rounded-b-none' />
      <div className='p-4 flex flex-col gap-2'>
        <h4 className='flex gap-2 font-semibold'>{item.title} <Image src="/check.svg" alt="check" width={20} height={20}/></h4>
        <p className='text-gray-500 text-sm'>{item.date}</p>
        <Raiting item={{...item.rating, size: 'small'}}/>
        <p className='text-base'>{item.comment}</p>
      </div>
    </div>
  )
}
