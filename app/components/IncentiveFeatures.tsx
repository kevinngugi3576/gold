import React from 'react';

const IncentiveFeatures: React.FC = () => {
  return (
    <div className="py-20 bg-yellow-300 text-black">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Investor Incentives</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Discounted Pricing</h3>
            <ul className="pl-5 list-disc">
              <li>0% discount: First 1M tokens</li>
              <li>10% discount: Next 2M tokens</li>
              <li>15% discount: Next 3M tokens</li>
              <li>25% discount: Next 2M tokens</li>
              <li>30% discount: Final 2M tokens</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Referral Program</h3>
            <p>Earn up to 5% on referrals! Share your unique link and earn GLD tokens on every purchase.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Staking Platform</h3>
            <p>Stake your GLD tokens post-sale to earn additional rewards and participate in governance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncentiveFeatures;