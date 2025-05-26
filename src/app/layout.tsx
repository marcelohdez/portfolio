import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { DM_Serif_Text, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "marcelohdez.com",
  description: "Marcelo Hernandez, a Software Developer's portfolio",
};

const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerifText.className} ${poppins.className}`}>
      <body>
        <NavBar />
        <div className="max-w-6xl mx-auto mb-16 py-4 px-6 sm:px-8 md:px-16 lg:py-8 lg:px-20">
          {children}
        </div>
      </body>
    </html>
  );
}
