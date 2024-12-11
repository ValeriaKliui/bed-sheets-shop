import localFont from "next/font/local";

export const fontOrchidea = localFont({
  src: [
    {
      path: "../../public/fonts/OrchideaPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OrchideaPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-orchidea-pro",
});

export const fontCirce = localFont({
  src: "../../public/fonts/Circe-Light.woff",
  variable: "--font-circe",
});
