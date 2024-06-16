import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <div className='w-full flex shadow-md'>
      <input
        type='text'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg rounded-e-none focus:rounded-e-none'
        placeholder='Search by part number or product name'
      />
      <button className='bg-red-shop p-2 rounded-lg text-white rounded-s-none' title="Search">
        <IoSearch size={"1.5rem"} />
      </button>
    </div>
  );
}
