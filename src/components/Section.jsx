import Card from "./Card";
import Form from "./Form";
import { bulletPoints } from "../bulletpoints";

const Section = () => {
	return (
		<main className="mt-16 flex flex-col items-center w-full">
			<div className="max-w-4xl mx-4">
				<h2 className="pb-1 font-bold text-xl text-indigo-600 border-indigo-200 border-b ">
					How It Works
				</h2>
				<p className="mt-4 text-md text-gray-500">
					Tailwind is designed for rapid development of modern applications. At
					its core, it is a robust mobile-first design system built with
					developer experience in mind. After using Tailwind CSS, you will find
					it difficult to go back to use anything else. Learn all about it in
					this all-inclusive course.
				</p>
				<h2 className="mt-8 pb-1 font-bold text-xl text-indigo-600 border-indigo-200 border-b ">
					Advantages
				</h2>
				<div className="sm:-mx-2 flex flex-col sm:flex-row">
					{bulletPoints.map((bulletpoint, index) => {
						return (
							<Card
								key={index}
								id={bulletpoint.id}
								name={bulletpoint.name}
								description={bulletpoint.description}
								icon={bulletpoint.icon}
							/>
						);
					})}
				</div>
			</div>
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
