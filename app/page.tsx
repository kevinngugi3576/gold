import React from 'react'

import EducationHub from './components/ EducationHub'
import HeroSection from './components/ HeroSection'
import AirdropsCompetitions from './components/AirdropsCompetitions'
import Tokenomics from './components/Tokenomics'
import IncentiveFeatures from './components/IncentiveFeatures'
import SecurityAudit from './components/SecurityAudit'
import VestingInterface from './components/ VestingInterface'
import Roadmap from './components/ Roadmap'
import PriceTracking from './components/ PriceTracking'
import Web3Integration from './components/Web3Integration'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeroSection />
      <Tokenomics />
      <IncentiveFeatures />
      <SecurityAudit />
      <VestingInterface />
      <Roadmap />
      <Web3Integration />
      <PriceTracking />
      <AirdropsCompetitions />
      <EducationHub />
    </main>
  )
}
