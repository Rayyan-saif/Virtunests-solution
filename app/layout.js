// import Header from "/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.virtunests.com"),

  title: {
    default: "VirtuNests | Web Design, Marketing & Branding Agency",
    template: "%s | VirtuNests",
  },

  description:
    "VirtuNests provides expert services in Web Design, Website Redesign, App Development, SEO, Digital Marketing, Branding, Logo Design, UI/UX Design, Social Media Marketing, and complete business digital transformation.",

  keywords: [
    "Web Design Pakistan",
    "Website Redesign Agency",
    "App Development",
    "Digital Marketing Agency",
    "SEO Services Pakistan",
    "Graphic Design",
    "Business Branding",
    "Logo Design",
    "UI/UX Design",
    "Social Media Marketing",
    "Ecommerce Website Design",
    "Landing Page Design",
    "VirtuNests",
    "Professional Web Agency",
    "Best Web Designers Pakistan",
    "Digital Agency Karachi",
    "Marketing Strategy",
    "Content Creation",
    "Brand Identity Design",
    "Small Business Website",
    "Online Business Growth",
  ],

  authors: [{ name: "VirtuNests Team", url: "https://www.virtunests.com" }],

  creator: "VirtuNests",
  publisher: "VirtuNests Digital Agency",

  openGraph: {
    title: "VirtuNests | Elevate Your Digital Presence",
    description:
      "Professional Web Design, Branding, SEO, Marketing, and App Development services that grow your business.",
    url: "https://www.virtunests.com",
    type: "website",
    siteName: "VirtuNests",
    locale: "en_US",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "VirtuNests Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VirtuNests | Web & Marketing Agency",
    description:
      "Modern Web Design + SEO + Branding + Marketing Solutions for your business.",
    images: ["/Logo.png"],
    creator: "@virtunests",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  alternates: {
    canonical: "https://www.virtunests.com",
  },

  category: "Digital Agency",
  applicationName: "VirtuNests Digital & Design Solutions",

  themeColor: "#1E40AF",

  verification: {
    google: "google-site-verification-code",
    bing: "bing-verification-code",
  },

  other: {
    "copyright":
      `© ${new Date().getFullYear()} VirtuNests. All rights reserved.`,
    "author-type": "Agency",
    "service-area": "Worldwide",
    "rating": "5.0",
    "business-type": "Digital Agency / Web Design",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
