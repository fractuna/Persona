import { createContext, useReducer, useState, type Context } from "react";
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import { ViewContent, type Content } from "./domain/menu";


function App() {
	function MenuAction(state: any, action: any): Content {
		switch (action.type) {
			case "about": {
				return {
					name: "About",
					ref_component: <About />,
				};
			}
		}

		return state;
	}

	const [content, dispatcher] = useReducer(MenuAction, {
		name: "Home",
		ref_component: <Main />,
	});

	return (
		<>
			<div>
				<ViewContent value={dispatcher}>
					{content.ref_component}
				</ViewContent>
			</div>
		</>
	);
}

export default App;
