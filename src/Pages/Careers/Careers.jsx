import React, { useRef, motion } from "react";
import { useInView } from "framer-motion";

import './Careers.scss';

function Careers() {
   const currRef = useRef(null);
   const isInView = useInView(currRef);

   return (
         <div className="career_container" >
            <h1 className="career_description">We actually have nothing to add yet.</h1>
            <h1 className="career_description">But ya know,</h1>
            <h1 className="career_description">some shits are <u>comming</u> SOON</h1>
         </div>
   );
}

export default Careers;
