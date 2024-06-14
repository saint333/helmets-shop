import { type MenuItem } from "@/mocks/menu";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ItemMenu({ item }: { item: MenuItem }) {
  return (
    <li className='group flex flex-col relative'>
      <a
        href={item.href}
        className='flex items-center group-hover:border-b-slate-500 group-hover:border-b-2 transition-all duration-300 ease-linear py-2 px-4'
      >
        <strong>{item.name}</strong> {item.subMenu && <IoIosArrowDown />}
      </a>
      {item.subMenu && (
        <ul className='hidden group-hover:block transition-all duration-300 ease-linear bg-white mt-1 p-3 border border-gray-300 rounded-lg absolute top-10'>
          {item.subMenu.map((subItem) => (
            <li key={subItem.name}>
              <a href={subItem.href}>{subItem.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
