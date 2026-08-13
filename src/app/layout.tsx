import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architectural Oceanfront Luxury Villa - Villas for Rent in Malibu, California",
  description:
    "Explore this architectural luxury villa with panoramic ocean views, private infinity pool, chef's kitchen, and high-end amenities in Malibu, California.",
  keywords: ["Airbnb", "Malibu", "Luxury Villa", "Vacation Rental", "Oceanfront", "Infinity Pool"],
  authors: [{ name: "Airbnb Clone" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-airbnb-black antialiased selection:bg-airbnb-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
