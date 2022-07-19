import "./header/css/home.css";
import { HomeRight } from "./header/HomeRight";
import { ThreeColumns } from "./RowAndColumns/ThreeColumns";
import { About } from "./About/About";
import { Organizations } from "./Organizations/Organizations";
import { Contact } from "./Contact/Contact";

export function Home() {

    return (
        <div>
            <div className="home">
                <div className="home__img"/>
                <HomeRight/>
            </div>
            <ThreeColumns/>
            <About/>
            <Organizations/>
            <Contact/>
        </div>
    )
}