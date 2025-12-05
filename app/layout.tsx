import "aos/dist/aos.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOSWrapper from "./components/AOSWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/cartLogo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Sameera Mart",
              image: "https://sameeramart.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kwangsang, Kedungsari, Bandongan",
                addressLocality: "Magelang",
                addressRegion: "Jawa Tengah",
                addressCountry: "ID",
              },
              openingHours: "Mo-Su 07:00-20:00",
              url: "https://sameeramart.com/",
              servesLocation: ["Kabupaten Magelang", "Kota Magelang"],
              priceRange: "IDR",
            }),
          }}
        />
      </head>
      <body className={` ${poppins.className} flex flex-col min-h-screen bg-gray-50`}>
        <AOSWrapper />
        <Header />
        {/* <main className="grow py-5 px-8 md:px-32">{children}</main> */}
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
