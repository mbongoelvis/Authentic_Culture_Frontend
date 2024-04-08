/* eslint-disable react/prop-types */
//import React from 'react'



export default function ExploreContent_banner({image,tribe}) {
	
	
  return (
	<div className="px-2 py-10 text-center capitalize font-bold text-2xl text-white" style={{ backgroundImage:`linear-gradient(90deg,  rgb(28 12 0 / 95%), rgb(83 39 0 / 73%)),url(${image})`}}>
	{tribe}
	</div>
  )
}
