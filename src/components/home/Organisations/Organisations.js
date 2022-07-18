import "./css/organisations.css";
import { Ornament } from './../../Ornament';
import { SmallBtn } from './../../../buttons/SmallBtn';

export function Organisations() {

    return (
        <div className="organisations">
            <Ornament title="Komu pomagamy?"/>
            <div className="help">
                <SmallBtn name="Fundacjom"/>
                <SmallBtn name="Organizacją pozarządowym"/>
                <SmallBtn name="Lokalnym zbiórkom"/>
            </div>
            <p className="organisations-text">
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </div>
    )
}