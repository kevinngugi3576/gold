import React from 'react';

const AirdropsCompetitions: React.FC = () => {
  return (
    <div className="py-20 text-black bg-yellow-300">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Airdrops & Competitions</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Upcoming Airdrop</h3>
            <p className="mb-4">Hold at least 1,000 GLD tokens to be eligible for our next airdrop!</p>
            <p className="font-bold">Date: June 1, 2023</p>
            <p className="font-bold">Reward: 100 GLD per eligible wallet</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-2xl font-semibold">Referral Competition</h3>
            <p className="mb-4">Top 10 referrers will win exclusive prizes!</p>
            <ol className="pl-5 list-decimal">
              <li>1st Place: 10,000 GLD</li>
              <li>2nd Place: 5,000 GLD</li>
              <li>3rd Place: 2,500 GLD</li>
              <li>4th-10th Place: 1,000 GLD each</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirdropsCompetitions;