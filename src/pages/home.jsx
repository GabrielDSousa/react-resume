import * as React from "react";
import { useLanguage } from '../hooks/LanguageContext';
import Header from "../components/header.jsx";


export default function Home() {
  const { lang, setLang } = useLanguage();
  
  return (
    <>
      <Header />
    </>
  );
}
