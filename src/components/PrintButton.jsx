import React from "react";

const PrintButton = ({ isDarkMode }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      id="handlePrint"
      className={`p-2 mr-1 md:mr-4 rounded-full border border-lime-300 ${
        isDarkMode ? "dark:border-lime-50 dark:bg-lime-800" : "bg-lime-50"
      } transform transition-transform hover:scale-110 focus:outline-none focus:ring focus:border-lime-300`}
      onClick={handlePrint}
    >
      <label className="w-8 h-8 flex items-center justify-center">
        <i className="fa fa-print" aria-hidden="true"></i>
      </label>
    </button>
  );
};

export default PrintButton;
