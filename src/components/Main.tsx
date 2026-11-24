import { useContext } from "react";
import { Menu } from "./Menu";
import { ViewContent } from "../domain/menu";

export default function Main() {
  const dispatcher = useContext(ViewContent)
  return (
    <main className="flex flex-col justify-center items-center  dark:bg-[#0f0f23] h-screen text-black dark:text-[#ACACAF] text-xs gap-8 align-center">
      <p className="text-4xl">
        <i>James Sage</i>
      </p>
      <img className="h-100" src="./public/bg.jpg"></img>

      <Menu dispatcher={dispatcher} />
    </main>
  );
}
