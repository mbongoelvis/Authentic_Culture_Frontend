//import React from 'react'

import Call_toaction from "../components/Home_page_components/Call_toaction"
import Carousel from "../components/Home_page_components/Carousel"
import Home_blog from "../components/Home_page_components/Home_blog"
import Image_slider from "../components/Home_page_components/Image_slider"
import Introduction_section from "../components/Home_page_components/Introduction_section"

export const HomePage = () => {
  return (
    <div>
		<Carousel/>
		<Introduction_section/>
		<div className="">
			<Image_slider />
			<Home_blog/>
			<Call_toaction />
		</div>
	</div>
  )
}
