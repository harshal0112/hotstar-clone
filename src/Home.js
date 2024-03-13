import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import data from "./hotstar-slider.json";
import { EffectFade } from "swiper";
import "swiper/css/effect-fade";
import { BsDot } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";

function Home() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <div className="max-w-screen bg-[#0f1014] text-center ml-[7%]">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
      >
        {data.items.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="h-full w-full bg-[#0f1014] z-10">
              <div className="w-full h-full relative">
                <div className="w-[84%] h-full bg-gradient-to-r from-[#0f1014] b via-transparent to-transparent right-0 top-0 z-10 absolute"></div>
                <div className="w-[84%] h-full bg-gradient-to-t from-[#0f1014] via-transparent to-transparent right-0 top-0 z-10 absolute"></div>
                <img src={item.imageSrc} alt="" className="ml-auto w-[83%]" />
              </div>
              <div className="absolute left-2 bottom-20 w-[32%] text-white text-left font-medium text-base z-20 scale-75 lg:scale-100">
                <div className="mb-3 lg:mb-6">
                  <img src={item.titleImg} alt="" />
                </div>
                <div className="flex mb-3 lg:mb-6 font-bold opacity-75 items-center">
                  {item.year && <div>{item.year}</div>}
                  {item.length && (
                    <div className="flex items-center">
                      <div className="opacity-50 text-2xl">
                        <BsDot />
                      </div>
                      {item.length}
                    </div>
                  )}
                  {item.language && (
                    <div className="flex items-center">
                      <div className="opacity-50 text-2xl">
                        <BsDot />
                      </div>
                      {item.language}
                    </div>
                  )}
                  {item.certification && (
                    <div className="flex items-center">
                      <div className="opacity-50 text-2xl">
                        <BsDot />
                      </div>
                      <div className="bg-gray-400 px-2 bg-opacity-30 rounded">
                        {item.certification}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="mb-3 lg:mb-6 opacity-80"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    lineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </div>
                {item.category && (
                  <div className="mb-5 lg:mb-10 opacity-80 flex items-center">
                    {item.category.map((itemX, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        {itemX}
                        {itemIndex !== item.category.length - 1 && (
                          <span className="opacity-50">
                            <TbMinusVertical />{" "}
                          </span>
                        )}
                        {console.log(itemIndex !== item.category.length - 1)}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  <button className="bg-gray-200 bg-opacity-10 rounded-md text-xl text-white font-bold hover:bg-opacity-20 transition-transform duration-500 ease-in-out hover:scale-105 w-full">
                    <div className="py-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                      Watch Now
                    </div>
                  </button>
                  {item.certification && (
                    <button className="bg-gray-200 bg-opacity-10 text-xl rounded-md text-white font-bold hover:bg-opacity-20 transition-transform duration-500 ease-in-out hover:scale-105">
                      <div className="p-3 px-4">+</div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
