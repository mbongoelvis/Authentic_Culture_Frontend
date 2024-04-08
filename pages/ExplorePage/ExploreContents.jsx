//import React from 'react'

import ExploreContent_banner from "../components/Explore_paage_components/ExploreContent_banner";
import ExploreContent_menu from "../components/Explore_paage_components/ExploreContent_menu";

export default function ExploreContents() {
  return (
	<div className="h-[100vh]">
		<ExploreContent_banner/>
	<div className="flex relative h-[85%] overflow-hidden">
		<ExploreContent_menu/>
	</div>
	</div>
  )
}
