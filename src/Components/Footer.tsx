import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <div className="bg-purple-500 text-white p-8 mt-10">
      <footer className="flex justify-between flex-wrap">
        <div className="flex flex-col">
          <p className="text-3xl font-bold cursor-pointer uppercase">
            Resume Builder
          </p>
          <p className="flex justify-evenly mt-4 cursor-pointer text-lg">
            <BsInstagram /> <BsFacebook /> <BsTwitter />
          </p>
        </div>
        <div>
          <ul className="space-y-2 space ">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/contact"> Contact Us </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 space">
            <li className="text-xl font-semibold">Media</li>
            <li>Online</li>
            <li>Alternative Ads</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 space">
            <li className="text-xl font-semibold ">More Info</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 space ">
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </footer>
      <div className="flex justify-between mt-4 text-xs flex-wrap  ">
        <p>© 2019 Something All Rights Reserved</p>
        <div className="flex justify-evenly space-x-4">
          <p className="underline cursor-pointer">Privacy Policy </p>
          <p className="underline cursor-pointer">Terms Of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
