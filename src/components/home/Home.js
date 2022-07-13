import "./css/home.css";
import {HomeRight} from "./header/HomeRight";
import {ThreeColumns} from "./RowAndColumns/ThreeColumns";
import {About} from "./About/About";

export function Home() {

    return (
        <div>
            <div className="home">
                <div className="home__img"/>
                <HomeRight/>
            </div>
            <ThreeColumns/>
            <About/>
        </div>
    )
}