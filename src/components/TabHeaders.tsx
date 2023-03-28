import React, { SetStateAction } from "react";
import "../css/Tabs.css";
import kkminlogo_light from "../assets/kkminlogo_light.png";
import { useTabStore } from "../data/Store";

export interface PropTypes {
	tabNames: string[];
}

export default function TabHeaders(props: PropTypes) {
	const activeTab = useTabStore((state: any) => state.activeTab);
	const setActiveTab = useTabStore((state: any) => state.setActiveTab);
	// onClick function for when a tab is clicked:
	const tabClickHandler = (event: React.MouseEvent, tabname: string) => {
		if (tabname === activeTab) {
			// Tab is already active
			return;
		}

		setActiveTab(tabname);
		window.scroll(0, 0);
	};

	return (
		<div className="tabs" id="tabs">
			{props.tabNames.map((name) => (
				<button
					id={name}
					key={name}
					className={name === activeTab ? "tabheaderactive" : "tabheader"}
					onClick={
						name === "Blog"
							? () => {
								window.open("https://kkmin.vercel.app", "_blank");
							}
							: (event) => tabClickHandler(event, name)
					}
				>
					{name}
				</button>
			))}
			<div className="tabsfiller">
				<img className="tabslogo" src={kkminlogo_light} alt="KK Min" />
			</div>
		</div>
	);
}
