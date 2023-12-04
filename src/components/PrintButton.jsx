import React from "react";

const PrintButton = ({ isDarkMode }) => {
  const handlePrint = () => {
    window.print();
  };
  
  return (  
    <button
      className={`p-2 mr-1 md:mr-4 rounded-full border border-lime-300 ${
        isDarkMode ? "dark:border-lime-50 dark:bg-lime-800" : "bg-lime-50"
      }`}
      onClick={handlePrint}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <i class="fa fa-print"></i>
      </div>
    </button>
  );
};

export default PrintButton;
