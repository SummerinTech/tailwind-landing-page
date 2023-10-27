const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gray-600 w-full text-center pb-8">
			<p className="text-xs text-gray-400 font-light">
				Copyright © {year} by Summer Robinson
			</p>
		</footer>
	);
};

export default Footer;
