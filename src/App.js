// import React, { useState, useEffect } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Components/Home/Home";
// import Footer from "./Components/Footer/Footer";
// import Loader from "./Components/Loader"; // استيراد اللودر

// function App() {
//   const [language, setLanguage] = useState("en"); 
//   const [loading, setLoading] = useState(true);

//   const toggleLanguage = () => {
//     setLanguage(language === "en" ? "ar" : "en");
//   };

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <Loader onFinish={() => setLoading(false)} />
//       ) : (
//         <>
//           <Navbar toggleLanguage={toggleLanguage} language={language} />
//           <Home language={language} />
//           <Footer language={language} />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader"; // استيراد اللودر

function App() {
  const [language, setLanguage] = useState("en"); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 3000);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar toggleLanguage={toggleLanguage} language={language} />
          <Home language={language} />
          <Footer language={language} />
        </>
      )}
    </div>
  );
}

export default App;
