// components/layout/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Wafid</h3>
            <p className="text-sm text-gray-600">
              Wafid is a program under the umbrella of the Gulf Health Council that enables individuals bound to work or reside in the GCC to book their medical check-up appointments.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/book-appointment" className="text-sm text-gray-600 hover:text-primary">Book Appointment</Link></li>
              <li><Link href="/medical-centers" className="text-sm text-gray-600 hover:text-primary">Medical Centers</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-primary">FAQs</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Facebook</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} TechSci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}