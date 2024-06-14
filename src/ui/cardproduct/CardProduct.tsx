import { Product, ProductGrid } from "@/mocks/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function CardProduct(item: Product) {
  return (
    <div className='group border border-gray-300 rounded-lg relative w-[280px] h-[535px] pb-3'>
      <span className='bg-red-shop p-2 rounded-lg text-white text-sm absolute top-2 right-2'>
        Save {item.save}
      </span>
      <Link href={item.link}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className='object-cover !static !w-[250px] !h-[250px] rounded-lg m-auto'
        />
      </Link>
      <div className='p-4'>
        <h3
          className='text-lg font-semibold bg-opacity-10'
          style={{ lineHeight: 1.3 }}
        >
          {item.title}
        </h3>
        <small className='text-gray-400'>{item.category}</small>
        <p className='text-sm text-red-shop'>Part Number: {item.code}</p>
        <p className='text-lg font-semibold'>
          <span className='text-red-shop'>{item.price}</span> (Inc. GST)
        </p>
        <p className='text-base'>
          WAS: <span className='line-through'>{item.oldprice}</span>
        </p>
      </div>
      <button className='bg-red-shop py-3 px-5 rounded-lg text-white invisible group-hover:visible flex gap-3 m-auto'>
        <FiShoppingCart size={"1.25rem"} /> Add to bag
      </button>
    </div>
  );
}

export const CardGrid = (item: ProductGrid) => {
  return (
    <div className='flex flex-col gap-3'>
      <Image
        src={item.image}
        fill
        priority
        alt={item.image}
        className='object-cover !static !w-full !h-full rounded-lg m-auto'
      />
      {item.link && (
        <Link href={item.link} className='text-red-shop text-center'>
          i{item.text}
        </Link>
      )}
    </div>
  );
};
