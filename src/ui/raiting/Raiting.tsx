import { raiting } from '@/mocks/selfrom'
import Image from 'next/image'
import React from 'react'

export default function Raiting({item}:{item: raiting}) {
  return (
    <div className='flex gap-3 items-center'>
      <div className='flex gap-[2px]'>
        {[...Array(item.stars)].map((_, index) => {
          return item.size === 'small' ? (
            <Image key={index} src="/start.svg" alt={"start" + index} width={20} height={20} />
          ) : (
            <Image key={index} src="/startLarge.svg" alt={"start" + index} width={30} height={30} />
          )
        })}
      </div>
      {item.count && <p className={item.size === 'small' ? 'text-sm' : 'text-base'}>({item.count})</p>}
      {item.text && <p>{item.text}</p>}
    </div>
  )
}
