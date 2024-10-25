import { useContext, useEffect, useState } from "react";
import FullStack from "./FullStack";
import { AuthContext } from "../../../context/useContextProjects";

const FullStacks = () => {
  const {getFilteredProjects}= useContext(AuthContext)
  const fullStacks = getFilteredProjects('fullStack');
  console.log(fullStacks,"full stack data ")
   const [loading, setLoading] = useState(true); 
   

  return (
    <div>
  
     
          {/* JavaScript Projects */}
          <div className="mt-6">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
              {fullStacks?.map((fullStack) => (
                <FullStack key={fullStacks._id} fullStack={fullStack} />
              ))}
            </div>
          </div>
       
    </div>
  );
};

export default FullStacks;
