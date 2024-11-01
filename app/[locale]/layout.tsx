// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Locale, locales } from '@/i18n-config';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Providers } from '../providers';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ 
  children, 
  params: { locale } 
}: Props) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}