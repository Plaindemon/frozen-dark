import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent } from './HeroEl';
import ash from '../../assets/images/ash1.gif';
import Typewriter from 'typewriter-effect';
import "./hero.css"




const HeroSection = (props) => {
  return (
    <>
      <HeroContainer>
          <HeroBg>
              { props.img !== undefined ? 
              <img src={props.img} alt ="hero "/> : 
              <img src={ash} alt ="hero " className="hero-img" />
            } 
          </HeroBg>
          <HeroContent>
              <HeroText>
              <Typewriter
              onInit = { (typewriter) => {
                  typewriter
                  .typeString("I wanna be the very best like no one ever was to catch them is my real test to train them is my cause.....")
                  .pauseFor(500)
                  .start();
              }}
              />
                </HeroText>
                {/* <AboutUs /> */}
          </HeroContent>
      </HeroContainer>
      
      </>

  )
};

export default HeroSection;