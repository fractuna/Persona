import "./App.css";
import Link from "./components/Link";
import Main from "./components/Main";

function App() {
	// const [content, setContent] = useState("");

	return (
		<>
			<Main>
				{/*<canvas className="absolute"></canvas>*/}
				<div className="w-2/3 text-xs flex flex-col justify-start items-center p-16 gap-8 align-center">
					<p className="text-3xl">
						<i>James Wise</i>
					</p>
					<img className="h-100" src="./public/bg.jpg"></img>
					<div className="flex gap-2 justify-center items-center">
						<Link href="https://fractuna.github.io">blog</Link>
						<p>/</p>
						<Link href="https://fractuna.github.io">about</Link>
						<p>/</p>
						<Link href="https://fractuna.github.io">src</Link>
						<p>/</p>
						<Link href="./christmas/index.html">Old Page</Link>
					</div>
				</div>
			</Main>
		</>
	);
}

export default App;
