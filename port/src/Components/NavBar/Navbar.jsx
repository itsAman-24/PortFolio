import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from "../../assets/nav_underline.svg"
import { Link } from 'react-scroll';
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef, useState } from 'react';

const Navbar = () => {
    const menuRef = useRef();
    const[menu, setMenu] = useState("home");

    function handleSetMenu(currentMenu) {
      setMenu(currentMenu);
    }

    function openMenu() {
      menuRef.current.style.right="0";
    }

    function closeMenu() {
      menuRef.current.style.right="-350px";
    }

  return (
    <div className='navbar'>
      <img className='image' src={logo} />
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu} />
        <li className='li1'><Link to='navbar' smooth='true' offset={-10} duration={900}><p onClick={() => handleSetMenu("home")}>Home</p></Link>{menu==="home" ? <img src={underline}/>: <></>}</li>
        <li className='li2'><Link to='about' smooth='true' offset={-20} duration={900}><p onClick={() => handleSetMenu("about")}>About Me</p></Link>{menu==="about" ? <img src={underline}/>: <></>}</li>
        <li className='li3'><Link to='skill' smooth='true' offset={-30} duration={900}><p onClick={() => handleSetMenu("skill")}>Skills</p></Link>{menu==="skill" ? <img src={underline}/>: <></>}</li>
        <li className='li4'><Link to='services' smooth='true' offset={-50} duration={900}><p onClick={() => handleSetMenu("services")}>Services</p></Link>{menu==="services" ? <img src={underline}/>: <></>}</li>
        <li className='li5'><Link to='mywork' smooth='true' offset={-90} duration={900}><p onClick={() => handleSetMenu("portfolio")}>Portfolio</p></Link>{menu==="portfolio" ? <img src={underline}/>: <></>}</li>
        <li><Link to='contact' smooth='true' offset={-35} duration={900}><p onClick={() => handleSetMenu("contact")}>Contact</p></Link>{menu==="contact" ? <img src={underline}/>: <></>}</li>
      </ul>
      <div className='nav-connect'><Link to='contact' smooth='true' offset={-35} duration={900}>Connect with me</Link></div>
    </div>
  )
}

export default Navbar
