import React from "react";
import Image from "next/image";
import youtubeThumbnail from "youtube-thumbnail";
import { FiPlay } from "react-icons/fi";

const VideosTab = ({ data }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
      {data?.video_results?.map((item) => {
        return (
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-row gap-[8px] items-center">
              <a className="text-[13px] text-gray-400">
                {item?.displayed_link}
              </a>
            </div>
            <h1
              className="text-[18px] text-blue-600 hover:text-blue-800 hover:underline cursor-pointer "
              onClick={() => openInNewTab(item?.link)}
            >
              {item?.title}
            </h1>
            <div
              className="w-[100%] h-[80%] relative group cursor-pointer"
              onClick={() => openInNewTab(item?.link)}
            >
              <div className="absolute h-[80%] w-[100%] hidden group-hover:block bg-gray-200  opacity-[.4]">
                <div className="absolute h-[80%] w-[100%] flex flex-row justify-center items-center">
                  <FiPlay className="text-gray-900 text-[30px]" />
                </div>
              </div>
              <Image
                src={youtubeThumbnail(item?.link)?.high?.url}
                height={100}
                width={100}
                className="w-[100%] h-[80%] rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideosTab;
