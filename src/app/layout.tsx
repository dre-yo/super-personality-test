import localFont from '@next/font/local';
import type { Metadata } from "next";
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
    </html>
  );
}
