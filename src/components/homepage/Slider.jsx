import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./../ui/Button";

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
    <div className="container flex flex-col justify-center items-center mt-9 w-full">
      {games.length > 0 && (
        <div className="text-white text-left  text-2xl font-bold w-full  ">
          Recently Added Games
        </div>
      )}
      <div
        className="flex items-center justify-center box-border 
    list-none	 mx-auto	pt-2 pb-10 px-10 scroll-smooth 
    overflow-auto  max-w-full h-fit hover:overflow-hidden  "
      >
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={0}
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
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ el: "swiper-pagination", clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper-container  h-fit px-2 py-6 relative"
        >
          {games.length &&
            games.map((el) => (
              <SwiperSlide
                key={el._id}
                className="swiper-slide h-2/4 relative sm:w-full"
              >
                <div
                  style={{ backgroundImage: `url(${el.imgs_links[0]})` }}
                  className=" bg-no-repeat flex flex-col items-center justify-end bg-cover	bg-center card w-full h-96 bg-slate-900	 rounded-xl shadow-md shadow-black  hover:shadow-slate-100"
                >
                  {/* <div className="card_image w-64  mb-4"></div> */}

                  <div className="card_content flex  items-center flex-col w-full bg-slate-300 rounded-b-xl border-t-2 border-line-primary py-1 bg-opacity-50 shadow-sm">
                    <span className="card_title text-2xl font-medium relative mb-2">
                      {el.product_name}
                    </span>
                    <Button className="card_btn  shadow-md  hover:shadow-lg hover:scale-105 mb-2  ">
                      <Link to={`/game/${el._id}`}>See More</Link>
                    </Button>
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
  );
};

export default Cards;
