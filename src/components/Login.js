import "./css/login.css";
import { HeaderLogin } from './home/header/HeaderLogin';
import { HeaderNav } from './home/header/HeaderNav';
import { Ornament } from './Ornament';
import { useState } from 'react';
import { SmallBtn } from './../buttons/SmallBtn';

export function Login() {
    const [ formValues, setFormValues ] = useState({email: '', password: ''});
    const [ formError, setFormError ] = useState({});

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name] : e.target.value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (!values.password || values.password.length > 3) errors.password = "Podane hasło jest nieprawidłowe!";
        if (!values.email || !regex.test(values.email)) errors.email = "Podany email jest nieprawidłowy!";
        return errors
    }

    const handleLogin = () => {
        setFormError(validate(formValues));
        console.log(formValues);
    }

    return (
        <div className="login">
            <div className="login__header">
                <HeaderLogin/>
                <HeaderNav/>
            </div>
            <div className="login__body">
                <Ornament title={"Zaloguj się"} />
                <div className="login__box">
                    <form className="login-form">
                        <div className="login-row">
                            <label>
                                Email
                                <div className="error"> { formError ? formError.email : " " } </div>
                                <input type="email" name="email"value={formValues.email}  onChange={handleChange} style={{borderBottom: formError.email ?"1px solid #C21E4F" : ''}}/>
                            </label>
                            <label>
                                Hasło
                                <div className="error"> { formError ? formError.password : " " } </div>
                                <input type="password" name="password" value={formValues.password} onChange={handleChange} style={{borderBottom: formError.password ?"1px solid #C21E4F" : ''}}/>
                            </label>
                        </div>
                        <div className="login-btn">
                            <SmallBtn name={"Załóż konto"}/>
                            <SmallBtn onClick={handleLogin} name={"Zaloguj się"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}