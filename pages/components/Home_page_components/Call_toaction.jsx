//import React from 'react'

export default function Call_toaction() {
	return (
		<div className="bg-black px-2 lg:px-60  flex flex-row relative lg:my-16 pt-36 lg:pt-10 mt-32">
			<div className="flex flex-col py-12 gap-3">
				<h1 className="text-[#865100] text-4xl font-bold">Join Our Community</h1>
				<p className="text-white lg:w-[50%]">Connect with people who share the same cultural
					background as you. Our community is a safe space
					to engage in discussions, share stories, and celebrate
					diversity</p>
				<button className="text-[#865100] w-[120px] py-1 border-[2px] border-[#865100]">Join us now</button>
			</div>
			<div className=" w-[90%] h-[300px] bg-slate-400 absolute lg:-top-10 lg:right-2 lg:translate-x-[40%] left-[50%] translate-x-[-50%] -top-[120px] lg:w-[500px] lg:h-[390px] grid place-content-center">
				<img src="" alt="image" className="w-full aspect-square object-cover object-center"/>
			</div>
		</div>
	)
}
