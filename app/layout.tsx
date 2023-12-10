import "./styles.css";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Landon Kuhn",
  description: "Personal website of Landon Kuhn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
