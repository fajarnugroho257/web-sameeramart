'use client';
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BannerSlider({ data }: { data: { data:any } }) {
  // console.log(data.data);
  return (
    <div className="" data-aos="fade-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".banner-right",
          prevEl: ".banner-left",
        }}
        // pagination={{ 
        //   clickable: true,
        //   // el: ".custom-pagination"
        // }}
        autoplay={{ delay: 3000 }}
      >
        {data.data.map((p: {id: number, banner_path: string, banner_name: string}) => (
          <SwiperSlide key={p.id}>
            <div className="mb-4 md:mb-5 lg:mb-6 w-full">
                <Image src={'https://sameeramart.com/app-pos/' + p.banner_path  + '/' + p.banner_name} className="w-full" alt="banner" loading="lazy" width={500} height={100}/>
                {/* <img src={'http://127.0.0.1:8000/' + p.banner_path  + '/' + p.banner_name} className="w-full h-40 md:h-96" alt="banner" loading="lazy" width={500} height={100}/> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="custom-pagination"></div> */}
    </div>
  );
}
