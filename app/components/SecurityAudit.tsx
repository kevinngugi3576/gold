import React from 'react';
const SecurityAudit: React.FC = () => {
  return (
    <div className="py-20 text-black bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Security & Audit</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 text-center bg-gray-100 rounded-lg">
            {/* <Image src={certikLogo} alt="CertiK" className="w-auto h-16 mx-auto mb-4" /> */}
            <h3 className="mb-2 text-2xl font-semibold">CertiK Audited</h3>
            <p>Our smart contracts have been thoroughly audited by CertiK, ensuring top-notch security.</p>
          </div>
          <div className="p-6 text-center bg-gray-100 rounded-lg">
            {/* <Image src={lockIcon} alt="Liquidity Lock" className="w-auto h-16 mx-auto mb-4" /> */}
            <h3 className="mb-2 text-2xl font-semibold">Liquidity Locked</h3>
            <p>Liquidity will be locked for 2 years, guaranteeing long-term stability.</p>
          </div>
          <div className="p-6 text-center bg-gray-100 rounded-lg">
            {/* <Image src={shieldIcon} alt="Anti-Bot" className="w-auto h-16 mx-auto mb-4" /> */}
            <h3 className="mb-2 text-2xl font-semibold">Anti-Bot Protection</h3>
            <p>Advanced measures are in place to prevent bot manipulation during the presale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAudit;
