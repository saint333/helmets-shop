import Image from "next/image";
import React from "react";

const highlightsData = [
  {
    imgSrc:
      "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/helmet_who_small_df808830-5195-4ec0-8b15-30ce5229e059_60x55-2M7XWP2M.webp",
    title: "Official Speedglas Distributor",
    subtitle: "Proudly Australian Owned",
  },
  {
    imgSrc:
      "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/delivery_who_60x55-EPX4GBIO.webp",
    title: "Free Delivery Anywhere in Aus",
    subtitle: "For All Orders Over $200",
  },
  {
    imgSrc:
      "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/pricegst_who_60x55-WH3D2WTA.webp",
    title: "All Our Prices Include GST",
    subtitle: "No Hidden Costs",
  },
  {
    imgSrc:
      "https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/call_who_60x55-MPTPDYQF.webp",
    title: "Speedglas & Adflo Experts",
    subtitle: "Ready For Your Call",
  },
];

const Highlights = () => {
  return (
    <div className='bg-red-shop py-4 px-4 md:px-10 mt-1'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:container m-auto'>
        {highlightsData.map((item, index) => (
          <div
            key={index}
            className='flex gap-4 items-center flex-col md:flex-row'
          >
            <Image
              className='object-contain !static !h-[50px] !w-auto'
              src={item.imgSrc}
              alt={item.title}
              fill
              priority
            />
            <div className='text-white text-xs text-center md:text-sm'>
              <h3 className='font-semibold'>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
