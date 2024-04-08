//import React from 'react'
//import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Slider_images } from "../Image_slider/Slider_images"



export default function Image_slider() {
	return (
		<div className={`container my-20 flex justify-center lg:px-30 lg:pl-20 py-20 m-0 bg-black`}>
			<Swiper
				effect={'coverflow'}
				
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				breakpoints={{
					340:{
						slidesPerView: -1,
						spaceBetween: 0
					},
					700:{
						slidesPerView: 4,
						spaceBetween: 50
					}
				}}
				slidesPerView={1.5}
				coverflowEffect={{
					rotate: 10,
					stretch: 50,
					depth: 140,
					modifier: 1.5,
					
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
					clickable: true,
				}}
				//autoplay={{
				//	delay: 3000,
				//}}
				modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
				className="swiper_container"
			>
				{Slider_images.map((image) => {
					return (
						<SwiperSlide key={image.title}>
							<div className=' w-[200px] h-[300px] mx-4 lg:w-[270px] lg:h-[370px] mt-20  relative  rounded-[10px] border-8'>
								<img src={image.image} alt={image.title} className={`w-full h-full object-cover `} loading='lazy'/>
								<h2 className={`absolute -top-14 z-10 px-6 w-full bg-[#000000d4] uppercase left-0 text-white backdrop:blur-md text-center py-2`}>{image.title}</h2>
							</div>
						</SwiperSlide>)
						
				})}

				<div className="slider-controler">
					<div className="swiper-button-prev slider-arrow">
						<ion-icon name="arrow-back-outline"></ion-icon>
					</div>
					<div className="swiper-button-next slider-arrow">
						<ion-icon name="arrow-forward-outline"></ion-icon>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</Swiper>
		</div>
	)
}

