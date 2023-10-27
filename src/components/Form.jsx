import FormBlock from "./FormBlock";
import InputBlock from "./InputBlock";

const Form = () => {
	return (
		<form
			className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0 md:-mx-2"
			action="#"
			method="post"
		>
			<FormBlock>
				<InputBlock
					label="First Name"
					type="text"
					placeholder="First Name"
					id="first_name"
				/>
				<InputBlock
					label="Last Name"
					type="text"
					placeholder="Last Name"
					id="last_name"
				/>
			</FormBlock>
			<FormBlock>
				<InputBlock
					label="Email"
					type="email"
					placeholder="john@email.com"
					id="email"
				/>
				<InputBlock
					label="Title"
					type="text"
					placeholder="Your Title"
					id="title"
				/>
			</FormBlock>
			<FormBlock>
				<button className="bg-indigo-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2 ">
					Create Account
				</button>
			</FormBlock>

			<div className=""></div>
		</form>
	);
};

export default Form;
