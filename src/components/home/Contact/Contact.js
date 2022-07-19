import "./css/contact.css";
import { Ornament } from './../../Ornament';

export function Contact() {


    return (
        <div className="contact" id="contact">
            <div className="contact-right">
                <Ornament title={"Skontaktuj się z nami"}/>
                    <form className="contact-form">
                        <div className="contact-row">
                            <label>
                                Wpisz swoje imię
                                <input type="text" placeholder="Krzysztof"/>
                            </label>
                            <label>
                                Wpisz swój email
                                <input type="email" placeholder="abc@xyz.pl"/>
                            </label>
                        </div>
                        <label>
                            Wpisz swoją wiadomość
                            <textarea type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                             Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                             laboris nisi ut aliquip ex ea commodo consequat."/>
                        </label>
                        <div className="constact-btn">
                            <button className="submit">Wyślij</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}