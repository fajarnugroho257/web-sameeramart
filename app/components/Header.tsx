"use client";

import { useState } from "react";
import Link from "next/link";
import { faBars, faXmark, faSearch, faMapSigns, faShop, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useSearchStore } from "../store/useSearchStore";

export default function Header() {
    const { keyword, setKeyword, resetKeyword } = useSearchStore();
    const [search, setSearch] = useState('');
    const router = useRouter();
    // 
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    // 
    const  handleSubmit = (e: any) => {
        e.preventDefault();
        setKeyword(search);
        // 
        router.push("/barang");
    }
    // 
    const handleReset = () => {
        resetKeyword();
        setSearch('');
    }
    
    return (
        <>
        <div className="bg-[#54999d] text-xs px-8 md:px-32 py-2 text-white block md:flex justify-between">
            <p className="text-xs"><FontAwesomeIcon icon={faShop} />Pusat Grosir Sembako Magelang</p>
            <p className="text-xs"><FontAwesomeIcon icon={faMapSigns} />Kwangsang, Kedungsari, Kec. Bandongan</p>
        </div>
        <header className="bg-[#6fc7cc] text-white shadow-lg sticky top-0 z-20 px-8 md:px-32">
            <div className="container mx-auto py-2 md:py-4 flex justify-between items-center">
                <div className="">
                    <h1 className="text-xl md:text-2xl font-bold m-0"><FontAwesomeIcon icon={faShop} /> Sameera</h1>
                </div>
                <nav className="hidden xl:flex space-x-6">
                    <Link href={'/'} className="hover:text-green-200">Home</Link>
                    <Link href={'barang'} className="hover:text-green-200">Barang</Link>
                    <Link href={'tentang-kami'} className="hover:text-green-200">Tentang Kami</Link>
                    <Link href={'lokasi'} className="hover:text-green-200">Lokasi</Link>
                </nav>
                <button id="mobile-menu-button" className="xl:hidden focus:outline-none" aria-label="Toggle menu">
                    <FontAwesomeIcon className="w-6 h-6 cursor-pointer" icon={isOpen ? faXmark : faBars} onClick={toggleMenu} />
                </button>
                <form onSubmit={handleSubmit} method="post" className="hidden xl:flex w-[500px]">
                    <div className="items-center w-full flex">
                        <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="text-black h-9 px-3 bg-white rounded-l-sm w-full border-none focus:outline-none focus:ring-0 hover:border-none" type="text" placeholder="Cari di Sameera"/>
                        <button type="submit" className="text-white cursor-pointer h-9 bg-black hover:bg-gray-600 px-3 font-semibold text-sm">
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                        </button>
                        <button type="button" onClick={handleReset} className="text-white cursor-pointer h-9 bg-red-500 hover:bg-red-400 rounded-r-sm px-3 font-semibold text-sm">
                            <FontAwesomeIcon icon={faTimes} className="text-white" />
                        </button>
                    </div>
                </form>
            </div>
            <div id="mobile-menu" className={`xl:hidden bg-[#6fc7cc] rounded-b-lg overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0" }`}>
                <nav className="px-4 pb-4 pt-1 space-y-2">
                    <Link href={'/'} className="block hover:text-green-200" onClick={toggleMenu}>Home</Link>
                    <Link href={'barang'} className="block hover:text-green-200" onClick={toggleMenu}>Barang</Link>
                    <Link href={'tentang-kami'} className="block hover:text-green-200" onClick={toggleMenu}>Tentang Kami</Link>
                    <Link href={'lokasi'} className="block hover:text-green-200" onClick={toggleMenu}>Lokasi</Link>
                    <form onSubmit={handleSubmit} method="post" className="">
                        <div className="items-center w-full flex">
                            <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} className="text-black h-9 px-3 bg-white rounded-l-sm w-full border-none focus:outline-none focus:ring-0 hover:border-none" type="text" placeholder="Cari di Sameera"/>
                            <button type="submit" className="text-white cursor-pointer h-9 bg-black hover:bg-gray-600 px-3 font-semibold text-sm">
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                            <button type="button" onClick={handleReset} className="text-white cursor-pointer h-9 bg-red-500 hover:bg-red-400 rounded-r-sm px-3 font-semibold text-sm">
                                <FontAwesomeIcon icon={faTimes} className="text-white" />
                            </button>
                        </div>
                    </form>
                    {/* <button className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-900 w-full">Cart (0)</button> */}
                </nav>
            </div>
        </header>
        </>
    ) ;
}
