import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "marcelohdez.com",
  description: "Marcelo Hernandez, a Software Developer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="max-w-6xl mx-auto mb-16 py-4 px-6 sm:px-8 md:px-16 lg:py-8 lg:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
