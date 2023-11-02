"use client";
import React from "react";
import SearchInput from "@/components/google-search/SearchInput";
import SearchTabs from "@/components/google-search/Tabs";
import Tabs from "@/components/google-search/Tabs";
import SearchTab from "@/components/google-search/SearchTab";
import ImageTab from "@/components/google-search/ImageTab";
import VideosTab from "@/components/google-search/VideosTab";
import NewsTab from "@/components/google-search/NewsTab";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";

const GoogleSearch = () => {
  let [searchValue, setSearchValue] = React.useState("Football");
  let [tab, setTab] = React.useState("Search");
  const [currentPage, setCurrentPage] = React.useState(0);
  let [loading, setLoading] = React.useState(false);
  let [data, setData] = React.useState([]);


  const googleCall = async () => {
    setLoading(true);
    let url;
    if (tab === "Search") {
      url = "https://google-search-2.p.rapidapi.com/organicResults";
    }
    if (tab === "Images") {
      url = "https://google-search-2.p.rapidapi.com/images";
    }
    if (tab === "Videos") {
      url = "https://google-search-2.p.rapidapi.com/videos";
    }
    if (tab === "News") {
      url = "https://google-search-2.p.rapidapi.com/news";
    }
    const options = {
      method: "GET",
      url: url,
      params: {
        query: searchValue,
        num: "10",
        gl: "us",
        hl: "en_us",
        page: "0",
        device: "desktop",
      },
      headers: {
        'X-RapidAPI-Key': 'de47ac1912mshde13f25f720f215p186f6cjsn0a1dc5096334',
        'X-RapidAPI-Host': 'google-search-2.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    googleCall();
  };

  React.useEffect(() => {
    googleCall();
  }, [tab, currentPage]);


  return (
    <div className="py-[50px] px-[30px] md:px-[40px] lg:px-[60px] flex flex-col gap-[40px]">
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      <Tabs tab={tab} setTab={setTab} />
      {loading && <Skeleton />}

      {tab === "Search" && !loading && <SearchTab data={data} />}
      {tab === "Images" && !loading && <ImageTab data={data} />}
      {tab === "Videos" && !loading && <VideosTab data={data} />}
      {tab === "News" && !loading && <NewsTab data={data} />}
      <ResponsivePagination
        current={currentPage}
        total={Object?.keys(data?.pagination?.page_no || 0)?.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default GoogleSearch;
