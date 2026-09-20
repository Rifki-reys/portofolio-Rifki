import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rifki Fauzi — Portfolio",
  description: "Personal portfolio of Rifki Fauzi, Information Systems student and developer specializing in Web Development, Cloud Computing, Databases, and UI/UX.",
  openGraph: {
    title: "Rifki Fauzi — Portfolio",
    description: "Personal portfolio of Rifki Fauzi, Information Systems student and developer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400`}>
        {children}
      </body>
    </html>
  );
}
