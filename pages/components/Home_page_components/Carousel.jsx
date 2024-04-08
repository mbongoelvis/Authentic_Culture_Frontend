import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Carousel_image } from "./Caroussel_image"
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";





//import {img1} from "./Caroussel_images/1.jpeg"
export default function Carousel() {
	let [change, setchange] = useState(0)

	return (
		<div className="flex  flex-col">
			<Swiper
				
				onActiveIndexChange={(e) => {
					setchange(e.activeIndex)
				}}
				breakpoints={{
					340: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					700: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
				}}
				translate="yes"
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
						delay: 5000,
					}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="max-w-[100%] lg:max-w-[100%]"
			>
				{Carousel_image.map((item, index) => (
					<SwiperSlide key={item.title}>
						<div className="h-[80vh] w-[100%] bg-[#fff] px-3 lg:px-32 text-white relative flex items-center flex-col lg:flex-row justify-between " style={{ backgroundImage: `linear-gradient(90deg,  rgb(28 12 0 / 95%), rgb(83 39 0 / 73%)), url(${item.image})`, backgroundPosition: `center`, backgroundSize: "cover" }}>
							<div className="pt-14">
								<h1 className={`text-[1.3rem] w-[15em] lg:text-5xl uppercase relative font-extrabold before:w-[90%] before:h-[10px] before:bg-[#FF9900] before:-bottom-4  translate-y-[500px] before:absolute ${change == index ? "animate_fade_buttom" : ""}`}>{item.title}</h1>
								<p className={`pt-5 text-[.9em] lg:text-xl font-normal w-[20em] lg:w-[25em]  translate-y-[500px] ${change == index ? "animate_fade_buttom_2s" : ""}`}>{item.description}</p>
							</div>
							<div className={`w-[150px] h-[250px] lg:w-[300px] grid place-content-center mb-10 lg:h-[400px] lg:mr-40 lg:mt-20 relative bg-black z-20 shadow-3xl  translate-x-[650px] ${change == index ? "animate_fade_right" : ""}`} style={{ backgroundImage: `url(${item.image})`, backgroundPosition: `center`, backgroundSize: "cover" }} >

							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
