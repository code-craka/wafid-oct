// app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}