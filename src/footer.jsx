import './footer.css'
import {list} from "./consts";

export function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <a href='#'>About Us</a>
                    <p>
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    </p>
                </div>
                <div className="footer-bottom">
                    <span>&copy; 2024 MyWebsite | Designed by Zauta</span>
                    <ul className="nav-links">
                        {list.map((el,) => (
                            <li><a href={"#"+ el}>{el}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section contact">
                    <a href='#'>Contact</a>
                    <p>Email: info@mywebsite.com</p>
                    <p>Phone: +1 123 456 7890</p>
                </div>
            </div>

        </footer>
    );
}