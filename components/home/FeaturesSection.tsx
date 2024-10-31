import { CheckCircle } from 'lucide-react'

const features = [
  { title: 'Easy Booking', description: 'Book your appointment in just a few clicks' },
  { title: 'Wide Network', description: 'Access to a wide network of accredited medical centers' },
  { title: 'Fast Results', description: 'Get your results quickly and securely' },
  { title: 'Multiple Languages', description: 'Support for multiple languages' },
]

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Wafid?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 