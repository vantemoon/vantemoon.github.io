import type { Metadata } from "next";
import { Asset, Grenze } from "next/font/google";
import ScrollReveal from "./components/ScrollReveal";
import "./globals.css";

const asset = Asset({
  variable: "--font-asset",
  weight: "400",
  subsets: ["latin"],
});

const grenze = Grenze({
  variable: "--font-grenze",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sylvia Sun Portfolio",
  description: "A professional portfolio for individual and team projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${asset.variable} ${grenze.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
