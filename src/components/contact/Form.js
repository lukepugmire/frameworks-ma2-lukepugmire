import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name").min(3, "Name must be a minimum of 3 characters"),
    age: yup.number().typeError("Please enter you're age").min(10).max(20).required(),
    website: yup.string().required("Please enter you url").url("Please enter a valid url"),
});

function Form() {
	const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
            <span>Name</span>{errors.name && <span className="errormessage">{errors.name.message}</span>}
			<input name="name" ref={register} />
            
            <span>Age</span>{errors.age && <span className="errormessage">{errors.age.message}</span>}
            <input name="age" ref={register}/>
            
            <span>Website</span>{errors.website && <span className="errormessage">{errors.website.message}</span>}
			<input name="website" ref={register} />
            
			<button>Send</button>
		</form>
	);
}

export default Form;