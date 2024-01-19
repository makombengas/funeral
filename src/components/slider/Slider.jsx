'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { dataSlider } from '@/data/data';
import Image from 'next/image';

export default function Slider() {
  return (
    <>
      <Swiper
        autoHeight={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <div className='sliderContainer'>
          {dataSlider.map((data) => (
            <SwiperSlide key={data.id}>
              <div className='slider'>
                <div className='imageContainer'>
                  <Image src={data.image} alt={data.image} />
                </div>
                <h3>{data.name}</h3>
                <span>{data.date}</span>
                <p>{data.text}</p>
                <h4>{data.bible} </h4>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
