import React from "react";

const Tabs = ({ tab, setTab }) => {
  return (
    <div>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2 cursor-pointer" onClick={() => setTab("Search")}>
            <a
              className={`inline-block p-4 ${
                tab === "Search" &&
                "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
              } rounded-t-lg active `}
              aria-current="page"
            >
              Search
            </a>
          </li>
          <li class="mr-2 cursor-pointer" onClick={() => setTab("Images")}>
            <a
              className={`inline-block p-4 ${
                tab === "Images" &&
                "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
              } rounded-t-lg active `}
              aria-current="page"
            >
              Images
            </a>
          </li>
          <li class="mr-2 cursor-pointer" onClick={() => setTab("Videos")}>
            <a
              className={`inline-block p-4 ${
                tab === "Videos" &&
                "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
              } rounded-t-lg active `}
              aria-current="page"
            >
              Videos
            </a>
          </li>
          <li class="mr-2 cursor-pointer" onClick={() => setTab("News")}>
            <a
              className={`inline-block p-4 ${
                tab === "News" &&
                "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
              } rounded-t-lg active `}
              aria-current="page"
            >
              News
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
