import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Products from './Mocks/Products.json';
import { Card } from './Card';

export const Slider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
      <div className="container-fluid">
        <div className="swiperContainer">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.swiper-button-next', 
                prevEl: '.swiper-button-prev',
              }}
            slidesPerView={4}
            spaceBetween={10}

          >
            {products?.map((product) => (
              <SwiperSlide key={product.sku}>
                <Card Product={product}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-next" style={{ color: '#000' }}></div>
          <div className="swiper-button-prev" style={{ color: '#000' }}></div>
        </div>
      </div>
  );
};
