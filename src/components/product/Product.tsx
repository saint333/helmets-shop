import { CardBaseType } from "@/types/product";
import Image from "next/image";

export const CardProductBase = ({
  image,
  title,
  postion,
  children,
}: CardBaseType) => {
  return (
    <div className='w-[90%] md:container mx-auto mt-5'>
      <h2 className='text-center text-2xl md:text-3xl font-semibold mb-5'>
        {title}
      </h2>
      <div className='overflow-x-scroll scroll-container'>
        <div className='grid grid-cols-5 gap-3 justify-center w-max scroll-content m-auto relative'>
          {postion === "left" && (
            <>
              <Image
                src={image}
                alt={title}
                fill
                sizes="(100vw, 100vh)"
                priority
                className='object-contain !static !w-[280px] !h-[535px] rounded-lg'
              />
              {children}
            </>
          )}
          {postion === "right" && (
            <>
              {children}
              <Image
                src={image}
                alt={title}
                fill
                sizes="(100vw, 100vh)"
                priority
                className='object-contain !static !w-[280px] !h-[535px] rounded-lg'
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardProductGrid = (item: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className='w-[90%] md:container mx-auto mt-5'>
      <h2 className='text-center text-2xl md:text-3xl font-semibold mb-5'>
        {item.title}
      </h2>
      <div className='flex gap-3 justify-center'>{item.children}</div>
    </div>
  );
};

export const BlogList = (item: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className='w-[90%] md:container mx-auto mt-5'>
      <h2 className='text-center text-2xl md:text-3xl font-semibold mb-5'>
        {item.title}
      </h2>
      <div className='flex gap-3 justify-center flex-wrap'>{item.children}</div>
    </div>
  );
};
