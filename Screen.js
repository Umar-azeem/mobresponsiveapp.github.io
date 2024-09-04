import React from 'react';
import screen1 from '../img/screen1.jpg';
import screen2 from '../img/screen2.jpeg';
import screen3 from '../img/screen3.jpg';
import screen4 from '../img/screen4.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function Screen() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <section className='bg-gray-100 m-10 '>
      <div className='  m-16 '>
        <div className="flex flex-col center justify-center lg:h-36 ">
          <h6 className="text-gray-500 text-center text-sm">GALLERY</h6>
          <h1 className="text-purple-800 md:text-4xl text-center font-bold">App Screenshots</h1>
        </div>
      </div>
      <div className="slider-   ">
        <Slider {...settings}>
          <div > 
            <img src={screen1} />
          </div>
          <div >
            
            <img src={screen3} />
          </div>
          <div >
          <img src={screen2} />
          </div>
          <div>
            <img src={screen4} />
          </div>
        </Slider>
      </div>
    </section>
  );
}
