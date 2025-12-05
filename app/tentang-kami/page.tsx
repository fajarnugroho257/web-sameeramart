import Content from "../tentang-kami/Content";

export const metadata = {
  title: "Tentang Kami – Sameera Mart Magelang",
  description:
    "Sameera Mart adalah toko sembako grosir & eceran di Kwangsang, Kedungsari, Bandongan. Melayani warga Kabupaten & Kota Magelang dengan harga terbaik.",
  keywords: [
    "tentang sameera mart",
    "toko sembako bandongan",
    "sembako magelang",
  ],
  openGraph: {
    title: "Tentang Kami – Sameera Mart",
    description:
      "Toko sembako terpercaya untuk warga Magelang. Menyediakan eceran dan grosir harga terjangkau.",
    url: "https://sameeramart.com/tentang-kami",
    siteName: "Sameera Mart",
    images: [
      {
        url: "https://sameeramart.com/og-tentang.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://sameeramart.com/tentang-kami",
  },
};



export default function Page() {
  return <Content />;
}