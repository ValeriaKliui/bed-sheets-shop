import "./globals.scss";

import { fontCirce, fontOrchidea } from "@ui/fonts";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import type { Metadata } from "next";

const fonts = [fontOrchidea, fontCirce];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: "Интернет-магазин Mollen",
  description: "Интернет-магазин Mollen - постельное белье",
  icons: { icon: "/icons/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={fontsClassName}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}