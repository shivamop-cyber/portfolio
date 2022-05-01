import React from 'react';
import './education.css';
import { MdOutlineSchool } from 'react-icons/md';

const Education = () => {
  return (
    <section id='education'>
      <h5>Academics</h5>
      <h2>Education Details</h2>
      <div className='container education__container'>
        <div className='education__frontend'>
          <div className='education__content'>
            <article className='education__details'>
              <MdOutlineSchool className='education__details-icon' />
              <div className='education__columns'>
                <div>
                  <h4>B.tech (I.T.)</h4>
                  <small className='text-light'>Amity University, Noida</small>
                </div>
                <h4>2019-2023</h4>
                <div className='education__score'>9.40 CGPA</div>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineSchool className='education__details-icon' />
              <div className='education__columns'>
                <div>
                  <h4>
                    12<sup>th</sup>
                  </h4>
                  <small className='text-light'>
                    Devprayag School and <br /> College
                  </small>
                </div>
                <h4>2018</h4>
                <div className='education__score'>80%</div>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineSchool className='education__details-icon' />
              <div className='education__columns'>
                <div>
                  10<sup>th</sup> <br />
                  <small className='text-light'>
                    Devprayag School and <br /> College
                  </small>
                </div>
                <h4>2016</h4>
                <div className='education__score'>86.4%</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
