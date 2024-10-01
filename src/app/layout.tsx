import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Futuro Digital",
  description:
    "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",

  openGraph: {
    title: "Futuro Digital",
    description:
      "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
    images: [
      {
        url: "/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Futuro Digital para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futuro Digital",
    description:
      "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
    images: ["/og-homepage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-24YQ93TDDH" />
    </html>
  );
}
