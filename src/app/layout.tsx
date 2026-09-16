import type { Metadata } from "next";
import { Poppins, Fira_Code, Anton } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Poppins({ variable: "--font-geist-sans", subsets: ["latin"], weight: ["400","500","600"] });
const geistMono = Fira_Code({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400","500","600","700"] });
const display   = Anton({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Cecilia Alejandra Espinoza",
  description: "Portfolio Frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={display.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
                    min-h-dvh bg-neutral-50 text-neutral-900
                    dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
