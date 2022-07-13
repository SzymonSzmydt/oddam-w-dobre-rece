import "./css/simpleSteps.css";
import {SimpleIconColumn} from "./SimpleIconColumn";
import {BigBtn} from "../../../buttons/BigBtn";
import {useNavigate} from "react-router-dom"

export function SimpleSteps() {
    const navigate = useNavigate();

    const icon1 = {backgroundImage: "url('assets/Icon-1.svg')"};
    const icon2 = {backgroundImage: "url('assets/Icon-2.svg')"};
    const icon3 = {backgroundImage: "url('assets/Icon-3.svg')"};
    const icon4 = {backgroundImage: "url('assets/Icon-4.svg')"};

    const title1 = "Wybierz rzeczy";
    const title2 = "Spakuj je";
    const title3 = "Zdecyduj komu chcesz pomóc";
    const title4 = "Zamów kuriera";

    const text1 = "ubrania, zabawki, sprzęt i inne";
    const text2 = "skorzystaj z worków na śmieci";
    const text3 = "wybierz zaufane miejsce";
    const text4 = 'kurier przyjedzie \nw dogodnym terminie';

    return (
        <div className="threeColumns" id="whats_about">
            <p className="simpleSteps-Title"> Wystarczą 4 proste kroki </p>
            <div className="simpleSteps-img"/>
            <div className="simpleSteps-icons">
                <SimpleIconColumn img={icon1} title={title1} text={text1}/>
                <SimpleIconColumn img={icon2} title={title2} text={text2}/>
                <SimpleIconColumn img={icon3} title={title3} text={text3}/>
                <SimpleIconColumn img={icon4} title={title4} text={text4} />
            </div>
            <div className="container">
                <BigBtn name="Oddaj rzeczy" onClick={()=> navigate("/logowanie", true)} />
            </div>
        </div>
    )
}