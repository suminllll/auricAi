import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google'
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: "Auric AI - AI Solutions",
  description: "AI Solution Company",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${notoSans.variable} font-sans antialiased m-0 p-0`} suppressHydrationWarning={true}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
