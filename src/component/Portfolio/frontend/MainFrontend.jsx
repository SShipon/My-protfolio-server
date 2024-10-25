import { useContext,  useState } from "react";
import { AuthContext } from "../../../context/useContextProjects";
import Frontend from "./Frontend";



const MainFrontend = () => {
  const {getFilteredProjects}= useContext(AuthContext)
  const MainFrontend = getFilteredProjects('frontend');

   const [loading, setLoading] = useState(true); 
   

  return (
    <div>
  
     
          {/* JavaScript Projects */}
          <div className="mt-6">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
              {MainFrontend?.map((frontend) => (
                <Frontend key={frontend._id} frontend={frontend} />
              ))}
            </div>
          </div>
       
    </div>
  );
};

export default MainFrontend;
