import type { Metadata } from "next";
import LocalFont from "next/font/local";
import classNames from "classnames";
import "./globals.css";

const crumblSans = LocalFont({
  display: "swap",
  variable: "--font-crumbl-sans",
  src: [
    {
      path: "../../public/fonts/crumbl-sans/bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/crumbl-sans/display.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/crumbl-sans/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/crumbl-sans/regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Crumbl Countdown",
  description: "Official Crumbl Countdown Timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full bg-primary">
      <body className={classNames("w-full h-full", crumblSans.variable)}>{children}</body>
    </html>
  );
}
