// src/Form.tsx
import React, { useState, useEffect } from "react";
import background from "../assets/background.jpg";
import ChooseTemplate from "./ChooseTempelate";
function Services() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    about: "",
    phone: "",
    address: "",
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    ed1: "",
    affilation1: "",
    affilation2: "",
  });
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Save the updated data to local storage
    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOptions(true);
  };

  if (showOptions) {
    return (
      <>
        <ChooseTemplate />
      </>
    );
  } else {
    return (
      <div className="pt-8 mt-4 text-center bg-custom1">
        <h1 className=" uppercase">Resume Builder Form</h1>
        <div className="flex">
          <img className="w-[30%]" src={background} alt="" />
          <form
            className=" w-[70%] px-4 h-[100vh] text-white text-[1.2rem] flex flex-col justify-center "
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <div className=" py-2">
                <label className="pr-2 cursor-pointer" htmlFor="fname">
                  First Name:
                </label>
                <input
                  className="w-[50%] text-black border-2 border-black rounded-md "
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                />
              </div>
              <div className=" py-2">
                <label htmlFor="lname" className="pr-2 cursor-pointer">
                  Last Name:
                </label>
                <input
                  className="w-[50%] text-black border-2 border-black rounded-md"
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-2  items-center  my-2">
                <label htmlFor="phone" className="cursor-pointer">Phone Number:</label>
                <input
                  className="w-[30%] text-black  border-2 border-black rounded-md"
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-8  justify-start my-2">
                <label htmlFor="email" className="cursor-pointer">Email:</label>
                <input
                  className="w-[30%] text-black border-2 border-black rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-3 justify-start my-2">
                <label htmlFor="address" className="cursor-pointer">Address:</label>
                <input
                  className="w-[30%] text-black  border-2 border-black rounded-md"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-7 justify-start my-2">
                <label htmlFor="about" className="cursor-pointer">About:</label>
                <input
                  className="w-[30%]  border-2 text-black border-black rounded-md"
                  type="text"
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex space-x-3 my-2 ">
              <div>
                <label htmlFor="skill1" className="cursor-pointer">Skill1:</label>
                <input
                  type="text"
                  id="skill1"
                  className="border-2 border-black text-black w-[10rem] rounded-md"
                  name="skill1" // Make sure the name attribute is "skill1" without spaces
                  value={formData.skill1}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill2" className="cursor-pointer">Skill2:</label>
                <input
                  type="text"
                  id="skill2"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill2" // Make sure the name attribute is "skill1" without spaces
                  value={formData.skill2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill3" className="cursor-pointer">Skill3:</label>
                <input
                  type="text"
                  id="skill3"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill3" // Make sure the name attribute is "skill1" without spaces
                  value={formData.skill3}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill4" className="cursor-pointer">Skill4:</label>
                <input
                  type="text"
                  id="skill4"
                  className="border-2 border-black text-black  w-[10rem] rounded-md   "
                  name="skill4" // Make sure the name attribute is "skill1" without spaces
                  value={formData.skill4}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="ed1" className="cursor-pointer">Education:</label>
              <input
                type="text"
                id="ed1"
                className="border-2 border-black text-black rounded-md"
                name="ed1" // Make sure the name attribute is "skill1" without spaces
                value={formData.ed1}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="affilation1" className="cursor-pointer">Affilation1</label>
              <input
                type="text"
                id="affilation1"
                className="border-2 border-black text-black rounded-md"
                name="affilation1" // Make sure the name attribute is "skill1" without spaces
                value={formData.affilation1}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="affilation2" className="cursor-pointer">Affilation2:</label>
              <input
                type="text"
                id="affilation2"
                className="border-2 border-black text-black rounded-md     "
                name="affilation2" // Make sure the name attribute is "skill1" without spaces
                value={formData.affilation2}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="border-2  border-black p-2 w-[8rem]  hover:bg-gray-200 hover:text-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* <div>
          <h2>User Data:</h2>
          <p>Name: {formData.fname}</p>
          <p>Name: {formData.lname}</p>
          <p>Email: {formData.email}</p>
          <p>About: {formData.about}</p>
          <p>Phone: {formData.phone}</p>
          <p>Address: {formData.address}</p>
          <p>Address: {formData.skill1}</p>
          <p>Address: {formData.skill2}</p>
          <p>Address: {formData.skill3}</p>
          <p>Address: {formData.skill4}</p>
          <p>ed: {formData.ed1}</p>
          <p>affilation1: {formData.affilation1}</p>
          <p>affilation1: {formData.affilation2}</p>
        </div> */}
      </div>
    );
  }
}

export default Services;
