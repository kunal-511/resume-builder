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
    skill5: "",
    skill6: "",
    skill7: "",
    skill8: "",
    history1: "",
    history2: "",
    history3: "",
    history4: "",
    ed1: "",
    affilation1: "",
    affilation2: "",
  });
  const [showOptions, setShowOptions] = useState(false);
  const [moreSkills, setMoreSkills] = useState(false);
  const [moreHistory, setMoreHistory] = useState(false);

  useEffect(() => {
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

    localStorage.setItem(
      "formData",
      JSON.stringify({ ...formData, [name]: value })
    );
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOptions(true);
  };
  const handleMoreSkills = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMoreSkills(true);
  };
  const handleMoreWorkHistory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMoreHistory(true);
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
          <img className="w-[30%] hidden" src={background} alt="" />
          <form
            className=" w-[70%] px-4  text-white text-[1.2rem] flex flex-col justify-center "
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
                <label htmlFor="phone" className="cursor-pointer">
                  Phone Number:
                </label>
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
                <label htmlFor="email" className="cursor-pointer">
                  Email:
                </label>
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
                <label htmlFor="address" className="cursor-pointer">
                  Address:
                </label>
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
                <label htmlFor="about" className="cursor-pointer">
                  About:
                </label>
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
                <label htmlFor="skill1" className="cursor-pointer">
                  Skill1:
                </label>
                <input
                  type="text"
                  id="skill1"
                  className="border-2 border-black text-black w-[10rem] rounded-md"
                  name="skill1"
                  value={formData.skill1}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill2" className="cursor-pointer">
                  Skill2:
                </label>
                <input
                  type="text"
                  id="skill2"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill2"
                  value={formData.skill2}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill3" className="cursor-pointer">
                  Skill3:
                </label>
                <input
                  type="text"
                  id="skill3"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill3"
                  value={formData.skill3}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill4" className="cursor-pointer">
                  Skill4:
                </label>
                <input
                  type="text"
                  id="skill4"
                  className="border-2 border-black text-black  w-[10rem] rounded-md   "
                  name="skill4"
                  value={formData.skill4}
                  onChange={handleInputChange}
                />
              </div>

              <button
                onClick={handleMoreSkills}
                className={moreSkills ? "hidden" : "block"}
              >
                add more skils
              </button>
            </div>
            <div className={moreSkills ? "block" : "hidden"}>
              <div>
                <label htmlFor="skill5" className="cursor-pointer">
                  Skill5:
                </label>
                <input
                  type="text"
                  id="skill5"
                  className="border-2 border-black text-black w-[10rem] rounded-md"
                  name="skill5"
                  value={formData.skill5}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill6" className="cursor-pointer">
                  Skill6:
                </label>
                <input
                  type="text"
                  id="skill6"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill6"
                  value={formData.skill6}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill3" className="cursor-pointer">
                  Skill7:
                </label>
                <input
                  type="text"
                  id="skill7"
                  className="border-2 border-black text-black  w-[10rem] rounded-md"
                  name="skill7"
                  value={formData.skill7}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="skill8" className="cursor-pointer">
                  Skill8:
                </label>
                <input
                  type="text"
                  id="skill8"
                  className="border-2 border-black text-black  w-[10rem] rounded-md   "
                  name="skill8"
                  value={formData.skill8}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="history1" className="cursor-pointer">
                Work History1:
              </label>
              <input
                type="text"
                id="history1"
                className="border-2 border-black text-black rounded-md"
                name="history1"
                value={formData.history1}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="history2" className="cursor-pointer">
                Work History2:
              </label>
              <input
                type="text"
                id="history2"
                className="border-2 border-black text-black rounded-md"
                name="history2"
                value={formData.history2}
                onChange={handleInputChange}
              />
            </div>
            <button
              onClick={handleMoreWorkHistory}
              className={moreHistory ? "hidden" : "block"}
            >
              Add more work History
            </button>
            <div className={moreHistory ? "block" : "hidden"}>
              <div className="my-2 flex justify-start space-x-2">
                <label htmlFor="history3" className="cursor-pointer">
                  Work History3:
                </label>
                <input
                  type="text"
                  id="history3"
                  className="border-2 border-black text-black rounded-md"
                  name="history3"
                  value={formData.history3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="my-2 flex justify-start space-x-2">
                <label htmlFor="history4" className="cursor-pointer">
                  Work History4:
                </label>
                <input
                  type="text"
                  id="history4"
                  className="border-2 border-black text-black rounded-md"
                  name="history4"
                  value={formData.history4}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="ed1" className="cursor-pointer">
                Education:
              </label>
              <input
                type="text"
                id="ed1"
                className="border-2 border-black text-black rounded-md"
                name="ed1"
                value={formData.ed1}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="affilation1" className="cursor-pointer">
                Affilation1
              </label>
              <input
                type="text"
                id="affilation1"
                className="border-2 border-black text-black rounded-md"
                name="affilation1"
                value={formData.affilation1}
                onChange={handleInputChange}
              />
            </div>
            <div className="my-2 flex justify-start space-x-2">
              <label htmlFor="affilation2" className="cursor-pointer">
                Affilation2:
              </label>
              <input
                type="text"
                id="affilation2"
                className="border-2 border-black text-black rounded-md     "
                name="affilation2"
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
      </div>
    );
  }
}

export default Services;
