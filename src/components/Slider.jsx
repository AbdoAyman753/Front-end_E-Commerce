import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Cards = (/*{ recentGames }*/) => {
  const [games, setGames] = useState("");

  const fitchRecentGames = async () => {
    const { data } = await axios.get("http://localhost:8000/products/newest");
    setGames(data.newestTenProducts);
  };
  useEffect(() => {
    fitchRecentGames();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-9 w-full">
        <div className="text-gray-800 text-left text-3xl font-bold w-full pl-10 ">
          Recently Added Games
        </div>
        <div
          className="container  flex items-center justify-center box-border 
    list-none	 mx-auto	py-20 px-10 scroll-smooth 
    overflow-auto  max-w-full h-fit hover:overflow-hidden  "
        >
          <Swiper
            wrapperClass="swiper-wrapper"
            slideClass="swiper-slide"
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ el: "swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper-container  h-fit px-2 py-0 relative"
          >
            {games.length &&
              games.map((el) => (
                <SwiperSlide
                  key={el._id}
                  className="swiper-slide w-72 h-2/4 relative"
                >
                  <div className="card w-80 h-1/3 bg-blue-400		 rounded-3xl shadow-lg shadow-black py-8 px-4 flex items-center flex-col hover:shadow-amber-300 hover:scale-x-105	">
                    <div className="card_image w-64 h-80 mb-4">
                      <img
                        className="img w-full h-full"
                        src={el.imgs_links[0]}
                        alt="card1"
                      />
                    </div>

                    <div className="card_content flex items-center flex-col">
                      <span className="card_title text-2xl font-medium relative top-2 mb-8">
                        {el.product_name}
                      </span>

                      <button className="card_btn bg-white rounded p-1">
                        <Link
                          className="text-yellow-400"
                          to={`/game/${el._id}`}
                        >
                          See More
                        </Link>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            <div className="slider-controler  flex relative bottom-8 items-center justify-center">
              <div className="swiper-pagination drop-shadow(0 8px 24px rgba(18 28 35 / 0.1)) relative w-60 bottom-4"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Cards;
