import "../css/headerNav.css";
import {SmallBtn} from "../../../buttons/SmallBtn";

export function HeaderNav() {

    return (
        <div className="headerNav">
            <SmallBtn name={"Start"} />
            <SmallBtn name={"O co chodzi?"} />
            <SmallBtn name={"O nas"} />
            <SmallBtn name={"Fundacja i organizacje"} />
            <SmallBtn name={"Kontakt"} />
        </div>
    )
}