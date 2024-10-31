import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold">
              Medical Booking
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/book-appointment"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Book Appointment
            </Link>
            <Link 
              href="/medical-centers"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Medical Centers
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Register
                </Button>
              </Link>
            </div>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 