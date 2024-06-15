import Image from "next/image";
import React from "react";

export default function GruopImagen({ list }: { list: string[] }) {
  return (
    <div className='flex gap-4 flex-col lg:flex-row-reverse'>
      <Image
        src={list[0]}
        alt={list[0]}
        fill
        className='object-contain !static !w-[85%] !h-auto rounded-lg border border-gray-400 m-auto'
      />
      <div className='flex gap-3 md:w-[15%] items-start'>
        {list.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={item}
            fill
            className='object-contain !static !w-[60px] !h-auto lg:!w-[150px]  rounded-lg border border-gray-400'
          />
        ))}
      </div>
    </div>
  );
}