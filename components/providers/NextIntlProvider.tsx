'use client'

import { NextIntlClientProvider, useMessages } from 'next-intl'
import { ReactNode } from 'react'

export default function NextIntlProvider({
  children,
  locale
}: {
  children: ReactNode
  locale: string
}) {
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
} 