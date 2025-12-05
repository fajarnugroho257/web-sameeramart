export default function WhyChoosemMe(data:any) {
    return (
        <section className="why-choose-me w-full mt-4 md:mt-7 py-7 px-8 md:px-32 bg-white" data-aos="fade-up">
            <div className="mb-7 text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00b4bd]">Kenapa Pilih Sameera..?</h2>
                <p className="text-xs md:text-sm text-gray-600">Solusi belanja grosir yang praktis untuk toko, warung, dan kebutuhan rumah tangga.</p>
            </div>
            <div className="flex flex-col gap-4 xl:gap-10 md:grid md:grid-cols-3">
                {data.data.data.map((item: any) => {
                    return (
                        <div key={item.id} className="border border-gray-200 rounded-xl px-4 py-5 md:py-8 cursor-pointer shadow transition-transform duration-300 ease-in-out hover:scale-105">
                            <h3 className="font-semibold text-base mb-2 md:mb-4">{item.title}</h3>
                            <p className="text-sm font-extralight mt-2 text-gray-600">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}