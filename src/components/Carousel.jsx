// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';

import img from '../assets/img/imghome.jpg'
import card1 from '../assets/img/img1.jpg'
import card2 from '../assets/img/img2.jpg'
import card3 from '../assets/img/img3.jpg'
import card4 from '../assets/img/img4.jpg'
import card5 from '../assets/img/img5.webp'
import card7 from '../assets/img/img7.jpg'
import card8 from '../assets/img/img8.jpg'
import card9 from '../assets/img/img9.jpg'
import card10 from '../assets/img/img10.jpg'
import { Link } from 'react-router-dom';

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
    
    <div className='img_home h-screen bg-no-repeat bg-cover	bg-center flex justify-center items-center' style={{backgroundImage:`url(${img})`}}>
      <div style={gradient}></div>
    <div className='text font-extrabold	text-8xl	text-slate-100	font-mono	z-20'>
        <p>Welcome to <span className='text-yellow-400 text-8xl'>z9Games</span> </p>
        <div className='flex items-center justify-center mt-8'>
        <button className="btn btn-outline btn-warning text-2xl m-auto" > <Link to='/store'>Explore Our Store</Link>
</button>
</div>
      
      </div>
    </div>
    
    


    <div className='container flex items-center justify-center box-border 
    list-none	 mx-auto	py-20 px-12	scroll-smooth 
    overflow-auto hover:overflow-scroll max-w-full h-fit	'>
      <Swiper  wrapperClass="swiper-wrapper" slideClass="swiper-slide "
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
            modifier:2.5
          }
        }

        pagination={{el:'swiper-pagination',clickable:true}}
        modules={[EffectCoverflow,Pagination,Navigation]}

        className='swiper-container h-4/5 px-2 py-0 relative'>

          
        <SwiperSlide>
          <img src={card1} alt='card1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={card2} alt='card2'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={card3} alt='card3'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={card4} alt='card4'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card5} alt='card5'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card7} alt='card7'/>
        </SwiperSlide>
        <SwiperSlide>
          <img  src={card8} alt='card8'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card9} alt='card9'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card10} alt='card10'/>
        </SwiperSlide>
        

        <div className='slider-controler flex relative bottom-8 items-center justify-center '>
          <div className='swiper-pagination drop-shadow(0 8px 24px rgba(18 28 35 / 0.1)) relative w-60 bottom-4'></div>
        </div>
      </Swiper>
    </div>
    </>
  )
}

export default Cards;