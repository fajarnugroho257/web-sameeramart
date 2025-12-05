import ProductSlider from "./components/ProductSlider";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PromoSlider from "./components/PromoSlider";
import BannerSlider from "./components/BannerSlider";
import Testimoni from "./components/Testi";
import WhyChooseMe from "./components/WhyChooseMe";
import Faq from "./components/Faq";
import { getBanner } from "./services/api";
import { getPromo } from "./services/api";
import { getTerbanyak } from "./services/api";
import { getDataWebsite } from "./services/api";

export const metadata = {
  title: "Sameera Mart – Sembako Grosir & Eceran di Magelang",
  description:
    "Sameera Mart menyediakan kebutuhan sembako lengkap, eceran maupun grosir dengan harga terbaik untuk warga Kabupaten Magelang dan Kota Magelang. Belanja lebih hemat dan lengkap di Sameera Mart.",
  keywords: [
    "sembako magelang",
    "grosir sembako magelang",
    "eceran sembako magelang",
    "toko sembako bandongan",
    "sameera mart",
  ],
  openGraph: {
    title: "Sameera Mart – Toko Sembako Grosir & Eceran",
    description:
      "Belanja sembako lengkap, murah, eceran atau grosir untuk warga Kabupaten dan Kota Magelang.",
    url: "https://sameeramart.com/",
    siteName: "Sameera Mart",
    images: [
      {
        url: "https://sameeramart.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://sameeramart.com/",
  },
};


export default async function Home() {
  const dataBanner = await getBanner({id: '5'});
  const dataPromo = await getPromo({id: '5'});
  const dataTerbanyak = await getTerbanyak({id: '5'});
  const dataWhy = await getDataWebsite({id: '5', endPoint: 'get-why-choose-me'});
  const dataTesti = await getDataWebsite({id: '5', endPoint: 'get-testimoni'});
  const dataFaq = await getDataWebsite({id: '5', endPoint: 'get-faq'});
  return (
    <>
      <section className="relative best-selling w-full py-5 px-8 md:px-32">
        <BannerSlider data={dataBanner}/>
        <div className="banner-left absolute left-10 md:left-36 z-10 top-1/2 -translate-y-1/2 text-xs md:text-base lg:text-xl bg-[#54999d] hover:bg-gray-400 cursor-pointer w-6 h-6 md:w-10 md:h-10  lg:w-12 lg:h-12 rounded-full flex justify-center items-center text-white">
          <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
        <div className="banner-right absolute right-10 md:right-36 z-10 top-1/2 -translate-y-1/2 text-xs md:text-base lg:text-xl bg-[#54999d] hover:bg-gray-400 cursor-pointer w-6 h-6 md:w-10 md:h-10  lg:w-12 lg:h-12 rounded-full flex justify-center items-center text-white">
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 custom-pagination flex gap-1"></div>
      </section>
      <section className="best-selling w-full mt-4 md:mt-7 py-9 px-8 md:px-32 bg-gray-50">
        <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00b4bd]">Promo</h2>
          <div className="flex gap-2">
            <div className='cursor-pointer hover:bg-[#a8dde1] promo-left bg-[#6fc7cc] h-6 w-6 md:h-9 md:w-9 flex items-center justify-center rounded-full text-white'><FontAwesomeIcon icon={faChevronLeft}/></div>
            <div className='cursor-pointer hover:bg-[#a8dde1] promo-right bg-[#6fc7cc] h-6 w-6 md:h-9 md:w-9 flex items-center justify-center rounded-full text-white'><FontAwesomeIcon icon={faChevronRight}/></div>
          </div>
        </div>
        <PromoSlider data={dataPromo}/>
      </section>
      <WhyChooseMe data={dataWhy}/>
      <section className="best-selling w-full mt-6 md:mt-10 py-5 px-8 md:px-32 bg-gray-50">
        <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#6fc7cc] text-center">Produk Terlaris</h2>
          <div className="flex gap-2">
            <div className='cursor-pointer hover:bg-[#a8dde1] prod-left bg-[#6fc7cc] h-6 w-6 md:h-9 md:w-9 flex items-center justify-center rounded-full text-white'><FontAwesomeIcon icon={faChevronLeft}/></div>
            <div className='cursor-pointer hover:bg-[#a8dde1] prod-right bg-[#6fc7cc] h-6 w-6 md:h-9 md:w-9 flex items-center justify-center rounded-full text-white'><FontAwesomeIcon icon={faChevronRight}/></div>
          </div>
        </div>
        <ProductSlider data={dataTerbanyak}/>
      </section>
      <Testimoni data={dataTesti}/>
      <Faq data={dataFaq}/>
    </>
  );
}
