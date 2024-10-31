// app/page.tsx
import HeroSection from '@/components/home/HeroSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}