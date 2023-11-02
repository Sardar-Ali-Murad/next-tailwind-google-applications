"use client";
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineDown } from "react-icons/ai";
import { useDetectClickOutside } from "react-detect-click-outside";
import { AiOutlineCopy } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  let [languages, setLanguages] = useState([]);
  let [showSource, setShowSource] = useState(false);
  let [showTarget, setShowTarget] = useState(false);
  let [sourceLanguage, setSourceLanguage] = useState("");
  let [targetLanguage, setTargetLanguage] = useState("");
  let [translatedText, setTranslatedText] = useState("");
  let [sourceText, setSourceText] = useState("");
  const sourceRef = useDetectClickOutside({ onTriggered: closeSourceDropdown });
  const targetRef = useDetectClickOutside({ onTriggered: closeTargetDropdown });
  let [searchInput, setSearchInput] = useState("");
  function closeSourceDropdown() {
    setShowSource(false);
  }
  function closeTargetDropdown() {
    setShowTarget(false);
  }

  React.useEffect(() => {
    const getLanguages = async () => {
      const options = {
        method: "GET",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
        headers: {
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': 'de47ac1912mshde13f25f720f215p186f6cjsn0a1dc5096334',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setLanguages(response.data?.data?.languages);
      } catch (error) {
        toast.error(error?.response?.data?.message)
      }
    };
    getLanguages();
  }, []);

  const handleConvert = async () => {
    if (sourceLanguage === "") {
      toast.error("Please provide the source language");
    }
    if (targetLanguage === "") {
      toast.error("Please provide the target language");
    }
    if (sourceText === "") {
      toast.error("Please provide the source Text");
    }
    if (sourceLanguage !== "" && targetLanguage !== "" && sourceText !== "") {
      const encodedParams = new URLSearchParams();
      encodedParams.set("source", sourceLanguage);
      encodedParams.set("target", targetLanguage);
      encodedParams.set("q", sourceText);

      const options = {
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': 'de47ac1912mshde13f25f720f215p186f6cjsn0a1dc5096334',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
      };
      try {
        const response = await axios.request(options);
        setTranslatedText(
          response?.data?.data?.translations[0]?.translatedText
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  function handleCopy() {
    if (translatedText !== "") {
      navigator.clipboard.writeText(translatedText);
      toast.success("Translated text is added to the clipboard");
    } else {
      toast.error("There is no translated text to copy");
    }
  }

  React.useEffect(() => {
    setSearchInput("");
  }, [showSource, showTarget]);

  return (
    <div className="py-[50px] px-[30px] md:px-[40px] lg:px-[60px]">
      <ToastContainer />
      <h1 className="text-center font-bold text-[22px] mb-[50px]">
        WELCOME TO THE GOOGLE TRANSLATER
      </h1>
      <div className="flex flex-col items-center gap-[40px] md:flex-row md:gap-[100px] lg:flex-row lg:gap-[100px]">
        <div className="relative flex-1 w-[100%]" ref={sourceRef}>
          <div
            onClick={() => {
              setShowSource((pre) => !pre);
              setShowTarget(false);
            }}
            className="block flex flex-row  items-center flex-1 justify-between  w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <p>{sourceLanguage ? sourceLanguage : "Source Language"}</p>
            <AiOutlineDown />
          </div>
          {showSource && (
            <div className="absolute top-[55px] border-2 border-gray-800 rounded-lg bg-gray-50 w-[100%]">
              <div>
                <input
                  placeholder="Search Here..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e?.target?.value)}
                />
              </div>
              {languages
                ?.filter((all) =>
                  all?.language.toLowerCase().includes(searchInput)
                )
                ?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-[20px] hover:bg-gray-100 transition-all duration-100 cursor-pointer "
                      onClick={() => {
                        setShowSource(false);
                        setSourceLanguage(item?.language);
                      }}
                    >
                      <p className="mt-[10px] px-[10px]">{item?.language}</p>
                      <div className="h-[1px] w-[100%] bg-gray-100"></div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <div className="relative flex-1 w-[100%]" ref={targetRef}>
          <div
            className="block flex flex-row  items-center flex-1 justify-between  w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={() => {
              setShowTarget((pre) => !pre);
              setShowSource(false);
            }}
          >
            <p>{targetLanguage ? targetLanguage : "Target Language"}</p>
            <AiOutlineDown />
          </div>
          {showTarget && (
            <div className="absolute top-[55px] border-2 border-gray-800 rounded-lg bg-gray-50 w-[100%]">
              <input
                placeholder="Search Here..."
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={searchInput}
                onChange={(e) => setSearchInput(e?.target?.value)}
              />
              {languages
                ?.filter((all) =>
                  all?.language.toLowerCase().includes(searchInput)
                )
                ?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-[20px] hover:bg-gray-100 transition-all duration-100 cursor-pointer "
                      onClick={() => {
                        setShowTarget(false);
                        setTargetLanguage(item?.language);
                      }}
                    >
                      <p className="mt-[10px] px-[10px] ">{item?.language}</p>
                      <div className="h-[1px] w-[100%] bg-gray-100"></div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[50px] mt-[50px]">
        <textarea
          className="bg-gray-50 min-h-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter the Text Here..."
          value={sourceText}
          onChange={(e) => setSourceText(e?.target?.value)}
        ></textarea>
        <div className="relative">
          <AiOutlineCopy
            className="absolute bottom-[20px] right-[20px] text-[25px] cursor-pointer"
            onClick={handleCopy}
          />
          <textarea
            className="block min-h-[300px] p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Translation Will Appear Here..."
          >
            {translatedText}
          </textarea>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          className=" mt-[50px] w-[100px] h-[40px] border-2px border-gray-200 bg-gray-200 hover:bg-gray-100 rounded-lg cursor-pointer"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
    </div>
  );
};

export default page;
