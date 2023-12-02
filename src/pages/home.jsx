import * as React from "react";
import { useLanguage } from '../hooks/LanguageContext';
import Header from "../components/header.jsx";
import English from "../resume-en.json"
import Portuguese from "../resume-en.json"

const { lang } = useLanguage();

const translatedText = lang === 'pt' ? Portuguese : English;

export default function Home() {  
  return (
    <>
      <Header personalInfo={translatedText.personalInfo}/>
    </>
  );
}
