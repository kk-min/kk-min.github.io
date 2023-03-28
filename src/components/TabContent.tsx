import React, { Dispatch, useEffect, useState } from "react";
import "../css/TabContent.css";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import { useTabStore, TabState } from "../data/Store";

export default function TabContent() {
	const activeTab = useTabStore((state: TabState) => state.activeTab);
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setFirstRender((prev) => false);
			const homeContainer = document.getElementById("home-container");
			if (homeContainer) {
				homeContainer.style.overflow = "visible";
			}
		}, 2500);
	}, []);

	return (
		<div className="content-container" id="content-container">
			{activeTab === "About Me" ? (
				<AboutMe firstRender={firstRender} />
			) : activeTab === "Projects" ? (
				<Projects />
			) : (
				<Contact />
			)}
		</div>
	);
}
