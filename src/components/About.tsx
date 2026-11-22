import { Fragment, type ReactNode } from "react";
import strings from "../data/strings.json";

export default function () {
	function parseString(text: string): ReactNode {
		return text.split("\n").map((line, index) => (
			<Fragment key={index}>
				{line}
				<br />
			</Fragment>
		));
	}

	function recursiveTree(root: Object, depth: number): ReactNode {
		{
			return Object.entries(root).map(([key, value]) => {
				// console.log(key, "-", value);
				if (
					Object.keys(value).length > 0 &&
					typeof value !== "string"
				) {
					let node = recursiveTree(value, depth + 1);
					return (
						<div key={key}>
							<p>
								{"-".repeat(depth * 5)}
								{key}
							</p>
							<p>{node}</p>
						</div>
					)
				}

				return (
					<div key={key}>
						<p>
							{"-".repeat(depth * 5)}
							{value}
						</p>
					</div>
				);
			});
		}
	}

	function parseObjectToTree(root: object): ReactNode {
		// Check wether there is sub items or not
		// if (Object.keys(root).length < 0) return <></>;

		// Map over all the keys and if there is any sub-key add them recursivly
		return recursiveTree(root, 0);
	}

	return (
		<div className="m-3">
			<p>Name: {strings.name}</p>
			{/*<p>Gear: {}</p>*/}
			{parseObjectToTree(strings.Gear)}
			<p>{parseString(strings.about)}</p>
			<p className="italic">
				Notice the old website moved to the `old page` menu
			</p>
		</div>
	);
}
