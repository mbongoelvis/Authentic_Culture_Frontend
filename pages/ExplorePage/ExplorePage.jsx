//import React from 'react'

import { useState } from "react"
import Rotating_caroussel from "../components/Explore_paage_components/Rotating_caroussel"
import img1 from "../components/Image_slider/1.webp"
import img2 from "../components/Image_slider/2.jpg"
import img3 from "../components/Image_slider/3.jpg"
import img4 from "../components/Image_slider/4.jpg"
import img5 from "../components/Image_slider/5.jpg"
import Explore_menu from "../components/Explore_paage_components/Explore_menu"

export const ExplorePage = () => {
	const [bgimage,Setbgimage]=useState(0)
	const images = [img1, img2, img3,img4,img5]
	return (
		<div className="h-[100vh] bg-black overflow-hidden" style={{ backgroundImage:`linear-gradient(90deg,  rgb(28 12 0 / 95%), rgb(83 39 0 / 73%)), url(${images[bgimage]})`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`,backgroundPosition:`center`}}>
			<Rotating_caroussel changer={Setbgimage}/>
			<Explore_menu/>
			
		</div>
	)
}
