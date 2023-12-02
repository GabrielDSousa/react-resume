import React, { useState, useEffect } from "react";
import { Router } from "wouter";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import MenuFooter from "./components/footer.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
        <main className="flex flex-col">
          <div className="flex-grow">
            <PageRouter />
          </div>
          
        </main>
    </Router>
    
    
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <div className="flex-grow">
        <PageRouter />
      </div>
      <MenuFooter />
    </div>
  );
}
