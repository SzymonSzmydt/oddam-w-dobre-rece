import "./css/headerNav.css";
import {Link} from "react-scroll";

export function HeaderNav() {

    return (
        <div className="headerNav">
            <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="bnt small small-nav"
            > Start </Link>
            <Link
                to="whats_about"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small small-nav"
            > O co chodzi? </Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small small-nav"
            > O nas </Link>
            <Link
                to="org"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small small-nav"
            > Fundacja i organizacje </Link>
            <Link
                to="kontakt"
                spy={true}
                smooth={true}
                duration={500}
                cursor="pointer"
                className="bnt small small-nav"
            > Kontakt </Link>
        </div>
    )
}