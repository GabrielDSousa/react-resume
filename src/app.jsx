import React, { useState, useEffect } from "react";
import { Router } from "wouter";
import { LanguageProvider } from './hooks/LanguageContext';

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import MenuFooter from "./components/menuFooter.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function App() {
  return (
    <Router>
      <Seo />
        <div className="flex flex-col min-h-screen bg-gray-800 text-white">
          <div className="flex-grow">
             <LanguageProvider>
                <div>
                  <PageRouter />
                </div>
              </LanguageProvider>
          </div>
          <MenuFooter />
        </div>
    </Router>
    
    
  );
}
