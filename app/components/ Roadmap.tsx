import React from 'react';

const Roadmap: React.FC = () => {
  return (
    <div className="py-20 text-black bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Roadmap</h2>
        <div className="relative">
          <div className="absolute w-1 h-full transform -translate-x-1/2 bg-yellow-600 left-1/2"></div>
          <div className="space-y-12">
            {[
              { phase: "Q3 2023", title: "Presale Launch", items: ["Token smart contract development", "Website launch", "Community building"] },
              { phase: "Q4 2023", title: "Exchange Listings", items: ["Major DEX listing", "CEX partnerships", "Staking platform launch"] },
              { phase: "Q1 2024", title: "Ecosystem Expansion", items: ["Cross-chain bridge development", "Mobile app beta", "Strategic partnerships"] },
              { phase: "Q2 2024", title: "Global Adoption", items: ["International marketing campaign", "Additional CEX listings", "DAO governance implementation"] }
            ].map((milestone, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="absolute z-10 w-6 h-6 transform -translate-x-1/2 bg-yellow-600 rounded-full left-1/2"></div>
                <div className="w-1/2 p-4 bg-yellow-300 rounded-lg shadow-md">
                  <h3 className="mb-2 text-xl font-bold">{milestone.phase}: {milestone.title}</h3>
                  <ul className="pl-5 list-disc">
                    {milestone.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;