import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "情報科学専門学校 卒業パーティー 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
