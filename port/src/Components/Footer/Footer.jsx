import "./Footer.css";
import logo from '../../assets/name_logo.jpg';
import user_icon from "../../assets/user_icon.svg";


const Footer = () => {
  return (
    <div id="footer" className='footer'>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Aman Pandey. All rights are reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
