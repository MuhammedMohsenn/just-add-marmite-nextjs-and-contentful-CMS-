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
              <p className="leading-4 text-[1rem] font-normal">Just Add</p>
              <p className="text-2xl md:text-4xl font-extrabold md:text-red">
                Marmite
              </p>
            </h1>
            <h2 className="text-[1.25rem] font-normal">Spread The Joy</h2>
          </Link>
        </header>

        <main className="max-w-6xl mx-auto px-4 w-full box-border flex-1">
          {children}
        </main>

        <footer className="bg-[#111] text-[#bbb] py-10 text-center mt-4">
          <p>Copyright 2025 Just Add Marmite :)</p>
        </footer>
      </body>
    </html>
  );
}
