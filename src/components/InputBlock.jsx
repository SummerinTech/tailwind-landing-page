const InputBlock = ({ label, id, placeholder, type }) => {
	return (
		<>
			<label htmlFor={id} className="sr-only">
				{label}
			</label>
			<input
				className="bg-gray-700 mt-4 border-gray-400 border rounded-lg py-2 px-4 w-full md:mx-2"
				type={type}
				placeholder={placeholder}
				id={id}
			/>
		</>
	);
};

export default InputBlock;
