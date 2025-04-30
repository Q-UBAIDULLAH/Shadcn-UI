// components/MyCarousel.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Autoplay } from 'swiper/modules';

export default function MyCarousel() {
  return (
    <div className="w-full 
     max-w-6xl mx-auto mt-4 mb-3">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl"
      >
        <SwiperSlide>
          <img src="https://www.themancompany.com/cdn/shop/files/HeroEDP50ml-PrimaryImages5_1024x1024.jpg?v=1718012913" alt="Slide 1" className="w-full  h-[500px] object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://welpix.b-cdn.net/wp-content/uploads/2024/08/The-Concept-of-Hero-Shots-in-E-Commerce-Photography-768x428.webp" alt="Slide 2" className="w-full  h-[500px] object-cover rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.fragrancenet.com/images/photos/1600x1600/452683.jpg" alt="Slide 3" className="w-full h-[500px] object-cover rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
