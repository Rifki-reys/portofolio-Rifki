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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col selection:bg-cyan-400/20 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}
