import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  metadataBase: new URL('https://udonswap.org/'),
  title: "UdonSwap",
  description: "Crafting Seamless Trades, Bowl by Bowl",
    openGraph: {
      title: "UdonSwap",
      description: "Crafting Seamless Trades, Bowl by Bowl",
      url: "https://udonswap.org/",
      siteName: "UdonSwap",
      images: [
        {
          url:"https://gateway.lighthouse.storage/ipfs/QmQgtmCNXCgAywPcqofYKWAqU5Tb1YWYKtCYjLuio6uLgT", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
              url: "https://gateway.lighthouse.storage/ipfs/QmQgtmCNXCgAywPcqofYKWAqU5Tb1YWYKtCYjLuio6uLgT", // Must be an absolute URL
              width: 1800,
              height: 1600,
              alt: "My custom alt",
            },
        
      ],
      locale: "en_US",
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
