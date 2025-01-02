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
                <a href="https://github.com/itsAman-24"><i className="icon fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/aman-kumar-pandey-727520270/"><i className="icon fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
