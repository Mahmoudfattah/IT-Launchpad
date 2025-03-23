import React from 'react';
import map from '../../Assets/images/video_preview_0002.jpg';
import { motion } from 'framer-motion';
import { SlideUp, SlideLeft, SlideRight, SlideDown } from "../../animation/animate";

export default function Footer({ language }) {
  const translations = {
    en: {
      footer1: "Ready to elevate your business? Let’s build the future together!",
      footer2: "Home",
      footer3: "About",
      footer4: "Services",
      footer5: "Contact",
      footer6: "Qatar",
      footer7: "contact@peninsula.com",
      footer8: "+123456789",
      footer9: "Blod",
    },
    ar: {
      footer1: " هل أنت جاهز لرفع مستوى عملك؟ دعنا نبني المستقبل معًا!",
      footer2: "الرئيسية",
      footer3: "من نحن",
      footer4: "الخدمات",
      footer5: "تواصل معنا",
      footer6: "قطر",
      footer7: "contact@peninsula.com",
      footer8: " +٠١٢٣٤٥٦٧٨٩",
      footer9: "بلود",
    }
  };

  const t = translations[language] || translations.en;
  const isArabic = language === 'ar';
  const textDirection = isArabic ? 'rtl' : 'ltr';
  const textAlign = isArabic ? 'right' : 'left';

  return (
    <footer className="footer bg-black pt-5 pb-4" style={{ direction: textDirection, textAlign: textAlign }}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="heading">
              <motion.h2 variants={SlideUp(0.2)} initial="initial" animate="animate">{t.footer9}</motion.h2>
              <motion.p variants={SlideDown(0.3)} initial="initial" animate="animate">{t.footer1}</motion.p>
              <hr />
            </div>
          </div>
        </div>

        <div className="row poss align-items-center justify-content-center">
          <div className="col-md-4 w-20 social-icons-footer">
            <div className="row d-flex flex-column p-icons">
              <motion.div variants={SlideLeft(0.5)} initial="initial" animate="animate" className="col-md-6 d-flex align-items-center">
                <i className="fab fa-whatsapp"></i>
                <p className="ms-2">{t.footer8}</p>
              </motion.div>
              <motion.div variants={SlideLeft(0.8)} initial="initial" animate="animate" className="col-md-6 d-flex align-items-center">
                <i className="fas fa-envelope"></i>
                <p className="ms-2">{t.footer7}</p>
              </motion.div>
              <motion.div variants={SlideLeft(1.1)} initial="initial" animate="animate" className="col-md-6 d-flex align-items-center">
                <i className="fas fa-map-marker-alt"></i>
                <p className="ms-2">{t.footer6}</p>
              </motion.div>
            </div>
          </div>

          <div className="col-md-4 i-footer">
            <div className="links d-flex flex-column">
              <motion.div variants={SlideLeft(1.4)} initial="initial" animate="animate" className="link d-flex">
                <i className={`fas fa-arrow-${isArabic ? 'left' : 'right'} fs-6 i-home`}></i>
                <a className='span-home' href='#home'>{t.footer2}</a>
              </motion.div>
              <motion.div variants={SlideLeft(1.7)} initial="initial" animate="animate" className="link d-flex">
                <i className={`fas fa-arrow-${isArabic ? 'left' : 'right'} fs-6 i-home`}></i>
                <a className='span-about' href='#about'>{t.footer3}</a>
              </motion.div>
              <motion.div variants={SlideLeft(2)} initial="initial" animate="animate" className="link d-flex">
                <i className={`fas fa-arrow-${isArabic ? 'left' : 'right'} fs-6 i-home`}></i>
                <a className='span-about' href='#services'>{t.footer4}</a>
              </motion.div>
              <motion.div variants={SlideLeft(2.3)} initial="initial" animate="animate" className="link d-flex">
                <i className={`fas fa-arrow-${isArabic ? 'left' : 'right'} fs-6 i-home`}></i>
                <a className='span-about' href='#contact'>{t.footer5}</a>
              </motion.div>
            </div>
          </div>

          <motion.div variants={SlideRight(2.6)} initial="initial" animate="animate" className="col-md-4">
            <div className="map">
              <img src={map} alt={isArabic ? "خريطة قطر" : "Map of Qatar"} className='w-100 map rounded-2' />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
