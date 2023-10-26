const Card = (props) => {
	return (
		<div className="sm:w-1/3 mt-4">
			<div className="sm:mx-2 h-full bg-white p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:p-3 md:p-8">
				<div className=" bg-gray-200 text-indigo-600 w-16 rounded-full p-2">
					{props.icon}
				</div>
				<div className="mt-4 font-bold">{props.name}</div>
				<div className="text-center mt-2 text-gray-600 text-sm">
					{props.description}
				</div>
			</div>
		</div>
	);
};

export default Card;
