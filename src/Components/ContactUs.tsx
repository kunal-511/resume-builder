import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-custom1 mt-8 flex w-full h-[120vh]">
      <main className="bg-white p-12 round-borders mt-14  h-[36rem] w-[70%] ">
        <h1 className="text-[2rem]">Contact Us</h1>
        <form className="flex m-20 flex-col justify-center items-center ">
          <div className="h-[3rem] flex items-center justify-end w-[60%] m-2">
            <label className="text-[1.2rem] ">Name</label>
            <input
              className="self-stretch w-[80%] p-4 rounded-l   "
              type="text"
              required
              placeholder="Abc"
            />
          </div>
          <div className="h-[3rem] flex items-center justify-end w-[60%] m-2">
            <label className="text-[1.2rem] ">Email</label>
            <input
              type="email"
              className="self-stretch w-[80%] p-4 rounded-l"
              required
              placeholder="Abc@xyz.com"
            />
          </div>
          <div className="h-[3rem] flex items-center justify-end w-[60%] m-2">
            <label className="text-[1.2rem] ">Message</label>
            <input
              type="text"
              className="self-stretch w-[80%] p-4 rounded-l"
              required
              placeholder="Tell us about your query...."
            />
          </div>
          <button
            className="p-[0.7rem] mx-12 bg-purple-500 text-white w-[200px] text-[1rem]"
            type="submit"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
