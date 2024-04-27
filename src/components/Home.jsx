import React from 'react'
import  { useEffect, useRef } from "react";
import pdf from '../pdf/Hari _Narayan.pdf'
import hero from './data/hero.json'
import Typed from "typed.js";

const Home = () => {
   const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Hari Narayan",
        "I'm Frontend developer",
        "Software developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id='Home'
        className="container home"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <div className="left">
          <h1 ref={typedRef}></h1>
          <a
            href={pdf}
            download="Hari_Narayan.pdf"
            className="btn btn-outline-warning"
          >
            {" "}
            Download resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt={"hero"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
