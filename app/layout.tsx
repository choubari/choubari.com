import { Nav } from "@/components/nav";
import "./globals.css";
import { Providers } from "@/lib/provider";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";
import Analytics from "@/components/analytics";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Server Components",
    "Github",
    "Vercel",
  ],
  authors: [
    {
      name: "Kawtar Choubari",
      url: "https://choubari.com",
    },
  ],
  creator: "Kawtar Choubari",
  publisher: "Kawtar Choubari",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "darkblue" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.jpg`,
        alt: "Choubari.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@choubari_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light dark:bg-darker text-darker dark:text-lighter overflow-x-hidden">
        <Providers>
          <Nav />
          <main className="mx-auto lg:max-w-7xl" role="main">
            {children}
            <Analytics />
          </main>
        </Providers>
        <Footer />
        <script
          type="text/javascript"
          async
          src="https://embeds.beehiiv.com/attribution.js"
        ></script>
      </body>
    </html>
  );
}
