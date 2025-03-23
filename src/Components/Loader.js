import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./../Assets/images/LogoPNGWhite.png";


const Loader = ({ onFinish }) => {
    const [exit, setExit] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setExit(true), 3000); // يختفي بعد 3 ثوانٍ
      return () => clearTimeout(timer);
    }, []);
  
    return (
      !exit && (
        <div className="loader-overlay">
          <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </div>
      )
    );
  };
  
  export default Loader;
