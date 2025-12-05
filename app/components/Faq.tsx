export default function Faq(data: any){
    return (
        <section className="bg-gray-50 py-10 md:py-20 px-8 md:px-32" data-aos="fade-down">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00b4bd]">Pertanyaan Seputar Pembelian</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.data.data.map((item: any) => (
                    <div key={item.id}>
                        <h3 className="text-sm md:text-base font-semibold">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}