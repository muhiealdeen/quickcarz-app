import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex justify-center items-center">
            <span className="text-2xl font-bold p-2">QuikCarz </span>
            <Image
              src="/logo2.png"
              alt="logo"
              width={60}
              height={30}
              className="object-contain rounded-3xl "
            />
          </div>
        </div>
        {/* <span className="text-muted">Place sticky footer content here.</span> */}
      </div>
    </footer>
  );
};

export default Footer;
