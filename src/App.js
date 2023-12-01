import React from 'react'
import './App.css'
import Form from './components/Form';
import Group from "./assets/Group.svg"
import Ellipse from "./assets/Ellipse 349.png"
import Symbol from './assets/symbol 1.png';
import Frame from './assets/Frame 1073713399.svg';

const App = () => {
  return (
    <>
      <div className='main-container'>
        <div className='first-container'>
          <div className='content'>
            <div className="main-head">
              <div className="main-heading">
                <img src={Group} alt="" />
                <button className='beta-button'>Beta</button>
              </div>
              <p className='heading-para'>Powered by Aramco.AI</p>
            </div>
            <div className="img">
              <div className="big-box">
                <div className="small-box">
                  <img src={Symbol} alt="" />
                  <p className='small-box-para'>Aramco Knowledge</p>
                </div>
                <div className='nano-box'>
                  <img src={Frame} alt="" />
                  <p>Unlock the Power of Knowledge with Our Dual Knowledge Bases!
                    Dive into the Aramco Knowledge and Explore the World Knowledge. Your
                    Gateway to Discovery Starts Here!
                  </p>
                </div>
                <div className="main-img">
                  <img className='ellipse' src={Ellipse} alt="" />
                </div>
              </div>
            </div>
            <div className="para">
              <p>
                Unlock the Power of Knowledge
                with Our Dual Knowledge Bases!
                Dive into the Aramco Knowledge
                and Explore the World Knowledge. Your
                Gateway to Discovery Starts Here!
              </p>
            </div>

          </div>
        </div>
        <div className='second-container'>
          <Form />
        </div>
      </div>
    </>
  )
}

export default App