import type { Metadata } from "next";
import { Open_Sans, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navigationbar from "@/components/navigation";
import Footer from "@/components/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Sesuaikan dengan kebutuhan
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumibyte MDN - Web & Mobile App Development Agency",
  description: "Expert Website & App Development – High-Performance Websites, Custom Web Apps, and Scalable Mobile Solutions to Boost User Engagement and Business Growth.",
  keywords: [
    "Lumibyte",
    "Buat Website Medan",
    "Website Medan",
    "Lumibyte Medan",
    "Website Development",
    "App Development",
    "Custom Web Apps",
    "Mobile Solutions",
    "Buat Website",
    "Buat Aplikasi Mobile",
    "Jasa buat website",
    "Jasa buat aplikasi Mobile",
    "Agency Website",
    "Jasa buat Aplikasi"
  ],
  authors: [{ name: "Lumibyte MDN", url: "https://www.lumibyte-mdn.com" }],
  openGraph: {
    title: "Lumibyte MDN - Web & Mobile App Development Agency",
    description:
      "Expert Website & App Development – High-Performance Websites, Custom Web Apps, and Scalable Mobile Solutions to Boost User Engagement and Business Growth.",
    url: "https://www.lumibyte-mdn.com",
    siteName: "Lumibyte MDN",
    images: [
      {
        url: "https://www.lumibyte-mdn.com/png/avatar.png",
        width: 800,
        height: 800,
        alt: "Lumibyte MDN - Expert Website & App Development",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lumibyte - MDN",
              url: "https://www.lumibyte-mdn.com",
              logo: "https://www.lumibyte-mdn.com/png/avatar.png",
              sameAs: [
                "https://www.instagram.com/lumibyte.id",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <Navigationbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
