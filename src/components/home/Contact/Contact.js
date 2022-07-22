import "./css/contact.css";
import { Ornament } from './../../Ornament';
import { useState } from 'react';

export function Contact() {
    const [ formValues, setFormValues ] = useState({name: '', email: '', message: ''});
    const [ formError, setFormError ] = useState({});

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name] : e.target.value });
    }
    const validate = (values) => {
        const errors = {};
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
        if (!values.name || values.name.includes(" ")) errors.name = "Podane imię jest nieprawidłowe!";
        if (!values.email || !regex.test(values.email)) errors.email = "Podany email jest nieprawidłowy!";
        if (values.message.length < 120) errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";

        return errors
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        console.log(formValues);
        if (!formError) {
        let url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
          })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
          })
          //Then with the error genereted...
          .catch((error) => {
            console.error('Error:', error);
          });
        }
        async function makeRequest() {
            try {
              const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
              });
          
              console.log('response.status: ', response.status);
              console.log(response);
          
            } catch (err) {
              console.log(err);
            }
          }       
          makeRequest();
    }
    return (
        <div className="contact" id="contact">
            <div className="contact-right">
                <Ornament title={"Skontaktuj się z nami"}/>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-row">
                            <label>
                                Wpisz swoje imię
                                <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Krzysztof" style={{borderBottom: formError.name ?"1px solid #C21E4F" : ''}}/>
                                <div className="error"> { formError ? formError.name : " " } </div>
                            </label>
                            <label>
                                Wpisz swój email
                                <input type="email" name="email"value={formValues.email}  onChange={handleChange} placeholder="abc@xyz.pl" style={{borderBottom: formError.email ?"1px solid #C21E4F" : ''}}/>
                                <div className="error"> { formError ? formError.email : " " } </div>
                            </label>
                        </div>
                        <label>
                            Wpisz swoją wiadomość
                            <textarea type="text" name="message" value={formValues.message} onChange={handleChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat." style={{borderBottom: formError.message ?"1px solid #C21E4F" : ''}}/>
                            <div className="error"> { formError ? formError.message : " " } </div>
                        </label>
                    
                        <div className="constact-btn">
                            <button type="submit" className="submit">Wyślij</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}