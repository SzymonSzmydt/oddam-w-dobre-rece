import {HeaderLogin} from "./HeaderLogin";
import {HeaderNav} from "./HeaderNav";
import {HomeTitle} from "./HomeTitle";
import {HomeButtons} from "./HomeButtons";

export function HomeRight() {

    return (
        <div className="homeRight">
            <HeaderLogin/>
            <HeaderNav/>
            <HomeTitle/>
            <HomeButtons/>
        </div>
    )
}