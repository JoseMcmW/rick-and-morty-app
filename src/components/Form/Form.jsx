import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <img src={"../../../img/form-img"} alt="form-img"/>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange}/>
                {
                errors.email && <span>{errors.email}</span>
                }

                <label htmlFor="password">Password:</label>
                <input name="password" type="text" placeholder="Ingrese una password" value={userData.password} onChange={handleChange}/>
                {
                errors.password && <span>{errors.password}</span>
                }

                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form;