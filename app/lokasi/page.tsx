import { getPref } from "../services/api";

export const metadata = {
  title: "Lokasi Sameera Mart – Bandongan, Magelang",
  description:
    "Temukan lokasi Sameera Mart di Kwangsang, Kedungsari, Bandongan. Mudah diakses dari Kabupaten dan Kota Magelang.",
  keywords: [
    "lokasi sameera mart",
    "toko sembako magelang",
    "alamat toko sembako bandongan",
  ],
  openGraph: {
    title: "Lokasi Sameera Mart – Bandongan",
    description:
      "Alamat dan peta lokasi Sameera Mart di Bandongan, Magelang.",
    url: "https://sameeramart.com/lokasi",
    siteName: "Sameera Mart",
    images: [
      {
        url: "https://sameeramart.com/og-lokasi.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://sameeramart.com/lokasi",
  },
};


export default async function Lokasi() {
  const pref_alamat = await getPref({id: '5', prefName: 'pref_alamat'});
  return (
    <div className="py-5 px-8 md:px-32">
        <div className="flex gap-1 md:gap-3 items-center mb-3 md:mb-5" data-aos="fade-right">
            <div className="w-3 h-7 md:w-5 md:h-10 bg-[#6fc7cc] rounded-sm"></div>
            <h1 className="font-semibold text-xl md:text-2xl">Lokasi Kami</h1>
        </div>
        <div className="block md:flex md:gap-8">
            <iframe className='w-full md:w-[75%]' data-aos="fade-right"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6933451423656!2d110.19052661083212!3d-7.499067673937564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8fcdfd890d3b%3A0x65b7c316f3da722e!2sToko%20Sameera%20%2F%20Aquafit!5e0!3m2!1sid!2sid!4v1763445919787!5m2!1sid!2sid"
                width="600"
                height="450"
                loading="lazy">
            </iframe>
            <div className='mt-3 md:mt-0 w-full md:w-[25%]' data-aos="fade-left">
                <h2 className='font-semibold mb-1'>Keterangan</h2>
                <p className="text-justify">Lokasi kami berada di {pref_alamat.data}</p>
            </div>
        </div>
    </div>
    
  );
}
