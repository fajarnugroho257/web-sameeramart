'use client';
import { useEffect, useState } from "react";

import Image from 'next/image';
import Loading from "../components/loading";
import { getAboutMe } from "../services/api";

const fetchTentangKami = async () => {
    return await getAboutMe({id: '5'});
}

export default function Content() {
    const [items, setItems] = useState<{data: any[], rs_image: any[]}>({data: [], rs_image: []});
    const [loading, setLoading] = useState(false);

    useEffect(() =>  {
        setLoading(true);
        fetchTentangKami().then((res) => {
            setItems(res);
            setLoading(false);
        })
    }, []);
     return (
        <div className="py-5 px-8 md:px-32">
            {loading && <>
                <Loading/>
            </>}
            <div className="flex gap-1 md:gap-3 items-center mb-3 md:mb-5" data-aos="fade-right">
                <div className="w-3 h-7 md:w-5 md:h-10 bg-[#6fc7cc] rounded-sm"></div>
                <h1 className="font-semibold text-xl md:text-2xl">Tentang Kami</h1>
            </div>
            <div className="block md:flex md:gap-8">
                {/* <p className="text-justify md:w-[75%]" data-aos="fade-right">{tentangKami.data}</p> */}
                <div
                    className="text-justify md:w-[75%]"
                    data-aos="fade-right"
                    >
                    <div
                        dangerouslySetInnerHTML={{ __html: items.data }}
                    />
                </div>
                <div className=' md:w-[25%]' data-aos="fade-left">
                    <h2 className='font-semibold mb-1 md:mb-2'>Aktivitas</h2>
                    <div className='flex flex-col gap-2'>
                        {items.rs_image.map((item: any) => (
                            // <Image src={'http://127.0.0.1:8000/image/tentang_kami/6/' + item.pref_value} className="w-full" alt="banner" loading="lazy" width={500} height={100}/>
                            <img key={item.id} src={'http://127.0.0.1:8000/image/tentang_kami/6/' + item.pref_value} className="w-full" alt="banner" loading="lazy" width={500} height={100}/>
                        ))}
                        {/* <Image src={'/images/banner-1.png'} className="w-full" alt="banner" loading="lazy" width={500} height={100}/>
                        <Image src={'/images/banner-2.png'} className="w-full" alt="banner" loading="lazy" width={500} height={100}/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
