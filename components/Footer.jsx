import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-50 w-full mt-8 py-3 font-bold items-center justify-between text-sm">
      <div className="pl-2">&copy;2023 Kanairo Post</div>
      <div>PHONE: +254 736-808-825</div>
      <div>EMAIL: kanairopost@gmail.com</div>
      <div className="flex items-center pr-3 gap-5">
        <Link href="#">
          <Image
            src="/facebook.png"
            alt="facebook link"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </Link>
        <Link href="#">
          <Image
            src="/2.png"
            alt="instagram link"
            width={20}
            height={20}
            className="cursor-pointer opacity-60"
          />
        </Link>
        <Link href="#">
          <Image
            src="/x.png"
            alt="twitter link"
            width={20}
            height={20}
            className="cursor-pointer opacity-60"
          />
        </Link>
        <Link href="#">
          <Image
            src="/4.png"
            alt="youtube link"
            width={20}
            height={20}
            className="cursor-pointer opacity-60"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

