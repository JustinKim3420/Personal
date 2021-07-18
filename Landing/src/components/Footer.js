import React from "react";
import {Link} from 'react-router-dom'

const Footer = ({navItems}) => {



  return (
    <footer className="footer">
        <ul className="footer-list">
            {
                navItems.map((item)=>{
                    return(<li key={item}><Link className='footer-link' to={`/${item}`}>{item}</Link></li>)
                })
            }
        </ul>
    </footer>
  );
};

export default Footer;
