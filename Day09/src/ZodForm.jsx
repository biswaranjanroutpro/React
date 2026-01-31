import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";


const formSchema = z.object({
    name: z.string().min(3, "Minimum length should be 3").max(20, "Maxmum length should be 20"),
    age: z.coerce.number().min(10, "Minimum age should be 10").max(80, "Maxmum age should be 80"),
    password: z.string().min(5, "Minimum length of password should be 5").max(20, "Minimum length of password should be 20"),
    confirm: z.string(),
    email: z.string().email("Email is invalid"),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords dont' match",
    path: ["confirm"],
});


function ZodForm() {
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    });


    function submitForm(data) {
        console.log(data);
    }

    console.log("render");


    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label htmlFor="first">Name: </label>
                    <input id="first" {...register("name")} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="fourth">Email: </label>
                    <input id="fourth" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="second">Age: </label>
                    <input id="second" {...register("age")} />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>
                <div>
                    <label htmlFor="third">Password: </label>
                    <input type="password" id="third" {...register("password")} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <label htmlFor="firth">Confirm Password: </label>
                    <input type="password" id="firth" {...register("confirm")} />
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                </div>
                <button>Submit</button>
            </form>
        </>
    );
}


export default ZodForm;