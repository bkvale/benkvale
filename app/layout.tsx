import type { Metadata } from "next";
import { Russo_One, Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const russo = Russo_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-russo'
});

const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "COPY GOES HERE",
  description: "COPY GOES HERE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${russo.variable} ${rajdhani.variable} ${inter.variable} font-body antialiased bg-asphalt text-gray-200`}
      >
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
