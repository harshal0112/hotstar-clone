import React, { useState } from "react";
import { BsTv, BsTvFill } from "react-icons/bs";
import { MdOutlineMovie, MdMovie } from "react-icons/md";
import {
  IoTennisballOutline,
  IoTennisball,
  IoSearchOutline,
  IoSearch,
} from "react-icons/io5";
import { TiHomeOutline, TiHome } from "react-icons/ti";
import { RiMickeyLine, RiMickeyFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Navbar() {
  const [sideExpand, setSideExpand] = useState(false);
  const [iconHovered, setIconHovered] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div>
      <nav
        className={`fixed h-full left-0 top-0 z-50 overflow-x-hidden hidden transition-width duration-300 whitespace-nowrap text-gray-400 text-left xl:flex flex-col justify-center ${
          sideExpand
            ? "w-1/2 bg-gradient-to-r from-[#0f1014] via-[#0f1014e8] to-transparent"
            : "w-[7%] bg-[#0f1014}"
        }`}
      >
        <div className="absolute top-8 left-6 w-[75px]">
          <img src="https://i.ibb.co/3YGM13G/logo-d-plus.png" alt="/" />
        </div>
        <div
          className="p-4 w-[200px] mt-10 flex flex-col font-medium"
          onMouseOver={() => setSideExpand(true)}
          onMouseOut={() => setSideExpand(false)}
        >
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "myspace" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("myspace")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("myspace")}
          >
            <i className="align-middle mr-8 text-blue-700">
              {iconHovered === "myspace" || activeTab === "myspace" ? (
                <RiMickeyFill className="text-blue-700" />
              ) : (
                <RiMickeyLine />
              )}
            </i>
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                My Space
              </motion.span>
            )}
          </div>
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "search" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("search")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("search")}
          >
            <i className="align-middle mr-8">
              {iconHovered === "search" || activeTab === "search" ? (
                <IoSearch />
              ) : (
                <IoSearchOutline />
              )}
            </i>
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                Search
              </motion.span>
            )}
          </div>
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "home" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("home")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("home")}
          >
            <i className="align-middle mr-8">
              {iconHovered === "home" || activeTab === "home" ? (
                <TiHome />
              ) : (
                <TiHomeOutline />
              )}
            </i>
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                Home
              </motion.span>
            )}
          </div>
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "movies" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("movies")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("movies")}
          >
            <i className="align-middle mr-8">
              {iconHovered === "movies" || activeTab === "movies" ? (
                <MdMovie className="text-white" />
              ) : (
                <MdOutlineMovie />
              )}
            </i>{" "}
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                Movies
              </motion.span>
            )}
          </div>
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "tv" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("tv")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("tv")}
          >
            <i className="align-middle mr-8">
              {iconHovered === "tv" || activeTab === "tv" ? (
                <BsTvFill className="text-white" />
              ) : (
                <BsTv />
              )}
            </i>{" "}
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                Tv
              </motion.span>
            )}
          </div>
          <div
            className={`px-8 py-5 text-lg hover:text-white hover:ml-1 hover:scale-105 transition-left ease-in-out duration-300 flex items-center cursor-pointer ${
              activeTab === "sports" ? "text-white" : ""
            }`}
            onMouseOver={() => setIconHovered("sports")}
            onMouseOut={() => setIconHovered("")}
            onClick={() => setActiveTab("sports")}
          >
            <i className="align-middle mr-8">
              {iconHovered === "sports" || activeTab === "sports" ? (
                <IoTennisball className="text-white" />
              ) : (
                <IoTennisballOutline />
              )}
            </i>
            {sideExpand && (
              <motion.span
                className="align-middle"
                initial={{ x: 10, opacity: 0, position: "absolute" }}
                animate={{ x: 40, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                Sports
              </motion.span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
