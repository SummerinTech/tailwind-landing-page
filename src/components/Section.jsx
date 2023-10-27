import Description from "./Description";
import Form from "./Form";

const Section = () => {
	return (
		<main className="mt-16 flex flex-col items-center w-full">
			<Description />
			<div className="bg-gray-600 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black-100">
				<h2 className="font-bold text-2xl text-gray-200">
					Sign up to download the free PDF
				</h2>
				<Form />
			</div>
		</main>
	);
};

export default Section;
