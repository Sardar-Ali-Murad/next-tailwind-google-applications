import React from "react";

const NewsTab = ({ data }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col gap-[30px]">
      {data?.news_results?.map((item) => {
        return (
          <div className="flex flex-col gap-[12px]">
            <div className="flex  flex-col md:flex-row lg:flex-row gap-[8px] ">
              <h1
                className="text-[18px] text-blue-600 hover:text-blue-800 hover:underline cursor-pointer "
                onClick={() => openInNewTab(item?.link)}
              >
                {item?.title}
              </h1>
              <a className="text-[13px] text-gray-400 mt-[3px]">
                {item?.source}
              </a>
            </div>
            <p>{item?.snippet}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsTab;
