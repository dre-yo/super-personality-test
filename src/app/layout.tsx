import localFont from '@next/font/local';
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

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
      <body>{children}</body>
      <GoogleTagManager gtmId="G-J2F6NT510N" />
    </html>
  );
}
