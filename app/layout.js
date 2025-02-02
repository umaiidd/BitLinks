import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Corrected weight range
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Bitlinks - Your Trusted URL Shortener",
  description: "Bitlinks helps you shorten your URLs easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50 min-h-screen flex flex-col`}
      > 
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
