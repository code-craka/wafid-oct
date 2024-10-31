import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold sm:text-6xl mb-6">
            Welcome to Wafid
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Book your medical examination appointment for GCC countries
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
