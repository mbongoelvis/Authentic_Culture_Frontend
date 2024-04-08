/* eslint-disable react/prop-types */
//import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import { images, details } from "./Tribes_preview"
import { useState } from "react";

export default function Rotating_caroussel({ changer }) {
	const [showdit, Setshowdit] = useState(0)

	return (
		<div className="carousel flex flex-col">
			<div className="scale-50 md:scale-125 lg:scale-100 lg:translate-x-[70%] lg:translate-y-[-150px] translate-x-[25%] translate-y-[-33%] relative">
				<FancyCarousel
					images={images}
					carouselRadius={550}
					centralImageRadius={0}
					focusElementStyling={{ border: '3px solid #c45a13', scale: `3`, zIndex: `22` }}
					offsetAngle={90}
					setFocusElement={(e) => {
						changer(e)
						Setshowdit(e)
					}}
					borderWidth={4}
					borderHexColor={'ffffff'}
					navigationButtonStyling={{
						display: `flex`,
						alignItems: `center`,
						flexDirection: `column`,
						bottom: `20%`,
						left: `-60%`,
						position: `absolute`,
						margin: `auto`,
						rotate: `-90deg`,
						backgroundColor: `transparent`,
						border: `3px solid #fff`
					}}
				/>
			</div>
			<div className="absolute top-[57%] px-2 lg:px-0 lg:top-[35%] text-white lg:left-[10%] flex gap-3 flex-col items-center lg:items-start">
				<h1 className="text-center lg:text-[6rem] capitalize font-bold py-0 leading-none text-3xl ">{details[showdit].title}</h1>
				<p className="lg:w-[45%] text-center lg:text-start ">{details[showdit].dit}</p>
				<button className="capitalize px-10 py-3  border-[3px] w-[200px] mt-3 hover:border-[#c45a13]">learn more</button>
			</div>
		</div>
	)
}
