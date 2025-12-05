import Content from "../barang/Content";

export const metadata = {
  title: "Daftar Barang Sembako – Sameera Mart Magelang",
  description:
    "Lihat daftar barang sembako lengkap dan terbaru di Sameera Mart. Tersedia eceran dan harga grosir khusus untuk warga Kabupaten Magelang dan Kota Magelang.",
  keywords: [
    "daftar barang sembako",
    "harga grosir sembako magelang",
    "sembako termurah magelang",
    "barang sameera mart",
  ],
  openGraph: {
    title: "Daftar Barang Sembako – Sameera Mart",
    description:
      "Stok sembako lengkap, harga bersaing untuk wilayah Magelang dan sekitarnya.",
    url: "https://sameeramart.com/barang",
    siteName: "Sameera Mart",
    images: [
      {
        url: "https://sameeramart.com/og-barang.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://sameeramart.com/barang",
  },
};


export default function Page() {
  return <Content />;
}