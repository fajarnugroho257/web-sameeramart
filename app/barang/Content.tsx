"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { getBarang } from "../services/api";
import { formatRupiah } from "../utils/formatRupiah";
import Loading from "../components/loading";
import { useSearchStore } from "../store/useSearchStore";

const fetchBarang = async (page: number, search: String) => {
  return await getBarang({id: '5', page: page, search: search});
}

export default function Content() {
  const { keyword } = useSearchStore();
  // 
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  // Load pertama
  useEffect(() =>  {
    setLoading(true);
    fetchBarang(1, keyword).then((respon)=>{
      setItems(respon.data.data);
      setLastPage(respon.data.last_page);
      setLoading(false);
    });
  }, [keyword]);
  
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setLoading(true);
    fetchBarang(nextPage, keyword).then((respon)=>{
      setItems((prev) => [...prev, ...respon.data.data]);
      setLoading(false);
      setPage((prev) => prev + 1);
    });
  }

  return (
    <div className="py-5 px-8 md:px-32">
        {loading && <>
          <Loading/>
        </>}
        <div className="flex gap-1 md:gap-3 items-center mb-3 md:mb-5" data-aos="fade-right">
            <div className="w-3 h-7 md:w-5 md:h-10 bg-[#6fc7cc] rounded-sm"></div>
            <h1 className="font-semibold text-xl md:text-2xl">Daftar Barang</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4">
          {items.map((val : {id: number, detail_image_path: string, detail_image_name: string, barang_nama: string, barang_harga_jual: string, barang_grosir_pembelian:string, barang_grosir_harga_jual:string}) => (
            <div key={val.id} className="bg-gray-50 shadow-md rounded-sm w-full h-full group cursor-pointer">
              <div className='w-3/4 mx-auto'>
              <Image
                  src={`https://sameeramart.com/app-pos/${val.detail_image_path}/${val.detail_image_name}`}
                  alt={val.barang_nama}
                  width={500}
                  height={500}
                  className="w-full h-48 md:h-52 pt-5 pb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8+9/hPQAIxgN/WePXsQAAAABJRU5ErkJggg=="
                />
                {/* <img
                  src=
                  alt={'apaya'}
                  width={500}
                  height={500}
                  className="w-full h-48 md:h-52 pt-5 pb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                  loading="lazy"
                /> */}
                <h1 className='text-xs md:text-base font-semibold mb-1 text-gray-800'>{val.barang_nama}</h1>
                <hr className='my-2' />
                <p className='text-xs  md:text-[14px] font-semibold mb-0 text-[#00b4bd]'>{formatRupiah(val.barang_harga_jual)}/pcs</p>
                <p className='text-xs  md:text-[14px] font-semibold mb-3 text-[#00b4bd]'>{formatRupiah(val.barang_grosir_harga_jual)}/pcs <small className='font-bold underline'>(min. {val.barang_grosir_pembelian})</small></p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {lastPage !== page ? 
          <><div onClick={handleLoadMore} className="bg-[#00b4bd] cursor-pointer text-xs md:text-base text-white my-4 md:my-7 w-fit rounded-sm px-2 py-1">
              Lebih banyak lagi..
            </div>
          </> : 
          <>
          <div className="bg-gray-600 text-xs md:text-base text-white my-4 md:my-7 w-fit rounded-sm px-2 py-1">
            Data sudah tertampil semua
          </div>
          </>
          }
        </div>
    </div>
  );
}
