"use client"
import React, { useState } from 'react';

const Web3Integration: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = () => {
    // Implement actual Web3 wallet connection logic here
    setIsConnected(true);
  };

  return (
    <div className="py-20 text-black bg-yellow-300">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center">Connect Your Wallet</h2>
        <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
          {!isConnected ? (
            <button
              onClick={connectWallet}
              className="w-full px-4 py-3 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700"
            >
              Connect Wallet
            </button>
          ) : (
            <div>
              <p className="mb-4 text-lg">Wallet Connected!</p>
              <p className="mb-2 text-sm">Address: 0x1234...5678</p>
              <p className="mb-4 text-sm">Balance: 100 WMATIC</p>
              <button className="w-full px-4 py-3 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700">
                Buy GLD Tokens
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Web3Integration;