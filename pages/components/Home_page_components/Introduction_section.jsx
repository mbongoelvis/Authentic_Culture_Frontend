//import React from 'react'

export default function Introduction_section() {
	return (
		<div className="py-28">
			<div><h1 className="flex px-10 flex-col uppercase text-center font-bold lg:text-start leading-none lg:mt-20 lg:px-60 lg:py-4"><span className="text-[2.2em] lg:text-[5.5em] text-[#865100] ">welcome to</span> <span className="lg:text-[3.3em] text-[1.3em]">authentic cultures</span></h1></div>
			<div className="bg-[#865100] text-white relative py-5 mt-40 lg:mt-1 grid lg:grid-cols-2 lg:px-60">
				<div className="w-[200px] lg:w-[350px] aspect-square grid place-content-center border-white border-[15px] absolute rounded-full top-[-135px] lg:top-[-225px] left-[50%] translate-x-[-50%] lg:translate-x-[40%] bg-[#865100]">
					<img src="" alt="white logo" />
				</div>
				<div className="px-3 pt-12 lg:pt-1 text-center lg:text-start">
					<p>We are here to provide you with insights about your
						origins and promote a strong cultural community. Our mission
						is to help you connect with your roots and understand your heritage better</p>
				</div>
				
			</div>
		</div>
	)
}
