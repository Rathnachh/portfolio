import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="rathna_2.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
