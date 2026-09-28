import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace - Learn and Grow",
  description: "Modern online learning platform for creators and developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
