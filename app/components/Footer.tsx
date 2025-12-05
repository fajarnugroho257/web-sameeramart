import { faClock, faMapSigns, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import { getPref } from "../services/api";

export default async function Footer() {
  const pref_hp = await getPref({id: '5', prefName: 'pref_hp'});
  const pref_alamat = await getPref({id: '5', prefName: 'pref_alamat'});
  const pref_jam = await getPref({id: '5', prefName: 'pref_jam'});
  return (
    <footer className="bg-gray-800 text-white text-sm px-8 md:px-32 py-4">
      <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
        <div>
          <h1 className="font-semibold mb-2 text-base md:text-lg">Kontak Kami</h1>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faMapSigns} className="text-base md:text-lg"></FontAwesomeIcon>
              <p className="text-xs md:text-base">{pref_alamat.data}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-base md:text-lg"></FontAwesomeIcon>
              <p className="text-xs md:text-base">{pref_hp.data}</p>
            </div>
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faClock} className="text-base md:text-lg"></FontAwesomeIcon>
              <p className="text-xs md:text-base">{pref_jam.data}</p>
            </div>
          </div>
        </div>
        <div className="xl:mx-auto">
          <h1 className="font-semibold mb-2 text-base md:text-lg">Maps</h1>
          <div className="flex flex-col gap-y-1">
            <iframe className='w-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.6933451423656!2d110.19052661083212!3d-7.499067673937564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8fcdfd890d3b%3A0x65b7c316f3da722e!2sToko%20Sameera%20%2F%20Aquafit!5e0!3m2!1sid!2sid!4v1763445919787!5m2!1sid!2sid"
                width="100"
                height="250"
                loading="lazy">
            </iframe>
          </div>
        </div>
        <div className="md:mx-auto">
          <h1 className="font-semibold mb-2 text-base md:text-lg">Quick Link</h1>
          <div className="flex flex-col gap-y-1">
              <Link href={'/'} className="hover:text-green-200 text-xs md:text-base">Home</Link>
              <Link href={'barang'} className="hover:text-green-200 text-xs md:text-base">Barang</Link>
              <Link href={'tentang-kami'} className="hover:text-green-200 text-xs md:text-base">Tentang Kami</Link>
              <Link href={'lokasi'} className="hover:text-green-200 text-xs md:text-base">Lokasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
