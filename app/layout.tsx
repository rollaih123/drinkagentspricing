import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrinkAgents — Partner Program",
  description:
    "Join DrinkAgents, the AI-powered beverage discovery platform. Get a branded experience page, AI finder quiz, video avatar, and full consumer analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
