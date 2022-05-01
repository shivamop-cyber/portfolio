import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Shivam
      </a>

      <div className='footer__socials'>
        <a href='https://github.com'>
          <FaGithub />
        </a>
        <a href='https://linkedin.com'>
          <BsLinkedin />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Shivam Singh</small>
      </div>
    </footer>
  );
};

export default Footer;
