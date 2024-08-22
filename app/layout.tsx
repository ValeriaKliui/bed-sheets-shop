import type { Metadata } from "next";
import "./globals.scss";
import { fontOrchidea, fontCirce } from "@ui/fonts";
import Header from "@ui/Header";
import Footer from "@ui/Footer";

const fonts = [fontOrchidea, fontCirce];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: "Интернет-магазин Mollen",
  description: "Интернет-магазин Mollen - постельное белье",
  icons: { icon: "/logo.svg" },
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
