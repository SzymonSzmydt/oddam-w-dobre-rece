import "./css/login.css";
import { HeaderLogin } from './home/header/HeaderLogin';
import { HeaderNav } from './home/header/HeaderNav';
import { Ornament } from './Ornament';
import { useState } from 'react';
import { SmallBtn } from './../buttons/SmallBtn';
import { useNavigate } from 'react-router-dom';

export function Rejestracja() {
    const [ formValues, setFormValues ] = useState({email: '', password1: '', password2: ''});
    const [ formError, setFormError ] = useState({});

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name] : e.target.value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (!values.password1 || values.password1.length < 3) errors.password1 = "Podane hasło jest nieprawidłowe!";
        if (!values.password2 || values.password2 !== values.password1) errors.password2 = "Podane hasło jest nieprawidłowe!";
        if (!values.email || !regex.test(values.email)) errors.email = "Podany email jest nieprawidłowy!";
        return errors
    }

    const handleLogin = () => {
        setFormError(validate(formValues));
        console.log(formValues);
    }

    const navigate = useNavigate();

    return (
        <div className="login">
            <div className="login__header">
                <HeaderLogin/>
                <HeaderNav/>
            </div>
            <div className="login__body">
                <Ornament title={"Załóż konto"} />
                <div className="login__box">
                    <form className="login-form">
                        <div className="login-row">
                            <label>
                                Email
                                <input type="email" name="email"value={formValues.email}  onChange={handleChange} style={{borderBottom: formError.email ?"1px solid #C21E4F" : ''}}/>
                                <div className="error"> { formError ? formError.email : " " } </div>
                           </label>
                            <label>
                                Hasło
                                <input type="password" name="password1" value={formValues.password1} onChange={handleChange} style={{borderBottom: formError.password1 ?"1px solid #C21E4F" : ''}}/>
                                <div className="error"> { formError ? formError.password1 : " " } </div>
                            </label>
                            <label>
                                Hasło
                                <input type="password" name="password2" value={formValues.password2} onChange={handleChange} style={{borderBottom: formError.password2 ?"1px solid #C21E4F" : ''}}/>
                                <div className="error"> { formError ? formError.password2 : " " } </div>
                            </label>
                        </div>
                        <div className="login-btn">
                        <SmallBtn onClick={ ()=> navigate("/logowanie", true)} name={"Zaloguj się"} />
                            <SmallBtn name={"Załóż konto"}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}