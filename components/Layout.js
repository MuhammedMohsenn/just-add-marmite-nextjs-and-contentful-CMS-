import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        {/* Primary Meta Tags */}
        <title>Just Add Marmite - The Ultimate Yeast Extract Experience</title>
        <meta
          name="description"
          content="Discover recipes, facts, and the cult of Marmite - Britain's iconic savory spread. Love it or hate it, we celebrate all things Marmite!"
        />
        <meta
          name="keywords"
          content="Marmite, yeast extract, British food, savory spread, recipes, vitamin B"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Just Add Marmite - The Taste You Either Love or Loathe"
        />
        <meta
          property="og:description"
          content="Join our community of Marmite lovers. Recipes, pairing ideas, and passionate debates about Britain's most divisive spread!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://example.com/marmite-jar-open.jpg"
        />
        <meta property="og:url" content="https://justaddmarmite.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Just Add Marmite" />
        <meta
          name="twitter:description"
          content="The ultimate resource for Marmite enthusiasts. #LoveItOrHateIt"
        />
        <meta
          name="twitter:image"
          content="https://example.com/marmite-twitter-card.jpg"
        />

        {/* Additional Marmite-specific tags */}
        <meta name="food:spread" content="yeast extract" />
        <meta name="food:origin" content="United Kingdom" />
        <link rel="icon" href="/marmite-favicon.ico" />
      </Head>

      <header>
        <Link href="/">
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2025 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
