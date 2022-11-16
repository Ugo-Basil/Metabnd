import React from 'react'
import { Hero } from '../components/herosection/Hero'
import HeroFooter from '../components/herosection/HeroFooter'
import Section from '../components/section/Section'
import { Card } from '../components/card/Card'

export const Home = () => {
  return (
    <div>
      <Hero />
      <HeroFooter />
      <Card/>
      <Section/>
     </div>
  )
}
