import { useContext } from "react";
import { Menu } from "./Menu";
import { ViewContent } from "../domain/menu";

export default function Main() {
	const dispatcher = useContext(ViewContent)
	return (
		<main className=" dark:bg-[#0f0f23] h-full flex justify-center items-center text-black dark:text-[#ACACAF]">
			{/*{children}*/}

			<div className="w-2/3 text-xs flex flex-col justify-start items-center p-16 gap-8 align-center">
				<p className="text-3xl">
					<i>James Wise</i>
				</p>
				<img className="h-100" src="./public/bg.jpg"></img>
				<Menu dispatcher={dispatcher} />
			</div>
		</main>
	);
}
