import CardHour from './CardHour.jsx'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';

const CardCarousel = ({hours}) => {

  return (
    <>
      {/* =========================================== froecast info ======================================== */}
      <div className="mt-1 w-[97%] md:w-[96%] xl:w-[93%] mx-auto">
          
        <Swiper
          className="cursor-grab"
          freeMode={true}
          autoplay={{
            delay: 2100,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={3}
          breakpoints={{
            '@0.00': {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            '@0.50': {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            '@0.75': {
              slidesPerView: 6,
              spaceBetween: 5,
            },
            '@0.90': {
              slidesPerView: 7,
              spaceBetween: 5,
            },
            '@1.10': {
              slidesPerView: 8,
              spaceBetween: 5,
            },
            '@1.25': {
              slidesPerView: 10,
              spaceBetween: 5,
            },
            '@1.50': {
              slidesPerView: 12,
              spaceBetween: 5,
            },
          }}
        >

          {hours.map((val,index) => (
          <SwiperSlide key={index}>
              <CardHour
                  time={val.time}
                  temp_c={val.temp_c}
                  temp_f={val.temp_f}
                  icon={val.condition.icon}
                  condition={val.condition.text}
              />
          </SwiperSlide>
          ))}
          
        </Swiper>
          
      </div>
    </>
  )
}

export default CardCarousel