export default function Footer() {
  return (
    <footer className="border-t py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Medical Booking</h3>
            <p className="text-sm text-gray-600">
              Making healthcare accessible to everyone
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Book Appointment</li>
              <li>Find Centers</li>
              <li>Medical Status</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@medical.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 