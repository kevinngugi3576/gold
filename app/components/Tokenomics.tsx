import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <div className="py-20 text-black bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Tokenomics</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Token Distribution */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Token Distribution</h3>
            <ul className="pl-5 list-disc">
              <li>Presale: 40%</li>
              <li>Liquidity: 30%</li>
              <li>Team: 10%</li>
              <li>Marketing: 10%</li>
              <li>Reserve: 10%</li>
            </ul>
          </div>

          {/* Token Details */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Token Details</h3>
            <p><strong>Total Supply:</strong> 100,000,000 GLD</p>
            <p><strong>Token Address:</strong> 0xc8c8Cdaf9D7D9CBA23A35e81EAE6b277Df5ab344</p>
            <p><strong>Blockchain:</strong> Polygon (PoS Chain)</p>
            <p><strong>Presale Rate:</strong> 1 WMATIC = 10.479 GLD</p>
            <p><strong>Listing Rate:</strong> 1 WMATIC = 7.3353 GLD</p>
            <p><strong>Max Allocation per User:</strong> 500 WMATIC</p>
            <p><strong>Whitelist Spots:</strong> 200 Participants</p>
          </div>
        </div>

        {/* Presale Mechanics */}
        <div className="mt-10">
          <h3 className="mb-4 text-2xl font-semibold">Presale Mechanics</h3>
          <ul className="pl-5 list-disc">
            <li><strong>Softcap:</strong> 25,000 WMATIC</li>
            <li><strong>Hardcap:</strong> 100,000 WMATIC</li>
            <li><strong>Discounts:</strong>
              <ul className="pl-5 mt-2 list-disc">
                <li>0% Discount: 1 WMATIC = 10.479 GLD</li>
                <li>10% Discount: 1 WMATIC = 9.4311 GLD</li>
                <li>15% Discount: 1 WMATIC = 8.89215 GLD</li>
                <li>25% Discount: 1 WMATIC = 7.85925 GLD</li>
                <li>30% Discount: 1 WMATIC = 7.0353 GLD</li>
              </ul>
            </li>
            <li><strong>Liquidity Allocation:</strong> 60% of raised WMATIC for liquidity</li>
            <li><strong>Liquidity Lock:</strong> 1 year on Quickswap</li>
            <li><strong>Vesting Option:</strong> Considering post-presale vesting</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
