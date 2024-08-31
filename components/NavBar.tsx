import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between p-1 bg-slate-100 shadow-md border-b-2">
        <Link href="/" className="flex justify-center items-center">
          <span className="text-2xl font-bold p-2">QuikCarz </span>
          <Image
            src="/logo2.png"
            alt="logo"
            width={80}
            height={60}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-5 ">
          <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Home
          </h2>
          <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            Contuct us
          </h2>
          <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
            About us
          </h2>
        </div>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="rounded-full m-2 "
        />
      </nav>
    </header>
  );
};

export default Navbar;
