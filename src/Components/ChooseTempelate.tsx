import React from "react";
import template1Img from "../assets/tempelate1.jpg";
import template2Img from "../assets/tempelate2.jpg";
import { Link } from "react-router-dom";
const ChooseTemplate: React.FC = () => {
  return (
    <>
      <h2 className="uppercase text-2xl mt-4 font-bold text-center">
        Choose a tempelate
      </h2>
      <div className="flex justify-evenly mt-2 items-center h-[100vh]">
        <div className=" imgBox flex flex-col">
          <Link to="/template1" className="text-center font-semibold text-xl">
            Template1
            <img
              src={template1Img}
              className=" templateImg border-solid border-2 border-purple-500 w-[18rem] mt-2"
              alt=""
            />
          </Link>
        </div>
        <div className=" imgBox flex flex-col">
          <Link className="text-center font-semibold text-xl" to="/template2">
            Template 2
            <img
              className="w-[18rem] templateImg border-solid border-2 border-purple-500  mt-2"
              src={template2Img}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
