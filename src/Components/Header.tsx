import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'Services') {
      navigate('/services');
    } else if (selectedValue === 'Template1') {
      navigate('/template1');
    } else if (selectedValue === 'Template2') {
      navigate('/template2');
    }
  };


  return (
    <div className="px-6 py-4 bg-purple-500">
      <nav className="flex nav justify-between text-white items-center">
        <h1 className=" font-semibold text-4xl hover:text-purple-200"> <Link to="/"> Resume Builder</Link></h1>
        <ul className="flex space-x-5 text-xl">
          <li className=" hover:text-purple-200">
            <Link to="/resume-builder">Home</Link>
          </li>
          <li className=" hover:text-purple-200" >
            <Link to="/about">About</Link>
          </li>
          <li className=" hover:text-purple-200">
            <select
              className="cursor-pointer bg-purple-500"
              onChange={handleOptionChange}
              value="" 
            >
              <option className=" hidden" value="">Create Resume</option>
              <option className="cursor-pointer" value="Services">Services</option>
              <option className="cursor-pointer" value="Template1">Template1</option>
              <option className="cursor-pointer" value="Template2">Template2</option>
            </select>
          </li>
          <li className=" hover:text-purple-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
