import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Wafid
            </h1>
            <p className="text-xl mb-6">
              Book your medical examination appointment for GCC countries easily and securely.
            </p>
            <Button asChild size="lg">
              <a href="/book-appointment">Book Appointment</a>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/hero-image.jpg"
              alt="Medical examination"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 