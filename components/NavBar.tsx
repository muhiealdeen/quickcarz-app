// components/Navbar.tsx

'use client';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';
import useScreenSize from '@/app/hooks/useScreenSize';

const Navbar = () => {
  const isSmallScreen = useScreenSize();
  console.log('useScreenSize????:', useScreenSize);

  if (isSmallScreen) {
    return (
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between p-1 bg-slate-100 shadow-md border-b-2">
          {/* Logo and Sign In Button */}
          <div className="flex justify-between items-center w-full md:w-auto px-7">
            <Link href="/" className="flex justify-center items-center">
              <span className="text-2xl font-bold p-2">QuikCarz </span>
              <Image
                src="/logo2.png"
                alt="logo"
                width={60}
                height={30}
                className="object-contain rounded-3xl "
              />
            </Link>
            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="rounded-full md:ml-5"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-row justify-between items-center gap-3 mt-2 px-7 md:mt-0">
            <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
              Home
            </h2>
            <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
              Contact Us
            </h2>
            <h2 className="hover:bg-gray-400 px-3 cursor-pointer p-2 rounded-full hover:text-white">
              About Us
            </h2>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between p-1 bg-slate-100 shadow-md border-b-2">
          <Link href="/" className="flex justify-center items-center">
            <span className="text-2xl font-bold p-2">QuikCarz </span>
            <Image
              src="/logo2.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain rounded-3xl"
            />
          </Link>
          <div className="flex items-center gap-5">
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
  }
};

export default Navbar;
