export default function ({ children, href }: { children: any; href: string }) {
	return (
		<div className="inherit font-mono text-[18px] text-gray-500">
			<a href={href}>{children}</a>
		</div>
	);
}
