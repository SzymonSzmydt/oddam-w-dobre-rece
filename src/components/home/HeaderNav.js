import "./css/headerNav.css";
import {Small} from "../../buttons/Small";

export function HeaderNav() {

    return (
        <div className="headerNav">
            <Small name={"Start"} />
            <Small name={"O co chodzi?"} />
            <Small name={"O nas"} />
            <Small name={"Fundacja i organizacje"} />
            <Small name={"Kontakt"} />
        </div>
    )
}