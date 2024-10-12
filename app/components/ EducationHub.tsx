import React from 'react';
import Link from 'next/link';

const EducationHub: React.FC = () => {
  return (
    <div className="py-20 text-black bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Education Hub</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 rounded-lg bg-yellow-50">
            <h3 className="mb-4 text-2xl font-semibold">Video Tutorials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorials/presale" className="text-blue-600 hover:underline">
                  How to participate in the GLD presale
                </Link>
              </li>
              <li>
                <Link href="/tutorials/wallet" className="text-blue-600 hover:underline">
                  Connecting your wallet to our platform
                </Link>
              </li>
              <li>
                <Link href="/tutorials/tokenomics" className="text-blue-600 hover:underline">
                  Understanding GLD tokenomics
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-yellow-50">
            <h3 className="mb-4 text-2xl font-semibold">Blog Posts</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/future-of-gold-backed-cryptocurrencies" className="text-blue-600 hover:underline">
                  The future of gold-backed cryptocurrencies
                </Link>
              </li>
              <li>
                <Link href="/blog/how-gld-is-revolutionizing-the-precious-metals-market" className="text-blue-600 hover:underline">
                  How GLD is revolutionizing the precious metals market
                </Link>
              </li>
              <li>
                <Link href="/blog/5-reasons-to-invest-in-gld-during-the-presale" className="text-blue-600 hover:underline">
                  5 reasons to invest in GLD during the presale
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-yellow-50">
            <h3 className="mb-4 text-2xl font-semibold">FAQs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq/what-is-gld" className="text-blue-600 hover:underline">
                  What is GLD?
                </Link>
              </li>
              <li>
                <Link href="/faq/how-can-i-participate-in-the-presale" className="text-blue-600 hover:underline">
                  How can I participate in the presale?
                </Link>
              </li>
              <li>
                <Link href="/faq/when-will-gld-be-listed-on-exchanges" className="text-blue-600 hover:underline">
                  When will GLD be listed on exchanges?
                </Link>
              </li>
              <li>
                <Link href="/faq/how-is-the-price-of-gld-determined" className="text-blue-600 hover:underline">
                  How is the price of GLD determined?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;
