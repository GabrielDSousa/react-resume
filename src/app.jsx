import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      <main>
        <div>
          <PageRouter />
        </div>
      </main>
      <footer>
        <div>
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/about">About</Link>
        </div>
      </footer>
    </Router>
  );
}
