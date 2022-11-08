import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Kontakt() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const id = toast.loading("Sender mail..", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: true,
      closeOnClick: true,
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "Din besked er sendt!",
            type: "success",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.update(id, {
            render: "Noget gik galt!",
            type: "error",
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        }
      );
  };

  return (
    <main>
      <ToastContainer />
      <div className="bg-[#173518] navbar-bg">
        {/* navbar background image */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"></div>
      </div>
      <div className="flex p-3 flex-col md:hidden justify-center items-center">
        <h1 className="text-3xl font-bold text-[#173518] font-manrope">
          Virker det spændende?
        </h1>
        <div className="flex flex-col gap-3 w-[80%] p-3">
          <p>
            Vi har desværre ikke muligheden for at være i huset året rundt,
            hvorfor vi gerne vil dele det med andre.
          </p>
          <p>Kontakt os gerne for at høre mere om mulighederne for at besøge Hoedspruit og leje huset.</p>
        </div>
      </div>
      <div className="flex w-full justify-center md:pt-20 lg:pt-28">
        <div className="w-[70%] flex justify-center items-center">
          <div className="md:w-[50%] w-full h-full flex flex-col">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col items-center m-3">
                <input
                  type="text"
                  name="from_name"
                  className="border-[#173518] border-2 md:w-[50%] w-[100%] rounded-lg p-2 mt-5"
                  placeholder="Navn"
                />
                <input
                  type="text"
                  name="knowhow"
                  className="border-[#173518] text-[#173518] border-2 md:w-[50%] w-[100%] rounded-lg p-2 mt-5"
                  placeholder="Hvem har du hørt om huset fra?"
                />
                <input
                  type="email"
                  name="email"
                  className="border-[#173518] text-[#173518] border-2 md:w-[50%] w-[100%] rounded-lg p-2 mt-5"
                  placeholder="Indtast din email"
                />
                <textarea
                  name="message"
                  className="border-[#173518] text-[#173518] border-2 md:w-[50%] w-[100%] rounded-lg p-2 mt-5 h-24"
                  placeholder="Skriv din besked her"
                />
                {/* submit btn */}
                <button
                  type="submit"
                  className="bg-[#173518] text-white font-bold py-2 px-4 rounded mt-5"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="flex-col w-[50%] items-center hidden md:flex">
            <h1 className="text-6xl xxs:text-10xl text-center items-center font-bold text-[#173518] font-manrope">
              Virker det spændende?
            </h1>
            <p className="text-2xl font-normal text-[#173518] pt-3 font-manrope">
              Vi vil rigtig gerne høre fra dig, hvis du/I har spørgsmål eller
              vil høre mere om huset, eller ønsker at leje det.
            </p>
            <p className="text-2xl font-normal text-[#173518] pt-3 font-manrope">
              Hvis du vil vide mere, så udfyld endelig formularen, så vil vi
              kontakte dig hurtigst muligt.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Kontakt;
