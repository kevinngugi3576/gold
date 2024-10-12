import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="py-20 bg-yellow-300">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-5xl font-bold text-black">GLD: The Future of Gold-Backed Crypto</h1>
        <p className="mb-8 text-xl text-black">Secure, Transparent, and Backed by Real Gold</p>
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-black">Presale Progress</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
            <div className="bg-yellow-600 h-2.5 rounded-full w-4"></div>
          </div>
          <p className="text-lg text-black ">45% Sold - 5,500,000 GLD remaining</p>
        </div>
        <Link href="/buy" className="px-6 py-3 text-lg font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-700">
          Buy GLD Now!
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
