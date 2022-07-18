import "./css/home.css";
import { HomeRight } from "./header/HomeRight";
import { ThreeColumns } from "./RowAndColumns/ThreeColumns";
import { About } from "./About/About";
import { Organisations } from "./Organisations/Organisations";

export function Home() {

    return (
        <div>
            <div className="home">
                <div className="home__img"/>
                <HomeRight/>
            </div>
            <ThreeColumns/>
            <About/>
            <Organisations/>
        </div>
    )
}