import React from 'react';

const MenuFooter = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">GabrielDSousa</h1>
          <p className="text-sm">© 2023 All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><Link href="#" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="#" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuFooter;
