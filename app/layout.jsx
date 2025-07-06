import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Just Add Marmite - The Ultimate Yeast Extract Experience",
  description:
    "Discover recipes, facts, and the cult of Marmite - Britain's iconic savory spread. Love it or hate it, we celebrate all things Marmite!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="text-center my-16">
          <Link href="/">
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </Link>
        </header>

        <main className="max-w-6xl mx-auto px-4 w-full box-border flex-1">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-400 py-10 text-center mt-auto">
          <p>Copyright 2025 Just Add Marmite :)</p>
        </footer>
      </body>
    </html>
  );
}
