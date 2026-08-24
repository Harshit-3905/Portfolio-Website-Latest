import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { USER } from "@/data/user";
import { SOCIALS } from "@/data/socials";

const fontHandwritten = Caveat({
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
});

const themeInitScript = `
try {
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var dark = stored === 'dark' || (stored !== 'light' && prefersDark);
  document.documentElement.classList.toggle('dark', dark);
} catch (_) {}
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${USER.website}/#person`,
  name: USER.name,
  url: USER.website,
  email: USER.email,
  image: `${USER.website}${USER.avatar}`,
  jobTitle: USER.role,
  worksFor: {
    "@type": "Organization",
    name: USER.company,
    url: USER.companyHref,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: SOCIALS.map((social) => social.href),
};

export const metadata: Metadata = {
  metadataBase: new URL(USER.website),
  title: "Harshit Joshi – Full Stack Developer",
  description:
    "Portfolio of Harshit Joshi, a Full Stack Developer building scalable, production-grade software. Currently Software Engineer at KoinX.",
  keywords: [
    "Harshit Joshi",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Harshit Joshi – Full Stack Developer",
    description:
      "Full Stack Developer building scalable, production-grade software.",
    url: "/",
    siteName: "Harshit Joshi",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${fontHandwritten.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
