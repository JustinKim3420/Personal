import React from "react";
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram , faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
  return (
  <ul className='nav-items'>
    <li className='inline justify-right'><Link to='/' className='nav-icon'><FontAwesomeIcon className='icon' icon={faInstagram}/></Link></li>
    <li className='inline justify-right'><Link to='/' className='nav-icon'><FontAwesomeIcon className='icon' icon={faGithub}/></Link></li>
    <li className='inline justify-right'><Link to='/' className='nav-icon'><FontAwesomeIcon className='icon' icon={faLinkedin}/></Link></li>
  </ul>);
};

export default Socials