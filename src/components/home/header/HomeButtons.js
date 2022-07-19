import "./css/homeButtons.css";
import {BigBtn} from "../../../buttons/BigBtn";

export function HomeButtons() {

    return (
        <div className="HomeButtons">
            <BigBtn name="ODDAJ RZECZY" />
            <BigBtn name="ZORGANIZUJ ZBIÓRKĘ" />
        </div>
    )
}