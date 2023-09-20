import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/carouselImg.png" ;
import img2 from "../assets/images.png";
import vg from "C:/Users/Hp/OneDrive/Desktop/full web devleopment/ReactJs_2/React-projects/project1/src/Assets/2.webp";

const Home: React.FC = () => {
  return (
    <div className="mt-10">
      <MyCarousel />
    </div>
  );
};

const MyCarousel: React.FC = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
      >
        {/* Add your slides here */}
        <div>
          <img className="" src={img1} alt="Slide 1" />
          {/* <p className="legend">Slide 1</p> */}
        </div>

        <div>
          <img className="" src={img2} alt="Slide 2" />
          {/* <p className="legend">Slide 2</p> */}
        </div>

   
      </Carousel>

      <div className="w-full home2 h-full bg-custom1 my-20 px-12 flex justify-center items-center   ">
        <img className="w-[25%]  animation " src={vg} alt="" />
        <div className="w-[75%] flex  justify-center items-center p-20 h-[80vh]">
          <p className="text-white  italic text-[1.2rem] font-bold    ">
            Crafting Careers, One Resume at a Time - Your Journey to Success
            Begins Here! Elevate Your Job Prospects with Our Expertly Designed
            Resumes. Empower Your Future, Empower Yourself!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
