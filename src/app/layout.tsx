import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gifted's site :3",
  icons: {
    icon: "image/favicon/favicon.ico",
    apple: "image/favicon/apple-touch-icon.png"
  },
  description: "whats up discord users..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <head />
          <body className={`${geistSans.className} overflow-x-hidden`}>
              <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
              >
                  <div className="fixed h-16 flex items-center w-full px-8 z-10">
                      <div className="ml-auto flex items-center gap-3 dark">
                          <code className="text-xs opacity-60 transition-all duration-200 hover:opacity-100 xl:text-white">v3</code>
                          <ModeToggle />
                      </div>

                  </div>
                  {children}
              </ThemeProvider>
          </body>
      </html>
  );
}
