import localFont from '@next/font/local';
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Super Personality Test",
};

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeueRoman.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/HelveticaNeueMedium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/HelveticaNeueBold.otf',
      weight: '700'
    }
  ],
  variable: '--font-helvetica'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helvetica.variable} font-sans`}>
      <Script
        id="gtm"
        strategy='afterInteractive'
        dangerouslySetInnerHTML={
          {
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKM3DF49');`
          }
        }></Script>
      <body>{children}</body>
    </html>
  );
}
