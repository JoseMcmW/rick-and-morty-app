import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";

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
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1 className={style.wellcome}>Welcome to</h1>
                <h2 className={style.rickandmorty}>Rick and Morty´s App</h2>
                <h4 className={style.messagelogin}>Please Login with tour email account.</h4>
                <div className={style.inputsdiv}>
                    <label htmlFor="email" className={style.label}>Email:</label>
                    <input name="email" type="email" placeholder="Enter email" value={userData.email} onChange={handleChange} className={style.input}/>
                    {
                    errors.email && <span className={style.error}>{errors.email}</span>
                    }
                </div>
                <div className={style.inputsdiv}>
                    <label htmlFor="password" className={style.label}>Password:</label>
                    <input name="password" type="password" placeholder="Enter password" value={userData.password} onChange={handleChange} className={style.input}/>
                    {
                    errors.password && <span className={style.error}>{errors.password}</span>
                    }
                </div>
                <button className={style.button}>Log in</button>
            </form>
        </div>
    )
};

export default Form;