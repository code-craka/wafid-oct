'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
        title="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen 
              ? "M6 18L18 6M6 6l12 12" 
              : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b p-4 space-y-4">
          <Link
            href="/book-appointment"
            className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
          <Link
            href="/medical-centers"
            className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Medical Centers
          </Link>
          <div className="space-y-2">
            <Link href="/login" className="block">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/register" className="block">
              <Button className="w-full">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 