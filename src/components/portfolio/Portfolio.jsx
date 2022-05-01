import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item image'>
            <img src={IMG1} alt='portfoliImg' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>
              Github
            </a>
            <a href='https://github.com' className='btn btn-primary'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
