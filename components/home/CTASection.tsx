import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Appointment?</h2>
        <p className="text-xl mb-6">
          Start your medical examination process for GCC countries today.
        </p>
        <Button asChild size="lg" variant="secondary">
          <a href="/book-appointment">Book Now</a>
        </Button>
      </div>
    </section>
  )
}
