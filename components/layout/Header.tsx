// components/layout/Header.tsx
import { useTranslations } from 'next-intl'
import { HeaderClient } from '@/components/layout/HeaderClient'

const navigation = [
  { name: 'home', href: '/' },
  { name: 'bookAppointment', href: '/book-appointment' },
  { name: 'medicalCenters', href: '/medical-centers' },
  { name: 'faq', href: '/faq' }, // Changed from 'faqs' to 'faq' to match messages
  { name: 'contact', href: '/contact' },
]

export default function Header() {
  const t = useTranslations('common')
  
  const translatedNavigation = navigation.map(item => ({
    ...item,
    label: t(item.name, { fallback: item.name }) // Added fallback
  }))

  const translations = {
    login: t('login', { fallback: 'Login' }),
    register: t('register', { fallback: 'Register' })
  }

  return (
    <HeaderClient 
      navigation={translatedNavigation}
      translations={translations}
    />
  )
}