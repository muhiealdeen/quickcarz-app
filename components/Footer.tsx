import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className=" flex flex-col text-black-100 mt-5 border-t-2 bg-slate-100 shadow-md ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-row justify-between gap-1 text-2xl font-bold p-2">
            QuikCarz
            <Image
              src="/logo2.png"
              alt="logo"
              width={60}
              height={30}
              className="object-contain rounded-3xl "
            />
          </div>

          <p>
            QuikCarz 2024 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <div className="flex flex-col gap-5">
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="hover:text-gray-400 cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between item-center flex-wrap mt-10 border-t border-green-100 sm:px-16 px-6 py-10">
        <p>@2024 QuikCarz. All rights reserved</p>
        <div className="footer__copyrights-link ">
          <Link href="/" className="hover:text-gray-400 cursor-pointer">
            Privacy & Policy
          </Link>

          <Link href="/" className="hover:text-gray-400 cursor-pointer">
            Terms & Conditon
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
