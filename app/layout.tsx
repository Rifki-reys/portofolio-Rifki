import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import { THEME_INIT_SCRIPT } from "@/components/ThemeScript";
import "./globals.css";

/** Display face: a variable grotesk with tight apertures, used for headings. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
});

/** Body face: neutral, highly legible at small sizes. */
const body = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

/** Mono face: for kickers, indices and metadata. */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rifkifauzi.dev"),
  title: {
    default: "Rifki Fauzi — Web Developer & Information Systems Student",
    template: "%s — Rifki Fauzi",
  },
  description:
    "Portfolio of Rifki Fauzi, an Information Systems student building web applications with PHP, CodeIgniter 4, MySQL, Docker and AWS.",
  keywords: [
    "Rifki Fauzi",
    "Web Developer",
    "Information Systems",
    "CodeIgniter",
    "MySQL",
    "Docker",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Rifki Fauzi" }],
  creator: "Rifki Fauzi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rifki Fauzi — Portfolio",
    description:
      "Web developer and Information Systems student specialising in web applications, databases and cloud infrastructure.",
    siteName: "Rifki Fauzi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifki Fauzi — Portfolio",
    description:
      "Web developer and Information Systems student specialising in web applications, databases and cloud infrastructure.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}