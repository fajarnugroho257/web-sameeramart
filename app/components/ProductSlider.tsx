'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatRupiah } from "../utils/formatRupiah";
import Image from 'next/image';

export default function ProductSlider(data : any) {
  return (
    <div className="" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          nextEl: ".prod-right",
          prevEl: ".prod-left",
        }}
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data && data.data.data.map((p: any) => (
          <SwiperSlide key={p.id}>
            <div className="relative bg-[#f5f5f534] border border-gray-200 shadow-md my-4 pt-3 pb-6 rounded-sm w-full min-h-[300px]">
              <div className=' mt-6'>
                <Image
                  src={`https://sameeramart.com/app-pos/${p.detail_image_path}/${p.detail_image_name}`}
                  alt={p.barang_nama}
                  width={500}
                  height={500}
                  className="w-32 h-auto mx-auto"
                  loading="lazy"
                />
                {/* <img
                  src={`http://127.0.0.1:8000/${p.detail_image_path}/${p.detail_image_name}`}
                  alt={p.barang_nama}
                  width={500}
                  height={500}
                  className="w-32 h-auto mx-auto"
                  loading="lazy"
                /> */}
              </div>
              <div className='mx-7 mt-2'>
                <h3 className='text-sm md:text-base text-[#00b4bd] font-semibold'>{p.barang_nama}</h3>
                {/* <div className='flex justify-between mt-1 md:mt-2 items-center'>
                  <div className='flex gap-1 text-yellow-300 items-center text-xs md:text-base'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                  </div>
                </div> */}
                <div className='md:flex md:gap-1 md:items-center'>
                  <p className='text-xs md:text-base font-semibold text-gray-800'>{formatRupiah(p.barang_grosir_harga_jual)}/pcs</p>
                  <small className='text-[9px] text-gray-500'>(min pembelian <b>{p.barang_grosir_pembelian}pcs</b>)</small>
                </div>
                <p className='text-xs md:text-base font-semibold text-gray-800'>{formatRupiah(p.barang_harga_jual)}/pcs</p>
              </div>
              <div className="absolute top-0 left-4 bg-red-500 text-xs py-1.5 px-1 rounded-b-sm text-white">
                <div className='flex gap-1 items-center'>
                  <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon> <p>{p.total} Terjual</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
