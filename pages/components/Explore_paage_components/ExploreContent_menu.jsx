//import React from 'react'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


export default function ExploreContent_menu() {
	const [open, Setopen] = useState(false)
	function Clickhandler() {
		Setopen(!open)
	}
	return (
		<div className={`absolute lg:relative w-full bg-black lg:w-[300px] h-full transition-all duration-1000  lg:translate-x-[0px] ${open ? `translate-x-[0px]` : `translate-x-[-320px]`}`}>
			<FaBars className="text-white bg-black -right-10 top-2 text-xs w-10 h-10 p-3 absolute rounded-e-lg cursor-pointer lg:hidden" onClick={Clickhandler}/>
			<FaTimes className="text-white right-5 top-3 w-10 h-10 p-2 absolute cursor-pointer lg:hidden" onClick={Clickhandler}/>
			<div className="py-5 pl-5">
				<h2 className="uppercase text-[#FF9900] text-2xl ">Menu</h2>
				<div className="h-2 w-full bg-[#FF9900]" />
			</div>
			<div className="py-5 px-12">
				<ul className="list-none flex flex-col gap-10 capitalize text-white font-semibold">
					<li className="hover:text-[#FF9900] cursor-pointer">overview</li>
					<li className="hover:text-[#FF9900] cursor-pointer">Dressing</li>
					<li className="hover:text-[#FF9900] cursor-pointer">Food And Nutrition </li>
					<li className="hover:text-[#FF9900] cursor-pointer">Arts And Craft</li>
					
				</ul>
			</div>
		</div>
	)
}
