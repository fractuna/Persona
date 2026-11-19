export default function ({
	children,
	href,
	onClick,
}: {
	children: any;
	href?: string;
	onClick?: any;
}) {
	return (
		<div className="inherit font-mono text-[18px] text-gray-500 cursor-pointer">
			<a href={href} onClick={onClick}>
				{children}
			</a>
		</div>
	);
}
