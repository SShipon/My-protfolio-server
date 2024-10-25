
import BlogIcon from './SvgIcon/BlogIcon';
import Four from './SvgIcon/Four';
import Second from './SvgIcon/Second';
import Third from './SvgIcon/Third';
import Service from './Service';
import { motion } from "framer-motion";
import { fadeIn } from '../../hooks/variant';

const Services = () => {
    const professionalServices =[
        {
            id:1,
            icon: <BlogIcon/>,
            name:'Licenced Providers',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available',
            bgClass:'bg-gradient'
        },
        {
            id:2,
            icon:<Second/>,
            name:' Telemedicine Available',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available',
            bgClass:'bg-gradient_one'
        },
        {
            id:3,
            icon:<Third/>,
            name:' Insurance Partners',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_there'
        },
        {
            id:4,
            icon:<Four/>,
            name:' Schedules   Visits.',
            description:'Service Content means the audio and visual information, documents, software, products and services contained or made available.',
            phone:'+880170305946512',
            bgClass:'bg-gradient_four'
        }
    ]
   
    
    return (
       <section id='services' className='flex justify-center items-center  flex-col'>
                <div className='text-center '>
<br />
<br />
<br />


  

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
What we care for 
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
                  <p className='text-2xl lg:text-3xl text-white  italic p-4'>Making professional therapy accessible</p>
                </div>
                <br />
                <br />
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 '>
             {
              professionalServices.map(professional=><Service
              key={professional.id}
              professional={professional}
              ></Service>)  
             }       
        </div>
  
       </section>
    );
};

export default Services;