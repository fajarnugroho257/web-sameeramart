export default function Testi(data: any){
    return (
        <section id="testimoni" className="py-6 md:py-10 px-8 md:px-32 bg-white" data-aos="fade-up">
            <div className="container mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00b4bd] text-center">Apa Kata Pelanggan</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {data.data.data.map((item: any) => (
                        <div key={item.id} className="bg-white p-6 rounded-lg shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                            <p className="text-sm md:text-base">"{item.desc}"</p>
                            <p className="mt-4 text-sm md:text-base font-semibold">— {item.person}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}