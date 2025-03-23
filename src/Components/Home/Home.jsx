import img2 from "../../Assets/images/1.png";
import img3 from "../../Assets/images/2.png";
import img4 from "../../Assets/images/4.png";
import { motion } from 'framer-motion';
import { SlideUp, SlideDown, SlideLeft, SlideRight } from "../../animation/animate";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const translations = {
    en: {
      empowerment: "Peninsula",
      heading: "Innovation and Excellence in Technology.",
      description: "Welcome to Peninsula, your trusted partner in innovative software solutions, comprehensive IT solutions to help you achieve digital success, Let’s take your business to the next level!",
      learnMore: "Learn More",
      letsTalk: "Let's Talk",
      whatWeOffer: "WHAT WE’RE OFFERING",
      professionalServices: "Dealing in all professional IT services.",
      analysis: "Discovery and Analysis",
      analysisDesc: "Perform an analysis of the client's existing IT systems.",
      tailoredSolutions: "Tailored Solutions",
      tailoredDesc: "Develop IT solutions based on the analysis phase.",
      deployment: "Deployment and Support",
      deploymentDesc: "Regularly communicate with our clients to address any concerns.",
      consultingExcellence: "CONSULTING EXCELLENCE",
      bestPathway: "Best pathway to our clients.",
      consultingDesc: "Our consulting process begins with a thorough assessment of your IT infrastructure, workflows, and challenges.",
      support24: "24/7 Full Service Support",
      immediateResponse: "Immediate Response",
      easyApproach: "Easy to Reach Us",
      textinsection2: "Bridging Technology & Humanity",
      about1: "WHAT WE’RE OFFERING",
      about2: "Dealing in all professional IT services.",
      about3: "We take your business to the next level with top-tier digital solutions. As the preferred choice in Qatar and the Gulf region, our mission is to empower startups and mid-sized businesses with cutting-edge technology that ensures growth.",
      about4: "Years of Experience",
      about5: "A highly skilled team with extensive industry expertise.",
      about6: "Successful Projects",
      about7: "A proven track record of delivering high-quality websites and applications.",
      about8: "Specialized in Gulf Markets",
      about9: "Tailored solutions for businesses in Qatar and the Gulf region.",
      about10: "CONSULTING EXCELLENCE",
      about11: "Best pathway to our clients.",
      about12: "Our consulting process starts with a detailed assessment of your IT infrastructure, workflows, and pain points.",
      about13: "Utilizing the latest tools and frameworks for optimal performance and security.",
      about14: "Ensuring visually appealing and user-friendly experiences.",
      about15: "Delivering reliable solutions that meet global standards.",
      services1: "Our Services",
      services2: "We offer the best solutions",
      services3: "IT Consulting",
      services4: "Expert guidance to optimize and scale your digital infrastructure.",
      services5: "Website Development",
      services6: "Custom-built websites, including e-commerce platforms and business sites.",
      services7: "Mobile Application Development",
      services8: "High-performance Android and iOS apps tailored to your needs.",
      services9: "UI/UX Design",
      services10: "Engaging, user-friendly designs to enhance digital experiences.",
      services11: "Advanced Web Solutions",
      services12: "Custom business management systems and web applications.",
      services13:"Digital Marketing & SEO",
      services14:"Enhance your online presence with expert digital marketing and SEO strategies. ",
      contact1: "Contact Us",
      contact2: "We’re here to help! Whether you need a new application or want to enhance your digital presence, our team is ready to assist.",
      contact3: "Name",
      contact4: "Email",
      contact5: "Your Message",
      contact6: "Send Message",
    },
    ar: {
      empowerment: "شبه الجزيرة",
      heading: "الابتكار والتميز في التكنولوجيا.",
      description: "  مرحبًا بك في شبه الجزيرة، شريكك الموثوق في حلول البرمجيات الابتكارية، حلول تكنولوجيا المعلومات الشاملة لمساعدتك على تحقيق النجاح الرقمي، دعونا نأخذ عملك إلى المستوى التالي!",
      learnMore: "تعرف أكثر",
      letsTalk: "لنتحدث",
      whatWeOffer: "ما نقدمه",
      professionalServices: "التعامل مع جميع خدمات تكنولوجيا المعلومات الاحترافية.",
      analysis: "الاكتشاف والتحليل",
      analysisDesc: "إجراء تحليل لأنظمة تكنولوجيا المعلومات الحالية للعميل.",
      tailoredSolutions: "حلول مخصصة",
      tailoredDesc: "تطوير حلول تكنولوجيا المعلومات بناءً على مرحلة التحليل.",
      deployment: "النشر والدعم",
      deploymentDesc: "التواصل المنتظم مع عملائنا لمعالجة أي مخاوف.",
      consultingExcellence: "الاستشارات المتميزة",
      bestPathway: "أفضل طريق لعملائنا.",
      consultingDesc: "تبدأ عملية الاستشارة لدينا بتقييم شامل لبنيتك التحتية الحالية لتكنولوجيا المعلومات وسير العمل والتحديات.",
      support24: "دعم كامل على مدار 24/7",
      immediateResponse: "استجابة فورية",
      easyApproach: "سهولة الوصول إلينا",
      textinsection2: "جسر التكنولوجيا والإنسانية",
      about1: "ما نقدمه",
      about2: "التعامل مع جميع خدمات تكنولوجيا المعلومات الاحترافية.",
      about3: " نأخذ عملك إلى المستوى التالي مع حلول رقمية من الدرجة الأولى. كخيار المفضل في قطر ومنطقة الخليج، مهمتنا هي تمكين الشركات الناشئة والمتوسطة بتكنولوجيا متطورة تضمن النمو.",
      about4: "سنوات من الخبرة",
      about5: "فريق ماهر بخبرة صناعية واسعة.",
      about6: "مشاريع ناجحة",
      about7: "سجل حافل بتقديم مواقع وتطبيقات عالية الجودة.",
      about8: "متخصصون في الأسواق الخليجية",
      about9: "حلول مصممة لتلبية احتياجات الشركات في قطر ومنطقة الخليج.",
      about10: "الاستشارات المتميزة",
      about11: "أفضل طريق لعملائنا.",
      about12: "تبدأ عملية الاستشارة لدينا بتقييم شامل لبنيتك التحتية الحالية لتكنولوجيا المعلومات وسير العمل والتحديات.",
      about13: "استخدام أحدث الأدوات والأطر للأداء والأمان الأمثل.",
      about14: "ضمان تجارب بصرية جذابة وسهلة الاستخدام.",
      about15: "تقديم حلول موثوقة تلبي المعايير العالمية.",
      services1: "خدماتنا",
      services2: "نقدم أفضل الحلول",
      services3: "استشارات تكنولوجيا المعلومات",
      services4: "إرشادات خبراء لتحسين وتوسيع بنيتك التحتية الرقمية.",
      services5: "تطوير المواقع الإلكترونية",
      services6: "مواقع ويب مخصصة، تشمل منصات التجارة الإلكترونية والمواقع التجارية.",
      services7: "تطوير تطبيقات الهاتف المحمول",
      services8: "تطبيقات Android و iOS عالية الأداء مصممة خصيصًا لاحتياجاتك.",
      services9: "تصميم واجهة المستخدم/تجربة المستخدم",
      services10: "تصميمات جذابة وسهلة الاستخدام لتعزيز التجربة الرقمية.",
      services11: "حلول الويب المتقدمة",
      services12: "أنظمة إدارة الأعمال المخصصة وتطبيقات الويب.",
      services13:"  التسويق الرقمي وتحسين محركات البحث",
      services14:" تعزيز وجودك على الإنترنت باستراتيجيات تسويق رقمي وتحسين محركات البحث الخبراء.",
      contact1: "تواصل معنا",
      contact2: "نحن هنا لمساعدتك! سواء كنت بحاجة إلى تطبيق جديد أو تحسين وجودك الرقمي، فإن فريقنا مستعد لدعمك.",
      contact3: "الاسم",
      contact4: "البريد الإلكتروني",
      contact5: "رسالتك",
      contact6: "إرسال الرسالة",
    },
  };
  
  const t = translations[language] || translations.en;

  // تحديد النص الخاص بتأثير الآلة الكاتبة بناءً على اللغة المختارة
  const text = t.textinsection2;

  const [visibleText, setVisibleText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // إعادة تعيين حالة الآلة الكاتبة عند تغيير اللغة
  useEffect(() => {
    setVisibleText("");
    setIndex(0);
    setDeleting(false);
  }, [language, text]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        if (index < text.length) {
          setVisibleText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (index > 0) {
          setVisibleText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
        }
      }
    }, 100); // سرعة الكتابة والحذف

    return () => clearInterval(interval);
  }, [index, deleting, text]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: "Mahmoud",
    };

    emailjs
      .send("service_zutgw6w", "template_rpazx2j", params, "kxl8b3nfodisnnP4k")
      .then(
        (response) => {
          toast.success("✅ Message Sent Successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            style: { backgroundColor: "#1E293B", color: "#FFFFFF" },
          });
          console.log("Success!", response.status, response.text);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("❌ حدث خطأ أثناء الإرسال، حاول مجددًا.", {
            position: "bottom-left",
            autoClose: 5000,
          });
          console.log("Failed...", error);
        }
      );
  };
  return (
    <div>
      <section className="section section1 pt-5" id="home">
  <div className="container position-relative pt-5">
    <div className="row py-5">
      <div className="col-md-6">
        <div className="heading">
          <motion.span variants={SlideUp(0.2)} initial="initial" animate="animate">
            {t.empowerment}
          </motion.span>
          <motion.h2 variants={SlideUp(0.5)} initial="initial" animate="animate">
            {t.heading}
          </motion.h2>
          <motion.p variants={SlideUp(0.8)} initial="initial" animate="animate">
            {t.description}
          </motion.p>
        </div>

        <div className="row">
          <div className="col-md-6 btnhome pt-5 d-flex gap-3">
            <motion.button
              variants={SlideUp(1.1)}
              initial="initial"
              animate="animate"
              className="btn-home1"
              onClick={() => window.location.href = '#about'}
            >
              {t.learnMore}
            </motion.button>
            <motion.button
              variants={SlideUp(1.3)}
              initial="initial"
              animate="animate"
              className="btn-home2"
              onClick={() => window.location.href = '#contact'}
            >
              {t.letsTalk} <i className="fas fa-arrow-right"></i>
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div 
  whileInView={{ x: 0, opacity: 1 }}
  initial={{ x: 100, opacity: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}  
  className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center"
>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <motion.img src={img2} alt="homeimg" className="width-img rounded-4 home-img mx-auto d-block" />
      </div>
    </div>
  </div>

  {/* أيقونات التواصل الاجتماعي */}  
  <div className="row box-row socialicons d-flex justify-content-center w-100 mt-3">
    <motion.div 
      initial={{ y: -10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay: 0.7 }} 
      className="col-4 d-flex justify-content-center"
    >
   
      <a href="   https://www.instagram.com/peninsulaqa.ps?igsh=MTdqcTBnd25mMWxwbA==" target="_blank" rel="noopener noreferrer">
      <button className="Btn">
        <span className="svgContainer w-100">
          <i className="fab fa-instagram text-white fs-4"></i>
        </span>
        <span className="BG w-75"></span>
      </button>
      </a>
    </motion.div>
  
    <motion.div 
      initial={{ y: -10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay: 1 }} 
      className="col-4 d-flex justify-content-center"
    >
      <button className="Btn">
        <span className="svgContainer w-100">
          <i className="fab fa-whatsapp text-white fs-4"></i>
        </span>
        <span className="BG w-75"></span>
      </button>
    </motion.div>

    <motion.div 
      initial={{ y: -10, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, delay: 1.3 }} 
      className="col-4 d-flex justify-content-center"
    >
   
    <a href="https://www.facebook.com/share/14dWqoKpxQ/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
    <button className="Btn">
      <span className="svgContainer w-100">
      <i className="fab fa-facebook text-white fs-4"></i>
      </span>
      <span className="BG w-75"></span>
    </button>
  </a>
    </motion.div>
  </div>
</motion.div>

    </div>
    <hr className="text-white mt-5 mb-0" />
  </div>
</section>


      <section className="section section2 py-0 ">
        
    <div className="container py-0  ">
    
      <div className="row  justify-content-between text-center aligh-items-center py-0 ">
      <motion.h2
      className="gradient-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 12 }}
    >
      {visibleText}
    </motion.h2>
      </div>
      <hr className="text-white  " />
    </div>
  </section>

  <section className=" section section5 pt-5 "  id="about">
    <div className="container pt-5">
      <div className="row p-0">
        <div className="col-md-6">
          <div className="heading-about-us">
            <motion.span variants={SlideUp(.2)}
                          initial="initial"
                          whileInView={"animate"}>{t.about1}</motion.span>
            <motion.h2 variants={SlideLeft(.5)}
                          initial="initial"
                          whileInView={"animate"} >{t.about2}</motion.h2>
          </div>
        </div>
        <div  className="col-md-6">
          <div className="heading-about-us ">
            <motion.p variants={SlideUp(.8)}
                          initial="initial"
                          whileInView={"animate"}>
             {t.about3}
            </motion.p>
          </div>
        </div>
        <div className="col-md-8 education">
          <div className="timeline-items">
            <motion.div variants={SlideRight(1,1)}
                          initial="initial"
                          whileInView={"animate"} className="timeline-item">
              <div className="timeline-dot"></div>
              {/* <div className="timeline-date">2020 - 2024</div> */}
              <div className="timeline-content rounded-5">
                <h3>{t.about4}</h3>
                <p>
               {t.about5}
                </p>
              </div>
            </motion.div>

            <motion.div variants={SlideLeft(1,4)}
                          initial="initial"
                          whileInView={"animate"} className="timeline-item">
              <div className="timeline-dot"></div>
              {/* <div className="timeline-date">2023</div> */}
              <div className="timeline-content rounded-5">
                <h3>{t.about6}</h3>
                <p>{t.about7} </p>
              </div>
            </motion.div>

            <motion.div variants={SlideRight(1,7)}
                          initial="initial"
                          whileInView={"animate"}className="timeline-item">
              <div className="timeline-dot"></div>
              {/* <div className="timeline-date">2024</div> */}
              <div className="timeline-content rounded-5">
                <h3>{t.about8} </h3>
                <p> {t.about9} </p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="heading-about-us pt-5">
            <motion.span  variants={SlideDown(2)}
                          initial="initial"
                          whileInView={"animate"} className="pt-5">{t.about10} </motion.span>
            <motion.h2 variants={SlideDown(2.1)}
                          initial="initial"
                          whileInView={"animate"} className="pt-3">{t.about11} </motion.h2>
            <motion.p variants={SlideUp(2.4)}
                          initial="initial"
                          whileInView={"animate"} className="py-5">
               {t.about12}
            </motion.p>
            <div>
              <ul className="fs-5 py-5 ul-about">
                <motion.li variants={SlideLeft(2.7)}
                          initial="initial"
                          whileInView={"animate"} className="fs-5">
                  {t.about13}
                </motion.li>
                <motion.li variants={SlideLeft(3)}
                          initial="initial"
                      whileInView={"animate"} className="fs-5"> {t.about14} </motion.li>
                <motion.li variants={SlideLeft(3.3)}
                          initial="initial"
                          whileInView={"animate"} className="fs-5">{t.about15} </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section section4 pt-5" id="servecis">
    <div className="container  ">
      <div className="heading2 pt-4 mt-0">
        <motion.span
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView={"animate"}> {t.services1} </motion.span>
        <motion.h1
                    variants={SlideUp(0.5)}
                    initial="initial"
                    whileInView={"animate"}>{t.services2}</motion.h1>
      </div>

      <div className="row pb-5 text-center mx-auto   justify-content-between row-servises g-4">
        <motion.div
                          variants={SlideUp(.8)}
                          initial="initial"
                          whileInView={"animate"}className="col-md-4 services1  mx-auto   ">
          <div>
           <img src={img3} alt="imgservices" className="w-25"/>
            <h3>{t.services3}</h3>
            <p className="">
            {t.services4}
            </p>
          </div>
        </motion.div>
        <motion.div
                          variants={SlideUp(1.1)}
                          initial="initial"
                          whileInView={"animate"} className="col-md-4 services2 mx-auto  ">
          <div>
          <img src={img4} alt="imgservices" className="w-25"/>
            <h3>{t.services5}</h3>
            <p className="">
            {t.services6}
            </p>
          </div>
        </motion.div>
        <motion.div
                          variants={SlideUp(1.3)}
                          initial="initial"
                          whileInView={"animate"}className="col-md-4 services1 mx-auto  ">
          <div>
          <img src={img3} alt="imgservices" className="w-25"/>
            <h3>{t.services7}</h3>
            <p className="">
            {t.services8}
            </p>
          </div>
        </motion.div>

        <motion.div
                          variants={SlideUp(1.6)}
                          initial="initial"
                          whileInView={"animate"} className="col-md-4 services2 mx-auto    ">
          <div>
          <img src={img4} alt="imgservices" className="w-25"/>
            <h3>{t.services9}</h3>
            <p className="">
            {t.services10}
            </p>
          </div>
        </motion.div>
        <motion.div
                          variants={SlideUp(1.9)}
                          initial="initial"
                          whileInView={"animate"}className="col-md-4 services1 mx-auto ">
          <div>
          <img src={img3} alt="imgservices" className="w-25"/>
            <h3>{t.services11}</h3>
            <p className="">
            {t.services12}
            </p>
          </div>
        </motion.div>
        <motion.div
                          variants={SlideUp(2.1)}
                          initial="initial"
                          whileInView={"animate"} className="col-md-4 services2 mx-auto  ">
          <div>
          <img src={img4} alt="imgservices" className="w-25"/>
            <h3>{t.services13}</h3>
            <p className="">
            {t.services14}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section> 
<div>
{/* مكون التوست نوتيفيكيشن */}
<ToastContainer />

<section className="section section6" style={{ position: "relative" }} id="contact">
<div className="container">
 <div className="row contact">
   <div className="col-md-10 rounded-4 mx-auto">
     <div className="heading-contact text-center">
       <motion.h2 variants={SlideUp(0.2)} initial="initial" whileInView="animate">
        {t.contact1}
       </motion.h2>
       <motion.p variants={SlideUp(0.5)} initial="initial" whileInView="animate">
        {t.contact2}
       </motion.p>
     </div>

     <form onSubmit={handleSubmit}>
       <div className="row g-3">
         <motion.div variants={SlideLeft(0.8)} initial="initial" whileInView="animate" className="col-md-6 custom-input">
           <div className="input-container">
             <input
               required
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               className="input"
             />
             <label className="label">{t.contact3}</label>
           </div>
         </motion.div>

         <motion.div variants={SlideRight(1.1)} initial="initial" whileInView="animate" className="col-md-6 custom-input">
           <div className="input-container">
             <input
               required
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               className="input"
             />
             <label className="label">{t.contact4}</label>
           </div>
         </motion.div>

         <motion.div variants={SlideUp(1.5)} initial="initial" whileInView="animate" className="col-md-12 custom-input pt-4">
           <div className="input-container">
             <textarea
               required
               name="message"
               value={formData.message}
               onChange={handleChange}
               className="input"
             ></textarea>
             <label className="label">{t.contact5}</label>
           </div>
         </motion.div>

         <motion.div
variants={SlideDown(1.8)}
initial="initial"
whileInView="animate"
className="col-md-12 text-center"
>
<button type="submit" className="cta">
<span>{t.contact6}</span>
<svg width="15px" height="10px" viewBox="0 0 13 10">
  <path d="M1,5 L11,5"></path>
  <polyline points="8 1 12 5 8 9"></polyline>
</svg>
</button>
</motion.div>

  

       </div>
     </form>
   </div>
 </div>
</div>
</section>
</div>
    </div>
  );
}

export default Home;
