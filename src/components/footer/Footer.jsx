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
        <a
          href='https://github.com/shivamop-cyber'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/shivam-singh-182a801a5/'
          target='_blank'
          rel='noreferrer'
        >
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
