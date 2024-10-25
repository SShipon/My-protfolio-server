import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/useContextProjects";
import JsAndCss from "./JsAndCss";

const JavaScriptAndCss = () => {
  const {getFilteredProjects}= useContext(AuthContext)
  const javaScript = getFilteredProjects('javaScript');
  
   const [loading, setLoading] = useState(true); 
   

  return (
    <div>
  
     
          {/* JavaScript Projects */}
          <div className="mt-6">
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
              {javaScript?.map((js) => (
                <JsAndCss key={js._id} js={js} />
              ))}
            </div>
          </div>
       
    </div>
  );
};

export default JavaScriptAndCss;
