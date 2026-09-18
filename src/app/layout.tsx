import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LanguageProvider } from "../lib/i18n";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pollo Shaddai | Guatemalan Fried Chicken",
    template: "%s | Pollo Shaddai",
  },
  description:
    "Authentic Guatemalan fried chicken, pepían, and family plates in Cincinnati, Fairfield, Indianapolis, and Oklahoma City. El mejor pollo frito chapín.",
  openGraph: {
    title: "Pollo Shaddai",
    description:
      "Guatemalan fried chicken and chapín plates in Ohio, Indiana, and Oklahoma City.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-cream text-ink antialiased"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
