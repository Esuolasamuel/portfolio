import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "PreshDev | Portfolio",
  description: "Frontend Developer, Content Creator, Technical Writer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&f[]=general-sans@200,500,300,600,400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-accent-primary selection:text-text-inverse">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
