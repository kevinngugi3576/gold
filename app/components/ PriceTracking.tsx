import React from 'react';

const PriceTracking: React.FC = () => {
  return (
    <div className="py-20 text-black bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Real-Time Market Data</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold">GLD Price</h3>
            <p className="text-4xl font-bold text-yellow-600">$0.15</p>
            <p className="text-green-600">+5.26% (24h)</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold">Market Cap</h3>
            <p className="text-4xl font-bold">$15,000,000</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-2xl font-semibold">Price Chart</h3>
          {/* Placeholder for an actual chart component */}
          <div className="flex items-center justify-center h-64 bg-gray-200 rounded-lg">
            <p className="text-gray-600">Price chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTracking;