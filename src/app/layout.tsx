import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Futuro Digital",
  description:
    "Un proyecto social de WonderCraft SAS para que nuestros jovenes cambien su mundo",
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
