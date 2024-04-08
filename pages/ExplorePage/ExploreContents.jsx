//import React from 'react'
import ExploreContent_banner from "../components/Explore_paage_components/ExploreContent_banner";
//import ExploreContent_menu from "../components/Explore_paage_components/ExploreContent_menu";
import { useParams } from "react-router-dom";
import Douala from "./Tribes/Douala"
import Ewondo from "./Tribes/Ewondo";
import Bamileke from "./Tribes/Bamileke";
import Bamum from "./Tribes/Bamum";
import Mankon from "./Tribes/Mankon";



export default function ExploreContents() {
	const { tribe } = useParams();

	function Component(tribe) {
		switch (tribe) {
			case "Douala":
				return <Douala/> ;
			case "Ewondo":
				return <Ewondo/>;
			case "Bamileke":
				return <Bamileke/>;
			case "Bamum":
				return <Bamum/>;
			case "Mankon":
				return <Mankon/>;
			default:
				return null; // Default case should return something, even if it's null
		}
	}

	return (
		<div className="h-[100vh]">
			<ExploreContent_banner tribe={tribe} />
			<div className="flex relative h-[85%] overflow-hidden">
				{Component(tribe)}
			</div>
		</div>
	);
}
