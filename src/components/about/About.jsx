import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='AboutIMG' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <div className='about__card'>
              <FaAward className='about__icon' />
              <h5>Competitive Programmer</h5>
              <small>4⭐ @codechef and Pupil @codeforces</small>
            </div>
            <div className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Fullstack Developer</h5>
              <small>Built multiple projects MERN stack</small>
            </div>
            <div className='about__card'>
              <AiOutlineLaptop className='about__icon' />
              <h5>Problem Solver</h5>
              <small>Solved 700+ problems on coding platforms</small>
            </div>
          </div>

          <p>
            I'm a highly motivated and enthusiastic person who loves learning
            new technologies and working on them. I'm keen on joining the
            industry and building the technologies that impact the masses.
          </p>
          <div className='btn-center'>
            <a href='#contact' className='btn btn-primary'>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
