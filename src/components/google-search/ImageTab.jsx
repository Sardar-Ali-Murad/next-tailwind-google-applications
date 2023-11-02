import React from "react";
import Image from "next/image";

const ImageTab = ({ data }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
      {data?.image_results?.map((item) => {
        return (
          <div className="flex flex-col gap-[8px]">
            <div className="rounded-lg w-[100%] h-[80%]">
              <Image
                src={item?.image}
                className="rounded-lg w-[100%] h-[80%]"
                height={100}
                width={100}
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p
                onClick={() => openInNewTab(item?.link)}
                className="text-[12px] text-gray-600 hover:text-gray-700 hover:underline cursor-pointer"
              >
                {item?.source}
              </p>
              <h1 className="text-[18px] text-gray-900">{item?.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageTab;
