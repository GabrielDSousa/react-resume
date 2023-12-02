import React, { useState, useEffect } from "react";
import { Router } from "wouter";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import MenuFooter from "./components/footer.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';


const [lang, setLang] = useState('');

useEffect(() => {
  // Get browser language
  const browserLanguage = navigator.language;

  // Check if the language is Portuguese (Brazil)
  if (browserLanguage.toLowerCase() === 'pt-br') {
    setLang('pt');
  } else {
    setLang('en');
  }
}, []); // Empty dependency array ensures the effect runs only once after the component mounts


// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
        <div className="flex flex-col min-h-screen bg-gray-800 text-white">
          <div className="flex-grow">
            <PageRouter />
            
          </div>
          <MenuFooter />
        </div>
    </Router>
  );
}
