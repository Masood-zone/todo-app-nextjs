import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Todo App",
    template: "%s | Todo App",
  },
  description: "Gree Todo App",
};
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}
