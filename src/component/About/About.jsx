import Portfolio from "../../assets/Portfolio/porfile (4).png";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { fadeIn } from '../../hooks/variant';
const About = () => {
  return (
    <div id="about" className="my-20">
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
   ABOUT ME
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

      <div className="flex  flex-col lg:flex-row justify-center  items-center">
        <div className="lg:w-3/5">
        <p className="lg:text-justify leading-normal">
  I'm a Shipon passionate MERN stack developer with a strong command of modern web technologies and a keen eye for detail. With expertise in HTML, CSS, JavaScript, and front-end frameworks like React.js and Redux, I bring user interfaces to life with clean, responsive, and dynamic designs. On the back-end, I harness the power of Node.js, Express.js, and TypeScript to build robust, scalable applications. My experience with Next.js enhances my ability to deliver fast, SEO-optimized solutions, while my proficiency in Git and version control ensures smooth collaboration in any team environment. I thrive on problem-solving, continuously learning, and staying up-to-date with the latest trends in web development to create innovative solutions that meet both user needs and business goals. Let’s build something exceptional together!
</p>

          <div class="mt-8">
            <HashLink to="/home#contact">
              {" "}
              <button className="about__hero__btn about__hero__btn:hover gradient-border  font-bold">
                Hire Me <i className="fa-solid fa-angles-right"></i>
              </button>
            </HashLink>
            <br />
          </div>
        </div>
        <div className="lg:w-2/5  sm:order-1 -order-1 py-10 flex justify-end gradient-borde">
          <img className="w-[350px] rounded-full  border-2 border-purple-500" src={Portfolio} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
