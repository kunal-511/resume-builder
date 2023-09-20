import { useState, useEffect, useRef } from "react";
import { ImLocation } from "react-icons/im";
import { BiSolidPhone } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
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

function Template1() {
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
  const divToConvertRef = useRef(null);
  const [showAlternateComponent, setShowAlternateComponent] = useState(true);

  const handleDownloadPDF = () => {
    const divToConvert = divToConvertRef.current;
    if (divToConvert) {
      const pdfOptions = {
        margin: 10,
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "", orientation: "landscape" },
      };
      html2pdf().from(divToConvert).set(pdfOptions).save("Resume.pdf");
    }
  };

  useEffect(() => {
    
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    const timer = setTimeout(() => {
      setShowAlternateComponent(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []); 

  if (showAlternateComponent) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <div className="flex" ref={divToConvertRef}>
          <div className="w-[70%]  p-12 bg-white text-slate-600">
            <h1 className="text-5xl font-bold uppercase mainHead">
           
              {formData.fname} {formData.lname}
            </h1>
            <div className="border-b-2 border-slate-600 mt-4 Hline "></div>
            <div className="mt-12">
              <p className="uppercase font-bold text-3xl mainHead">
                Professional Summary
              </p>
              <div className="border-b-2 border-slate-600 mt-4 Hline "></div>
              <p className="mt-4 text-slate-900 text-[1rem]  ">
                {formData.about} 
              </p>
            </div>
            <div className="mt-6">
              <p className="uppercase font-bold text-3xl mainHead">work history</p>
              <div className="border-b-2 border-slate-600 mt-4 Hline"></div>
              <p className="mt-4 text-slate-900 text-[1rem] ">
               {formData.history1}
              </p>
              <p className="mt-4 text-slate-900 text-[1rem]">
              {formData.history2}
              </p>
              <p className="mt-4 text-slate-900 text-[1rem]">
              {formData.history3}
              </p>
              <p>
              {formData.history4}
              </p>
            </div>
          </div>
          <div className="w-[30%]   bg-slate-500 text-white">
            <div className="pt-12 px-12 ">
              <div className="flex details items-center ">
                <span className="bg-white circle w-[32px] h-[32px] p-2 mr-3 ">
                  <ImLocation className="mr-4  text-slate-500" />
                </span>
                <p>{formData.address}</p>
              </div>
              <div className="flex details items-center mt-3">
                <span className="bg-white circle w-[32px] h-[32px] p-2 mr-3">
                  <BiSolidPhone className="mr-4  text-slate-500" />
                </span>
                <p>{formData.phone}</p>
              </div>
              <div className="flex details  items-center mt-3">
                <span className="bg-white circle w-[32px] h-[32px] p-2 mr-3">
                  <IoIosMail className="mr-4  text-slate-500" />
                </span>
                <p>{formData.email}</p>
              </div>
            </div>
            <div className="mt-8 heads ">
              <p className="uppercase text-2xl font-bold px-12  ">Skills</p>
              <div className="border-b-2 border-white mr-12 mt-1 mb-4 "></div>
              <ul className="px-12 ml-4 list-disc ">
                <li>{formData.skill1}</li>
                <li>{formData.skill2}</li>
                <li>{formData.skill3}</li>
                <li>{formData.skill4}</li>
                <li>{formData.skill5}</li>
                <li>{formData.skill6}</li>
                <li>{formData.skill7}</li>
                <li>{formData.skill8}</li>
              </ul>
            </div>
            <div className="mt-8 heads ">
              <p className="uppercase text-2xl font-bold px-12 heads ">Education</p>
              <div className="border-b-2 border-white mr-12  mt-1 mb-4 "></div>
              <ul className="px-12 ml-4 list-disc ">
                <li>{formData.ed1}</li>
               
              </ul>
            </div>
            <div className="mt-8 heads ">
              <p className="uppercase text-2xl font-bold px-12  ">
                Affiliations
              </p>
              <div className="border-b-2 border-white mr-12 mt-1 mb-4 "></div>
              <ul className="px-12 ml-4 list-disc ">
                <li>{formData.affilation1}</li>
                <li>{formData.affilation2}</li>
          
              </ul>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-1/2 bg-slate-400 border-2 border-slate-400   text-white transform -translate-x-1/2 mb-4  hover:bg-gray-200 hover:text-black active:bg-purple-500 active:text-white">
          <button
            onClick={handleDownloadPDF}
            className=" download z-50  font-semibold p-3 text-xl uppercase  "
          >
            Download Pdf
          </button>
        </div>
      </>
    );
  }
}

export default Template1;
