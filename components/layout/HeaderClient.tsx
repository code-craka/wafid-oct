'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type NavigationItem = {
  name: string
  href: string
  label: string
}

type HeaderClientProps = {
  navigation: NavigationItem[]
  translations: {
    login: string
    register: string
  }
}

export function HeaderClient({ navigation, translations }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Wafid
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex space-x-2">
          <Button asChild variant="outline">
            <Link href="/login">{translations.login}</Link>
          </Button>
          <Button asChild>
            <Link href="/register">{translations.register}</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button asChild variant="outline" className="w-full mb-2">
                <Link href="/login">{translations.login}</Link>
              </Button>
            </div>
            <div className="flex items-center px-5">
              <Button asChild className="w-full">
                <Link href="/register">{translations.register}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}