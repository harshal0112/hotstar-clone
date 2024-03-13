import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import data from "./hotstar-latest&trending.json";
import { AiOutlineRight } from "react-icons/ai";

function LatestAndTrending() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [mouseOnLatest, setMouseOnLatest] = useState(false);

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  console.log(screenSize.dynamicWidth);

  const imageMouseOver = () => {};

  return (
    <div className="">
      <div
        className="ml-[7%] relative"
        onMouseOver={() => setMouseOnLatest(true)}
        onMouseOut={() => setMouseOnLatest(false)}
      >
        <div className="w-full flex justify-between text-white px-1 text-lg font-semibold absolute top-[-30px] z-10">
          <div>Latest & Trending</div>
          {mouseOnLatest && (
            <div className="text-base cursor-pointer text-gray-300 hover:text-white mr-4 flex items-center">
              View All&nbsp;
              <AiOutlineRight />
            </div>
          )}
        </div>
        <Swiper slidesPerView={screenSize.dynamicWidth / 180 - 1.1}>
          {data.items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="h-60 w-[180px] mx-1 overflow-hidden flex items-center justify-center rounded-md cursor-pointer">
                <div className="hover:scale-110 delay-300 transition-transform transform duration-1000">
                  <img
                    src={item.imageSrc}
                    alt=""
                    onMouseOver={() => imageMouseOver()}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default LatestAndTrending;
