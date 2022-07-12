import "./css/threeColumns.css";
import {Column} from "./Column";

export function ThreeColumns() {
    const stats = {
        statsOne: 10,
        statsTwo: 5,
        statsThree: 7
    }

    const title = {
        titleOne: "Oddanych worków",
        titleTwo: "Wspartych organizacji",
        titleThree: "Zorganizowanych zbiórek"
    }

    const text = "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.";

    return (
        <div className="threeColumns">
            <Column stats={stats.statsOne} title={title.titleOne} text={text}/>
            <Column stats={stats.statsTwo} title={title.titleTwo} text={text}/>
            <Column stats={stats.statsThree} title={title.titleThree} text={text}/>
        </div>
    )
}