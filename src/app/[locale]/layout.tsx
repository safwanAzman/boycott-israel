import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {notFound} from 'next/navigation';
import { NextIntlClientProvider } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import { MobileNavbarProvider } from '@/context/MobileNavbarContext';
import { ThemeProvider } from '@/context/theme-provider';
const inter = Inter({ subsets: ['latin'] })
import {siteConfig} from '@/config/site'
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';

const locales = ['en', 'my'];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "my" }];
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: {
      url: "/logo.png",
      type: "image/png",
    },
    shortcut: { url: "/logo.png", type: "image/png" },
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description:siteConfig.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.name,
}
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {

  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={` bg-gray-50 dark:bg-gray-900 ${inter.className}`}>
        <Script 
            src="https://beamanalytics.b-cdn.net/beam.min.js" 
            data-token="68760ebf-5a10-40e1-b771-caace40d4854" 
            strategy="afterInteractive"
            async
          />
        <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem
          >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <MobileNavbarProvider>
              {children}
            </MobileNavbarProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
