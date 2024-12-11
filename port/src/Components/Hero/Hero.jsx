import './Hero.css';
import profile from '../../assets/profile_img2.svg';
import { Link } from 'react-scroll';
import resume from "../../assets/ActualResume.pdf";

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={profile} alt="" />
      <h1><span>Hi  I'm  Aman Pandey</span> Frontend developer <span id='india'>based in India.</span></h1>
      <p>I am a frontend developer from Chandigarh, India with 1 years of experience of internship with multiple startups.</p>
      <div className="hero-action">
        <div className="hero-connect"><Link to='contact' smooth='true' offset={-35} duration={900}>Connect with me</Link></div>
        <div className="hero-resume">
          <a href={resume} download="ActualResume.pdf">
          My resume
          </a>
          </div>
      </div>

    </div>
  )
}

export default Hero
