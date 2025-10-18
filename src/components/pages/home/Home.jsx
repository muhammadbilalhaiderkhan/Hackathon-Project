import React from 'react'
import HeroSection from '../../hero-section/HeroSection'
import StatsBar from '../../statsbar/StatsBar'
import FeaturesSection from '../../featuressection/FeaturesSection'
import CreatePitchSection from '../../createpitchsection/CreatePitchSection'
import TestimonialsSection from '../../TestimonialsSection/TestimonialsSection'

function Home() {
  return (
    <>
    <HeroSection />
    <StatsBar />
    <FeaturesSection />
    <CreatePitchSection />
    <TestimonialsSection />
    </>
  )
}

export default Home