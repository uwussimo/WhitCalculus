import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculus Testing | Whitworth University ",
  description: "Calculus ||Test Platform for incoming students",
  favicon: "https://selfserv.whitworth.edu:8173//Student/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.favicon} sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
