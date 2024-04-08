//import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Sample_blog({title,content}) {
  return (
	<div className="border-[3px] border-[#707070] p-3 rounded-md">
		<h1 className="font-bold text-xl text-[#707070]">{title}</h1>
		<p className="text-[#232323]">{content}</p>
	</div>
  )
}
