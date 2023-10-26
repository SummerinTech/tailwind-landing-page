const Header = () => {
	return (
		<header className="bg-indigo-500 px-4 py-3 w-full flex justify-center border-b-4 border-pink-500">
			<div className="max-w-4xl w-full">
				<div className="flex justify-between items-center text-pink-400">
					<svg
						className="h-8 fill-current "
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 108 32"
					>
						<path d="M16.2 12.8h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7s.8-1.7 1.7-1.7zm-.2 3.9h3c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3c-.8 0-1.4-.6-1.4-1.4-.1-.7.6-1.4 1.4-1.4zm-3.7 3.5h6.4c.9 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7h-6.4c-.9 0-1.7-.7-1.7-1.7.1-.9.8-1.7 1.7-1.7zm-4.4 0c1 0 1.7.7 1.7 1.7 0 .9-.7 1.7-1.7 1.7-.9 0-1.7-.7-1.7-1.7 0-.9.8-1.7 1.7-1.7zm19.8.6c.3 2.1 2.4 3 4.8 3 2.7 0 4.6-1.2 4.6-3.4 0-1.5-.9-2.6-2.8-3.1l-2.4-.5c-.6-.1-.8-.4-.8-.7 0-.4.3-.8 1.2-.8 1 0 1.6.6 1.7 1.2l3-.6c-.5-1.8-2.1-2.9-4.7-2.9s-4.4 1.4-4.4 3.4c0 1.6 1.1 2.6 3 3l2.1.4c.7.1 1 .4 1 .7 0 .4-.5.8-1.3.8-.9 0-1.7-.3-1.8-1.2l-3.2.7zm15.1.1c-1.5 0-2.4-1.1-2.4-2.5 0-1.5 1-2.5 2.4-2.5 1 0 1.9.6 2.1 1.8l3-.7c-.5-2.5-2.6-4-5.1-4-3 0-5.5 2.2-5.5 5.4s2.5 5.4 5.5 5.4c2.5 0 4.7-1.6 5.2-4l-3-.6c-.3 1.2-1.2 1.7-2.2 1.7zm12.4-7.8c-1.7 0-2.8.9-3.5 2.1v-1.9h-3.2v10.2h3.2v-3.2c0-2.6 1.2-3.8 3.5-3.8h.6l.1-3.2c-.2-.1-.4-.2-.7-.2zm3-4.6c-1.1 0-1.9.8-1.9 1.8s.8 1.8 1.9 1.8c1.1 0 1.9-.8 1.9-1.8s-.8-1.8-1.9-1.8zm1.7 14.9V13.3h-3.2v10.2h3.2v-.1zM73.7 13c-1.6 0-2.8.7-3.6 1.7-.7-1.1-1.9-1.7-3.3-1.7-1.3 0-2.3.5-3 1.2v-.9h-3.2v10.2h3.2v-5c0-1.7.8-2.6 1.9-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-5c0-1.7.8-2.6 2-2.6 1 0 1.7.7 1.7 1.9v5.7h3.2v-6.4c.1-2.5-1.6-4.1-3.8-4.1zm10.8 0c-1.3 0-2.4.4-3.2 1.1V8.9h-3.2v14.6h3.2v-.8c.8.7 1.8 1.1 3.2 1.1 2.7 0 5-2.2 5-5.4-.1-3.2-2.3-5.4-5-5.4zm-.7 8c-1.3 0-2.5-1.1-2.5-2.6 0-1.6 1.2-2.6 2.5-2.6 1.4 0 2.4 1.1 2.4 2.6s-1 2.6-2.4 2.6zm17.4-7.7H98v.8c-.8-.7-1.8-1.1-3.2-1.1-2.7 0-5 2.2-5 5.4s2.3 5.4 5 5.4c1.3 0 2.4-.4 3.2-1.1v.8h3.2V13.3zM95.5 21c-1.4 0-2.4-1.1-2.4-2.6 0-1.6 1-2.6 2.4-2.6 1.3 0 2.5 1.1 2.5 2.6S96.8 21 95.5 21z" />
					</svg>

					<button
						type="button"
						className="text-gray-200 sm:hidden hover:text-gray-100"
					>
						<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
							<path
								fillRule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>
				<div className=" my-4">
					<h1 className="text-xl text-indigo-100">
						Want to learn Tailwind CSS?
					</h1>
					<p className="text-sm text-indigo-200">
						Tailwind is the fastest growing utility-first CSS framework. Let's
						learn it step by step.
					</p>
					<div className="relative mt-4 flex justify-between">
						<div>
							<a
								className="bg-pink-400 uppercase rounded-full font-bold mt-2 px-4 py-2 text-xs text-indigo-100 "
								href="#"
							>
								Enroll Now
							</a>
						</div>
						<div className="absolute right-0 bg-white rounded-full flex justify-center items-center p-5 border-4 border-pink-500">
							<img className="w-16 h-16" src="/images/tailwind-logo.png" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
