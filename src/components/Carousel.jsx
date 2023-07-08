// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper';

import './Carousel.css'

import card1 from '../assets/img/img1.jpg'
import card2 from '../assets/img/img2.jpg'
import card3 from '../assets/img/img3.jpg'
import card4 from '../assets/img/img4.jpg'
import card5 from '../assets/img/img5.webp'
import card7 from '../assets/img/img7.jpg'
import card9 from '../assets/img/img9.jpg'
import card10 from '../assets/img/img10.jpg'
import { Link } from 'react-router-dom';

import img from '../assets/img/imghome.png'


const gradient = {
  width:'100%',
  height: '100%',
  position:'absolute',
  opacity: '0.5',
  backgroundImage: 'radial-gradient(circle farthest-corner at center, #15497E 0%, #3D93BC 100%)'
}


const Cards =() => {

  

  return (
    <>
    
    <div className='img_home lg:h-screen  bg-no-repeat bg-cover	bg-center flex justify-center items-center flex-wrap p-3 md:h-auto md:gap-y-8 sm:h-auto sm:gap-y-8 ' style={{backgroundImage:`url(${img})`}}>
      {/* <div style={gradient}></div> */}
    <div className='text font-extrabold  	text-6xl w-1/2	text-white	 font-mono	z-10 ml-7  flex items-center justify-center'>
        <div >
        <p>Welcome to <span className='text-yellow-300 text-7xl '>z9Games</span> </p>
        <div className='flex items-center justify-center mt-8'>
        <button className="btn btn-outline btn-warning text-2xl m-auto" > <Link to='/store'>Explore Our Store</Link>
</button>
</div>
</div> 
</div>

 {/* <div className='container  h-4/6  max-w-full
    	scroll-smooth overflow-auto hover:overflow-scroll mr-0 border'> */}
      <Swiper
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={
          {
            rotate : 0,
            stretch: 0,
            depth:100,
            modifier:2.5
          }
        }

        pagination={{el:'swiper-pagination',clickable:true}}
        modules={[Autoplay,EffectCoverflow,Pagination,Navigation]}

        className='swiper-container max-w-xl'>

          
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card1} alt='card1'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img  className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card2} alt='card2'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img  className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card3} alt='card3'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img  className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card4} alt='card4'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card5} alt='card5'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card7} alt='card7'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card9} alt='card9'/>
        </SwiperSlide>
        <SwiperSlide className='swiper_slide w-4/5 h-96 relative'>
          <img className='img_swiper w-full	h-96 rounded-3xl	object-cover' src={card10} alt='card10'/>
        </SwiperSlide>
        

        {/* <div className='slider-controler flex relative  items-center justify-center '>
          <div className='swiper-pagination drop-shadow(0 8px 24px rgba(18 28 35 / 0.1)) relative '></div>
        </div> */}
      </Swiper>
      </div>
    
    {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default Cards;