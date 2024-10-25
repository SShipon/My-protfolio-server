/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactAnimate from "./ContactAnimate";
import { motion } from "framer-motion";
import { fadeIn } from '../../hooks/variant';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7fw8tc",
        "template_y10yfz7",
        form.current,
        "0AGx-yacdwuJYI7go"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
          });
    
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact"
      style={{
      /*   background: `url(${appointment})`, */
      }}
       className="sm:my-12"
    >
      <div className="text-center pb-14 text-white contact_content">

      <br />
      <br />

        <div className="my-12">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="my-10"
        >
                        <h2
        className="text-white text-center [leading-trim:both] [text-edge:cap] lg:text-5xl text-xl not-italic font-semibold leading-[normal] font-outfit relative my-10 uppercase"
      >
       CONTACT US
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="18"
          viewBox="0 0 256 18"
          fill="none"
          className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2"
        >
          <path
            d="M253 15.0003C192 0.000329018 75 0.000244617 3 11.0003"
            stroke="url(#paint0_linear_22_140)"
            stroke-width="5"
            stroke-linecap="round"></path>
          <defs>
            <linearGradient
              id="paint0_linear_22_140"
              x1="264"
              y1="15.3887"
              x2="-13.4"
              y2="23.754"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3F1EFF"></stop>
              <stop offset="0.415" stop-color="#F459FF"></stop>
              <stop offset="0.69" stop-color="#FC6A93"></stop>
              <stop offset="1" stop-color="#FFF2A2"></stop>
            </linearGradient>
          </defs>
        </svg>
      </h2>
        </motion.div>
        </div>
        <span className="text-2xl lg:text-3xl text-white  italic p-4 ">Stay connected with us</span>
      </div>
      <div className="mt-20">
      <div className="flex lg:flex-row flex-col justify-center gap-10 ">

      <div className="lg:w-1/2 w-full lg:relative ">
       <div className="lg:w-[800px] lg:absolute lg:-left-20">
       <ContactAnimate />
      </div> 
      </div>

        <div className="lg:w-1/2 w-full">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 justify-items-center gap-5">
              <input
                type="text"
                placeholder="Name*"
                name="user_name}"
                className="input w-full   max-w-md  outline-none border border-purple-950	
                 "
                required
              />
              <input
                type="text"
                placeholder="Email Address*"
                name="user_email"
                className="input w-full max-w-md  outline-none border border-purple-950	 "
                required
              />
              <input
                type="text"
                placeholder="Subject*"
                name="from_name"
                className="input w-full max-w-md outline-none border border-purple-950	"
                required
              />
              <textarea
                className="textarea w-full max-w-md outline-none border border-purple-950	"
                placeholder="Your message*"
                name="message"
                required
                rows={6}
              ></textarea>
            <button className="contact_hero__btn contact_hero__btn:hover gradient-border w-full lg:w-[78%]  font-bold" value="send"type="Submit"  >
                Submit
              </button>
            </div>
           
          </form>
        </div>
         
      </div>
      </div>
      <ToastContainer />

     
    </section>
  );
};

export default Contact;
