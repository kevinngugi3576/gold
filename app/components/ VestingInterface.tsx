import React from 'react';

const VestingInterface: React.FC = () => {
  return (
    <div className="py-20 text-black bg-yellow-300">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Token Vesting</h2>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-2xl font-semibold">Vesting Schedule</h3>
          <ul className="pl-5 mb-6 list-disc">
            <li>25% unlocked at TGE (Token Generation Event)</li>
            <li>25% unlocked after 1 month</li>
            <li>25% unlocked after 2 months</li>
            <li>25% unlocked after 3 months</li>
          </ul>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h4 className="mb-2 text-xl font-semibold">Your Vesting Status</h4>
            <p className="mb-2">Total Tokens: 10,000 GLD</p>
            <p className="mb-2">Claimed: 2,500 GLD</p>
            <p className="mb-2">Next Unlock: 2,500 GLD in 14 days</p>
            <button className="px-4 py-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700">
              Claim Available Tokens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VestingInterface;