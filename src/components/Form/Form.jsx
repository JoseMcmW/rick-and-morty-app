import { useState } from "react";

const Form = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: [event.target.value]
        })
    }

    return (
        <div>
            <form>
            <img src={"../../../img/form-img"} alt="form-img"/>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange}/>
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" placeholder="Ingrese una password" value={userData.password} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;