"use client";
import React from "react";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="py-[50px] px-[30px] md:px-[40px] lg:px-[60px] bg-[#e88b71] text-white">
      <Image
        src="/assets/logos/Logo.svg"
        className="ml-[-23px]"
        height={100}
        width={100}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[20px] lg:gap-[0px]">
        <div className="flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[22px] ">Product</h1>
          </div>
          <div className="flex flex-col gap-[8px]">
            <li className="cursor-pointer text-[14px]">Landing Page</li>
            <li className="cursor-pointer text-[14px]">Popup Builder</li>
            <li className="cursor-pointer text-[14px]">Web-design</li>
            <li className="cursor-pointer text-[14px]">Content</li>
            <li className="cursor-pointer text-[14px]">Integrations</li>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[22px]">Use Cases</h1>
          </div>
          <div className="flex flex-col gap-[8px]">
            <li className="cursor-pointer  text-[14px]">Web-designers</li>
            <li className="cursor-pointer text-[14px]">Marketers</li>
            <li className="cursor-pointer text-[14px]">Small Business</li>
            <li className="cursor-pointer text-[14px]">Website Builder</li>
          </div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[22px]">Resources</h1>
          </div>
          <div className="flex flex-col gap-[8px]">
            <li className="cursor-pointer text-[14px]">Academy</li>
            <li className="cursor-pointer text-[14px]">Blog</li>
            <li className="cursor-pointer text-[14px]">Themes</li>
            <li className="cursor-pointer text-[14px]">Hosting</li>
            <li className="cursor-pointer text-[14px]">Developers</li>
            <li className="cursor-pointer text-[14px]">Support</li>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[22px]">Let's do it!</h1>
          <div className="flex flex-row gap-[12px]">
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
              onClick={() =>
                openInNewTab("https://github.com/Sardar-Ali-Murad")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
