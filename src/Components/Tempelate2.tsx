import React, { useRef, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import Loader from "./Loader";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  about: string;
  phone: number;
  address: string;
  skill1: string; 
  skill2: string; 
  skill3: string; 
  skill4: string; 
  skill5: string; 
  skill6: string; 
  skill7: string; 
  skill8: string; 
  history1: string;
  history2: string;
  history3: string;
  history4: string;
  ed1: string;
  affilation1: string;
  affilation2: string;
}
const Template2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    about: "",
    phone: 0,
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
  const divToConvertRef = useRef<HTMLDivElement | null>(null);
  const [showAlternateComponent, setShowAlternateComponent] = useState(true);

  const handleDownloadPDF = () => {
    const divToConvert = divToConvertRef.current;
    if (divToConvert) {
      const pdfOptions = {
        margin: 0,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(divToConvert).set(pdfOptions).save("Resume.pdf");
    }
  };

  // ... rest of your component code
  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedData = localStorage.getItem("formData"); // Use the correct key here
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    const timer = setTimeout(() => {
      setShowAlternateComponent(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  if (showAlternateComponent) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <div className="px-12" ref={divToConvertRef}>
          <div className="flex  mt-12 justify-between top ">
            <h1 className="flex uppercase font-medium text-5xl">
              {formData.fname} 
              <span className="ml-2 text-red-600"> {formData.lname} </span>
            </h1>
            <div className=" flex flex-col items-center">
              <p>{formData.phone}</p>
              <p>{formData.address}</p>
              <p className="text-blue-400 ">{formData.email}</p>
            </div>
          </div>
          <div className="border-b-2 border-slate-600 mt-4  "></div>
          <div className="flex mt-4  container  ">
            <p className="uppercase text-slate-300 font-bold text-xl mr-[6rem] ">
              Professional summary
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates velit mollitia quam voluptatibus harum animi, dolorem
              unde corrupti, repellat officia sequi voluptate illum odit amet
              impedit quas ipsa quaerat modi nulla vel illo qui autem dolores.
              Accusantium aspernatur cupiditate quisquam eos minima error quas
              saepe distinctio illum, illo placeat voluptates, neque ullam
              voluptatibus inventore laborum aperiam modi temporibus atque
              assumenda.{formData.about}
            </p>
          </div>
          <div className="flex mt-4  container  ">
            <p className="uppercase text-slate-300 font-bold text-xl mr-[11rem] ">
              Skills
            </p>
            <p className="flex space-x-[8rem]">
              <ul className="flex flex-col">
                <li>{formData.skill1} </li>
                <li>{formData.skill2} </li>
                <li>{formData.skill3} </li>
                <li>{formData.skill4} </li>
              </ul>

              <ul className="flex flex-col">
                <li>{formData.skill5}</li>
                <li>{formData.skill6}</li>
                <li>{formData.skill7}</li>
                <li>{formData.skill8}</li>
              </ul>
            </p>
          </div>
          <div className="flex mt-4  container  ">
            <p className="uppercase text-slate-300 font-bold text-xl mr-[6rem] ">
              Professional Skills
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates velit mollitia quam voluptatibus harum animi, dolorem
              unde corrupti, repellat officia sequi voluptate illum odit amet
              impedit quas ipsa quaerat modi nulla vel illo qui autem dolores.
              Accusantium aspernatur cupiditate quisquam eos minima error quas
              saepe distinctio illum, illo placeat voluptates, neque ullam
              voluptatibus inventore laborum aperiam modi temporibus atque
              assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Tempore sed facere quia commodi velit officia iusto hic
              eligendi harum nulla numquam, expedita fugit distinctio nemo quis
              suscipit dicta voluptas accusantium aliquam incidunt deleniti
              magnam architecto voluptatibus! Ut minima maiores ad voluptates
              recusandae. Exercitationem a doloremque nemo aliquam odit placeat,
              animi eos aut, saepe reprehenderit error consequuntur fugit.
            </p>
          </div>

          <div className="flex mt-4  container ">
            <p className="uppercase text-slate-300 font-bold text-xl mr-[10rem] ">
              Work History
            </p>
            <p>
      {formData.history1}
            </p>
            <p>
      {formData.history2}
            </p>
            <p>
      {formData.history3}
            </p>
            <p>
      {formData.history4}
            </p>
          </div>
          <div className="flex mt-4  mb-12    ">
            <p className="uppercase text-slate-300 font-bold text-xl mr-[8rem] ">
              Education
            </p>
            <p>{formData.ed1}</p>
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 bg-purple-700 border-2 border-purple-700  text-white transform -translate-x-1/2 mb-4 hover:bg-purple-500 active:bg-gray-400 active:text-white">
          <button
            onClick={handleDownloadPDF}
            className="download z-50 font-semibold p-4 text-xl uppercase"
          >
            Download Pdf
          </button>
        </div>
      </>
    );
  }
};

export default Template2;
