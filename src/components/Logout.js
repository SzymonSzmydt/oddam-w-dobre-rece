import { Ornament } from './Ornament';
import { HeaderLogin } from './home/header/HeaderLogin';
import { HeaderNav } from './home/header/HeaderNav';
import { Link } from 'react-router-dom';

export function Logout() {


    return (
        <div className="login">
            <div className="login__header">
                <HeaderLogin/>
                <HeaderNav/>
            </div>
            <div className="logout">
                <Ornament title={"Wylogowanie nastąpiło pomyślnie!"} />
                <div className="center">
                    <Link to="/" className="border">Strona główna</Link>
                </div>
            </div>
        </div>
    )
}