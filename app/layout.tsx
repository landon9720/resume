import "./styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landon Kuhn",
  description: "Personal website of Landon Kuhn",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
