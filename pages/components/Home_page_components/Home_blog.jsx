//import React from 'react'

import Sample_blog from "./Sample_blog";

export default function Home_blog() {
	return (
		<div className="px-2 lg:px-60 flex flex-col justify-center">
			<div className="flex items-center gap-2">
				<h2 className="w-42 font-bold lg:text-2xl text-[#865100]">Latest Blog Post</h2>
				<div className="h-2 w-[50%] lg:w-[80%] bg-black"></div>
			</div>
			<div className="lg:px-20 py-5 flex flex-col gap-5">
				<Sample_blog title={"Korup National Park"} content={`Korup National Park is one of Cameroon's rainforest protected  areas gazetted in 
October 1986 by Presidential Decree N° 86/1283 of 30th October 1986.`} />
				<Sample_blog title={"Kribi"} content={`Kribi is a beach resort and sea port in Cameroon. Kribi beach, 2006. Kribi is located
in Cameroon. Kribi. Location in Cameroon`} />
			</div>
		</div>
	)
}
