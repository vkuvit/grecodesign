import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Greco Design",
  description: "Greco Desing website",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <Head>
      <title>Greco Desing</title>
      <meta name="greco design" content={'desing'} />
      <link rel="icon" href="/favicon.ico" sizes="any"/>
    </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
