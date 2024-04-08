//import React from 'react'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Explore_menu() {
	const [open,Setopen]=useState(false)
	function Clickhandler(){
		Setopen(!open)
	}
  return (
	<div className={`absolute top-[10%] left-[5%] w-[300px]  pl-16 py-3 bg-[#00000097] rounded-lg backdrop-blur-sm transition-all duration-1000 ${open ? `-translate-x-[50px]` : `-translate-x-[320px] lg:-translate-x-[380px]`}`}>
		<div className="absolute -right-[62px] bg-[#00000097]  p-4 rounded-e-lg" onClick={Clickhandler}>
			{open ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
		</div>
		<div>
			<h2 className="uppercase text-[#FF9900] text-2xl ">tribes</h2>
			<div className="h-2 w-full bg-[#FF9900]"/>
		</div>
		<div className="py-5 px-12">
			<ul className="list-none flex flex-col gap-10 capitalize text-white font-semibold">
				<li className="hover:text-[#FF9900] cursor-pointer">Douala</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Bertoua</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Banenda</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Ewondo</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Bamileke</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Ndop</li>
				<li className="hover:text-[#FF9900] cursor-pointer">Nso</li>
			</ul>
		</div>
	</div>
  )
}
