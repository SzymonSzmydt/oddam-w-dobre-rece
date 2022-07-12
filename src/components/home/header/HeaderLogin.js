import "../css/headerLogin.css";
import {Link} from "react-router-dom";

export function HeaderLogin() {

    return (
        <div className="home__header">
            <div className="box-top">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
        </div>
    )
}