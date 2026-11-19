import About from "./About";
import Link from "./Link";

export function Menu({ dispatcher }: { dispatcher: any }) {
	return (
		<div className="flex gap-2 justify-center items-center">
			<Link href="https://fractuna.github.io">blog</Link>
			<p>/</p>
			<Link
				onClick={() => {
					dispatcher({
						type: "about",
					});
				}}
			>
				about
			</Link>
			<p>/</p>
			<Link href="https://fractuna.github.io">src</Link>
			<p>/</p>
			<Link href="./christmas/index.html">Old Page</Link>
		</div>
	);
}
