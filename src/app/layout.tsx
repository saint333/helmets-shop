import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helmet Shop",
  description: "Tienda de helmet para la venta de cascos",
  icons:{
    icon: {
      url: "/favicon.png",
      type: "image/png",
      rel: "icon"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
