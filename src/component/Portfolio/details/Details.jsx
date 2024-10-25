import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../context/useContextProjects";

const Details = () => {
  const { id } = useParams(); 
  const { data } = useContext(AuthContext); 
  const project = data.find((item) => item._id === id);
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="bg-[#0b041e] pt-20 lg:pt-20 lg:p-8 ">
      <div className="flex lg:flex-row flex-col justify-center ">
        <div>
          <div className="image___warp w-[330px] h-[300px] md:w-[360px] md:h-[300px] lg:w-[465px] lg:h-[630px] gradient-border overflow-hidden relative game__box">
            <img
              className="w-[100%] h-[100%] object-cover overflow-x-hidden relative rounded-xl"
              src={project.img}
              alt={project.name}
            />
          </div>
        </div>

        <div className=" my-8 px-8">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-lg my-3">{project.des}</p>

          <h3 className="text-1xl font-semibold mt-5">Project Description</h3>
          <p>{project.ProjectDescription}</p>

          <h3 className="text-2xl font-semibold mt-5">Technologies Used</h3>
          <ul className="pl-5">
  {project.technologies?.map((tech, index) => (
    <li key={index} className="flex items-center space-x-2">
      <i className="fas fa-cog"></i>
      <span>{tech}</span>
    </li>
  ))}
</ul>

        </div>
      </div>
    </div>
  );
};

export default Details;
