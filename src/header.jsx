import './header.css'
import {list} from "./consts";


export function Header() {
    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <ul className="nav-links">
                {list.map((el, ) => (
                    <li><a href={"#" + el}>{el}</a></li>
                ))}
            </ul>
        </nav>
    );
}