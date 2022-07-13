import "../css/headerNav.css";
import {Link} from "react-scroll";

export function HeaderNav() {

    return (
        <div className="headerNav">
            <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="bnt small"
            > Start </Link>
            <Link
                to="whats_about"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small"
            > O co chodzi? </Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small"
            > O nas </Link>
            <Link
                to="org"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small"
            > Fundacja i organizacje </Link>
            <Link
                to="kontakt"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small"
            > Kontakt </Link>
        </div>
    )
}