"use client";
import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-row justify-center md:justify-between lg:justify-between  py-[20px] px-[10px]  items-center bg-[#e88b71] text-white">
      <div>
        <Link href="/">
          <Image
            src="/assets/logos/Logo.svg"
            className="hidden md:block lg:block"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div className="flex flex-row items-center gap-[20px]">
        <Link href="/">
          <li className="cursor-pointer">Google Translator</li>
        </Link>
        <Link href="/google-search">
          <li className="cursor-pointer">Google Search</li>
        </Link>
        <FiFacebook
          className="text-[18px] cursor-pointer"
          onClick={() =>
            openInNewTab("https://www.facebook.com/sardar.ali.muradd")
          }
        />
        <FiLinkedin
          className="text-[18px] cursor-pointer"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/Sardar-Ali-Murad")
          }
        />
        <FiGithub
          className="text-[18px] cursor-pointer"
          onClick={() => openInNewTab("https://github.com/Sardar-Ali-Murad")}
        />
      </div>
    </div>
  );
};

export default Navbar;
