import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Granos Directos",
  description: "Vende tus granos de forma sencilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <Providers>
        <body>
          <main className="min-h-screen flex flex-col justify-center items-center">
            <NavBar />
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
