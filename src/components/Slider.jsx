// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';


import card1 from '../assets/img/card1.jpg'
import card2 from '../assets/img/card2.jpg'
import card3 from '../assets/img/card3.jpg'
import card4 from '../assets/img/card4.jpg'
import card5 from '../assets/img/card5.jpg'
import card6 from '../assets/img/card6.jpg'

const Cards =() => {

  return (
    <div className='container  flex items-center justify-center box-border 
    list-none	 mx-auto	py-20 px-12	scroll-smooth 
    overflow-auto hover:overflow-scroll max-w-full h-fit'>
      <Swiper wrapperClass="swiper-wrapper" slideClass="swiper-slider"
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={
          {
            rotate : 0,
            stretch: 0,
            depth:100,
            modifier:2.5,
            slideShadows:true
          }
         
        }

        pagination={{el:'swiper-pagination',clickable:true}}
        modules={[EffectCoverflow,Pagination,Navigation]}
        className='swiper-container  h-fit px-2 py-0 relative'
        >
        <SwiperSlide>
        <div className='card '>
            <div className='card_image'>
            <img src={card1} alt='card1'/>
            </div>
            <div className='card_content '>
            <span className='card_title'>First Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
            <div className='card_image'>
            <img src={card2} alt='card2'/>
            </div>
            <div className='card_content'>
            <span className='card_title'>Second Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
            <div className='card_image'>
            <img src={card3} alt='card3'/>
            </div>
            <div className='card_content'>
            <span className='card_title'>Third Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
            <div className='card_image'>
            <img src={card4} alt='card4'/>
            </div>
            <div className='card_content'>
            <span className='card_title'>Fourth Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
            <div className='card_image'>
            <img src={card5} alt='card5'/>
            </div>
            <div className='card_content'>
            <span className='card_title'>Fifth Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card'>
            <div className='card_image'>
            <img src={card6} alt='card6'/>
            </div>
            <div className='card_content'>
            <span className='card_title'>Sixth Game</span>
            <button className='card_btn bg-gray-300 rounded p-1'>
            view more
            </button>
            </div>
    </div>
        </SwiperSlide>

        <div className='slider-controler  flex relative bottom-8 items-center justify-center'>
          <div className='swiper-pagination drop-shadow(0 8px 24px rgba(18 28 35 / 0.1)) relative w-60 bottom-4'></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Cards;