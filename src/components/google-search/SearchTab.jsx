import React from "react";

const SearchTab = ({ data }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-col gap-[30px]">
      {data?.organic_results?.map((item) => {
        return (
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col md:flex-row lg:flex-row gap-[8px] ">
              <a className="text-[15px] text-gray-600">{item?.link}</a>
              <a className="text-[13px] text-gray-400 mt-[3px]">
                {item?.displayed_link}
              </a>
            </div>
            <h1
              className="text-[18px] text-blue-600 hover:text-blue-800 hover:underline cursor-pointer "
              onClick={() => openInNewTab(item?.link)}
            >
              {item?.title}
            </h1>
            <p>{item?.snippet}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchTab;
