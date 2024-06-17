import Image from "next/image";
import React from "react";

export default function GruopImagen({ list }: { list: string[] }) {
  return (
    <div className='flex gap-4 flex-col lg:flex-row-reverse relative'>
      <Image
        src={list[0]}
        alt={list[0]}
        fill
        sizes="(100vw, 100vh)"
        priority
        className='object-contain !static !w-[85%] !h-auto rounded-lg border border-gray-400 m-auto'
      />
      <div className='flex gap-3 md:w-[15%] items-start relative'>
        {list.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={item}
            fill
            sizes="(100vw, 100vh)"
            priority={index === 0}
            {...(index !== 0 ? { loading: "lazy" } : {})}
            className='object-contain !static !w-[60px] !h-auto lg:!w-[150px]  rounded-lg border border-gray-400'
          />
        ))}
      </div>
    </div>
  );
}
