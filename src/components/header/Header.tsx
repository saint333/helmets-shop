import Search from "@/ui/search/Search";
import Image from "next/image";
import {
  IoCart,
  IoChatbubblesOutline,
  IoMenu,
} from "react-icons/io5";
import Navbar from "../navbar/Navbar";

export default function Header() {
  return (
    <header className='pt-4 px-4 pb-2 md:pt-6 md:px-12 flex flex-col gap-4'>
      <section className='flex gap-4 justify-between items-center static md:gap-[7%] flex-wrap'>
        <IoMenu size={"2rem"} className='cursor-pointer lg:hidden' />
        <Image
          src='https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/logo_weldinghelmetsonline-C2VEEW2E.webp'
          alt='logo'
          fill
          className='cursor-pointer object-contain !static !h-10 !w-auto md:!h-16'
          priority
        />
        <div className='flex gap-4 flex-col lg:flex-row order-1 lg:order-none lg:flex-1 lg:gap-[7%] w-full'>
          <Search />
          <small className='flex w-full lg:w-auto items-center gap-1 text-xs justify-center order-2 md:order-none md:text-sm'>
            <IoChatbubblesOutline className='text-lg md:text-2xl' />
            <span className='flex lg:flex-col gap-1'>
              <b>Speak to an Expert </b>
              1800 HELMET (1800 435 638)
            </span>
          </small>
        </div>
        <div className='relative cursor-pointer'>
          <IoCart size={"2rem"} />
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
            0
          </span>
        </div>
      </section>
      <Navbar />
    </header>
  );
}
