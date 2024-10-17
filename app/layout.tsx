import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js + ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成できるサイトです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js + ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成できるサイトです。",
    images: ["ogp.ong"],
  },
  alternates: {
    canonical: "https://localhost:3000",
  },
};

// ReadOnly<> の <> の中に入った値は読み取り専用にすることができるので、これ以降、値が変更されない
export default function RootLayout({
  // デストラクチャリング
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
