import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dancing-script/400.css";
import "@fontsource/dancing-script/500.css";
import "@fontsource/dancing-script/600.css";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://100th-day-donation-essential.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "100 Days of Love | 100th Day Donation",
  description:
    "A warm, mobile-first invitation celebrating 100 days of love, gratitude and giving.",
  openGraph: {
    title: "100 Days of Love | 100th Day Donation",
    description:
      "Join us in celebrating 100 beautiful days of love, gratitude and giving.",
    type: "website",
    images: [
      {
        url: "/social-share.jpg",
        width: 240,
        height: 520,
        alt: "100 Days of Love invitation preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Days of Love | 100th Day Donation",
    description:
      "Join us in celebrating 100 beautiful days of love, gratitude and giving.",
    images: ["/social-share.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f2e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
