/* eslint-disable react/prop-types */



const Service = ({ professional }) => {
  // console.log(professional)
  const { name, description, icon, bgClass } = professional;
  
  return (
    <div className={`card  shadow-2xl gradient-border  text-white lg:p-2 py-[40px] sm:w-[100%] sm:h-[100%] w-[300px] sh-[450px] shadow-3xl ${bgClass}`}>
      <div className="card-body">
        <h3 className="text-6xl"> {icon}</h3>
        <h1 className="text-1xl  font-bold">{name}</h1>
        <p className=""> <br/>{description}</p> 
      </div>
        <button className="service__hero__btn service__hero__btn:hover gradient-border  font-bold">Learn More <i className="fa-solid fa-angles-right"></i></button>
        <br />
    </div>
  );
};

export default Service;