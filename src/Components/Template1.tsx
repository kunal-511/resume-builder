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
  skill1: string; // Changed from skil11
  skill2: string; // Changed from skil12
  skill3: string; // Changed from skil13
  skill4: string; // Changed from skil14
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
                {formData.about} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa quibusdam obcaecati ipsum officiis,
                reprehenderit at pariatur consectetur eaque enim impedit sequi
                aspernatur illum optio sed nobis dolorum exercitationem
                reiciendis ex nihil minima iure vel eligendi maiores. Laudantium
              </p>
            </div>
            <div className="mt-6">
              <p className="uppercase font-bold text-3xl mainHead">work history</p>
              <div className="border-b-2 border-slate-600 mt-4 Hline"></div>
              <p className="mt-4 text-slate-900 text-[1rem] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In est
                aperiam rerum m Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Incidunt ipsum reprehenderit commodi nisi
                itaque neque deserunt quaerat voluptas dicta. Vero aut libero
                blanditiis incidunt fuga doloribus, nemo aliquid laudantium
                mollitia minus similique natus reiciendis reprehenderit odio
                voluptatibus quidem doloremque. Maxime, esse recusandae
              </p>
              <p className="mt-4 text-slate-900 text-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In est
                aperiam rerum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Laboriosam voluptatibus excepturi quibusdam iusto illo?
                Soluta, possimus! Quia praesentium accusamus omnis, fugit cumque
                porro eius ipsam quibusdam adipisci. Assumenda distinctio vitae
                ab vel dolor inventore ipsum quam aperiam, sunt explicabo,
              </p>
              <p className="mt-4 text-slate-900 text-[1rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In est
                aperiam rerum Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Amet vero, accusantium rerum nostrum deserunt
                soluta odio eligendi dolores ex voluptatibus? Architecto vero
                provident soluta nobis perferendis cum, accusantium totam
                similique doloremque molestiae natus, corporis quis quas
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
              </ul>
            </div>
            <div className="mt-8 heads ">
              <p className="uppercase text-2xl font-bold px-12 heads ">Education</p>
              <div className="border-b-2 border-white mr-12  mt-1 mb-4 "></div>
              <ul className="px-12 ml-4 list-disc ">
                <li>{formData.ed1}</li>
                {/* <li>Dugar</li>
              <li>Dugar</li>
              <li>Dugar</li> */}
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
                {/* <li>Dugar</li>
              <li>Dugar</li> */}
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
