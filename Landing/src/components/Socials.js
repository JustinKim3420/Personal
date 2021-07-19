import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram , faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
  <ul className='nav-items text-right'>
    <li className='inline'><a href='https://www.instagram.com/kevinwumbo/' className='nav-icon'><FontAwesomeIcon className='icon' icon={faInstagram}/></a></li>
    <li className='inline'><a href='https://github.com/JustinKim3420' className='nav-icon'><FontAwesomeIcon className='icon' icon={faGithub}/></a></li>
    <li className='inline'><a href='https://www.linkedin.com/in/j-kim97/' className='nav-icon'><FontAwesomeIcon className='icon' icon={faLinkedin}/></a></li>
  </ul>);
};

export default Socials