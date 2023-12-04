import React from 'react';

const PrintButton = ({ isDarkMode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button onClick={handlePrint} 
      className={`w-8 h-8 mr-p-2 rounded-full border border-lime-300 ${
        isDarkMode ? "dark:border-lime-50 dark:bg-lime-800" : "bg-lime-50"
      }`}>
      <i class="fa fa-print"></i>
    </button>
  );
};

export default PrintButton;
