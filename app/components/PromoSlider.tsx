'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { faCalendarDays, faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatRupiah } from "../utils/formatRupiah";
import { formatTanggal } from "../utils/formatTanggal";

import Image from 'next/image';
import Link from 'next/link';

export default function PromoSlider(data : any) {
  return (
    <div className="" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          nextEl: ".promo-right",
          prevEl: ".promo-left",
        }}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        { data && data.data.data.map((p:any) => (
          <SwiperSlide key={p.id}>
            <div className="relative bg-[#f5f5f534] border border-gray-200 shadow-md pt-6 md:pt-10 rounded-md overflow-auto w-full h-[420px] xl:h-[300px] md:grid md:grid-cols-[35%_65%]">
              <div className='mx-7 md:mx-0 md:ml-7'>
                <Image
                  src={`https://sameeramart.com/app-pos/${p.barang_master.detail_barang.detail_image_path}/${p.barang_master.detail_barang.detail_image_name}`}
                  alt={p.barang_master.barang_nama}
                  width={500}
                  height={500}
                  className="w-full h-auto pt-5 pb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+9/hPQAIxgN/WePXsQAAAABJRU5ErkJggg=="
                />
                {/* <img
                  src={`http://127.0.0.1:8000/${p.barang_master.detail_barang.detail_image_path}/${p.barang_master.detail_barang.detail_image_name}`}
                  alt={p.barang_master.barang_nama}
                  width={1000}
                  height={1000}
                  className="w-full h-auto pt-5 pb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                /> */}
              </div>
              <div className='mx-7 mt-2 md:mt-0'>
                <h3 className='text-sm md:text-xl font-semibold text-[#00b4bd]'>{p.barang_master.barang_nama}</h3>
                <p className='text-xs md:text-sm my-1  font-bold'>Promo berlaku : </p>
                <div className='text-white bg-[#00b4bd] flex p-1 w-fit rounded-sm'>
                  <FontAwesomeIcon icon={faCalendarDays} className='text-xs'/>
                  <p className='text-white text-[9px]'>{formatTanggal(p.promo_start)} - {formatTanggal(p.promo_end)}</p>
                </div>
                <div className='flex justify-between mt-3 md:mt-2 items-start'>
                  <div className='text-left'>
                    <p className='text-sm md:text-lg text-red-500 font-bold'>{formatRupiah(p.promo_grosir_harga)}/pcs</p>
                    <p className='text-[9px] md:text-[10px] text-gray-500 font-extralight'>(min pembelian <span className='font-bold'>{p.promo_grosir_pembelian} pcs</span>)</p>
                    <p className='text-sm line-through font-semibold text-gray-400'>{formatRupiah(p.promo_harga)}/pcs</p>
                  </div>
                  <div>
                    {/* <Link href={'/'} className='text-sm bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-sm'>Lihat <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Link> */}
                  </div>
                </div>
              </div>
              <div className='absolute top-0 text-xs md:text-sm rounded-br-md bg-red-500 w-fit px-5 py-1 text-center text-white'>
                <div className='flex items-center gap-1'>
                  <FontAwesomeIcon icon={faBolt}></FontAwesomeIcon><p>Promo hari ini</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
