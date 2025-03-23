import logo from '../../Assets/images/LogoPNGWhite.png';
import React from "react";
import { motion } from 'framer-motion';

export default function Navbar({ language, toggleLanguage }) {
  // تحديد اتجاه الصفحة بناءً على اللغة
  document.documentElement.setAttribute("lang", language);
  document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");

  return (
    <>
      <nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <motion.a   initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }} className="navbar-brand ps-5" href="#home">
            <img src={logo} alt="LOGO" className="img-logo" />
          </motion.a>

          <button  
            className="navbar-toggler end-0 me-3" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="toggle">
              <div className="bar bar--top"></div>
              <div className="bar bar--middle"></div>
              <div className="bar bar--bottom"></div>
            </label>
          </button>

          <motion.div   initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.3 }} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 align-items-center">
              <li className="nav-item">
                <button className="phone-btn">
                  <span className="icon-box">
                    <i className="fas fa-phone text-white fs-6 pe-1"></i> 
                    <span className="text text-white fs-5">{language === "en" ? "+0123456789 " : " +٠١٢٣٤٥٦٧٨٩"}</span> 
                  </span>
                </button>
              </li>
              <li className="nav-item">
                <button className="contact-btn" onClick={() => window.location.href='#contact'}>
                  <span className="text">{language === "en" ? "Contact Us" : "تواصل معنا"}</span>
                </button>
              </li>
              <div className={`app ${language}`}>
                <li className="nav-item">
                  <button className="lang-btn" onClick={toggleLanguage}>
                    <span className="icon-box">
                      <i className="fas fa-earth-africa"></i> 
                    </span>
                    {language === "en" ? " إلى العربية" : "🔄 English"}
                  </button>
                </li>
              </div>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
