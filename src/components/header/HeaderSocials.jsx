import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/shivam-singh-182a801a5/'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a
        href='https://github.com/shivamop-cyber'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
