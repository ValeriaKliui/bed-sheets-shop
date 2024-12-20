import "@lib/styles/globals.scss";

import StoreProvider from "@lib/redux/storeProvider";
import { fontCirce, fontOrchidea } from "@ui/fonts";
import Footer from "@ui/Footer";
import Header from "@ui/Header";
import NavigationEvents from "@ui/NavigationEvents";
import type { Metadata } from "next";
import { PropsWithChildren, Suspense } from "react";

const fonts = [fontOrchidea, fontCirce];
const fontsClassName = fonts.map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: "Интернет-магазин Mollen",
  description: "Интернет-магазин Mollen - постельное белье",
  icons: { icon: "/icons/logo.svg" },
};
export const experimental_ppr = true;

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={fontsClassName}>
          <Header />
          <main>{children}</main>
          <div id="modal" />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
