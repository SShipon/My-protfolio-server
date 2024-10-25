import { useContext, useState } from "react";
import { AuthContext } from "../../../context/useContextProjects";
import AllProject from "./AllProject";

const ProjectsAll = () => {
  const {getFilteredProjects}= useContext(AuthContext)
  const fullStacks = getFilteredProjects('fullStack');
  const frontend  = getFilteredProjects('frontend');
  const javaScript = getFilteredProjects('javaScript');
  const allProjects = [...frontend , ...fullStacks, ...javaScript];
   

  return (
    <div>
  
     
          
         <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
              {allProjects?.map((project) => (
                <AllProject key={project._id} project={project} />
              ))}
            </div>
          </div> 
       
    </div>
  );
};

export default ProjectsAll;
