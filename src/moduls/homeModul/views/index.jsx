import React, { useState } from 'react'

import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { IoReload } from "react-icons/io5";
import { AiOutlineLayout } from "react-icons/ai";

export default function Index() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <section className="img-banner-section relative h-[85rem] md:h-[100rem] lg:h-[54rem] flex items-center justify-center">
                <div className="container mx-auto px-10 md:mt-10 lg:flex lg:space-x-4 space-y-12 lg:space-y-0 text-white">
                    <div className="w-full flex flex-col justify-center text-center lg:text-left space-y-16">
                        <div>
                            <h6 className="text-xl">WELCOME TO GAMING SHOP</h6>
                            <h2 className="text-5xl font-semibold mt-4">BEST GAMING SITE EVER!</h2>
                        </div>

                        <p className="mt-8 leading-7">This GAMING SHOP is free Tailwind HTML CSS website template for your gaming websites. This layout was created just to learn design slicing. Reference from <a href="https://templatemo.com/" target="blank">TemplateMo</a></p>

                        <div className="relative flex justify-between bg-white w-full lg:w-8/12 rounded-full">
                            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="outline-none text-gray-500 rounded-full px-6 w-full" placeholder="Type Something" />
                            <button className="bg-red-500 py-3 px-6 rounded-full whitespace-nowrap uppercase">Search Now</button>
                        </div>
                    </div>
                    <div className="relative flex justify-end items-center w-full">
                        {/* 
                            after screen lg : height & width fix 25rem & 30rem
                            before screen lg : responsive height & width, set width:100% and set padding-bottom:120% to adjust height
                        */}
                        <div className="img-banner relative bg-white w-full pb-[120%] lg:w-[25rem] lg:h-[30rem] lg:pb-0 rounded-3xl">
                            <div className="absolute right-6 top-6 bg-blue-500 px-4 py-1 font-bold text-xl rounded-full">$22</div>
                            <div className="absolute -bottom-6 -left-6 bg-red-500 h-24 w-24 flex items-center justify-center rounded-full font-bold text-3xl">-40%</div>
                        </div>
                    </div>
                </div>

                <div className="container absolute w-10/12 lg:w-11/12 xl:w-10/12 h-44 -bottom-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group flex flex-col justify-center items-center space-y-4 bg-white h-56 shadow-md rounded-3xl cursor-pointer">
                        <div className="bg-blue-500 p-5 rounded-full text-white group-hover:bg-red-500 transition-all duration-300">
                            <IoCloudDownloadOutline className="h-12 w-12" />
                        </div>
                        <p className="font-bold text-lg">FREE STORAGE</p>
                    </div>
                    <div className="group flex flex-col justify-center items-center space-y-4 bg-white h-56 shadow-md rounded-3xl cursor-pointer">
                        <div className="bg-blue-500 p-5 rounded-full text-white group-hover:bg-red-500 transition-all duration-300">
                            <LuUserCircle2 className="h-12 w-12" />
                        </div>
                        <p className="font-bold text-lg">USER MORE</p>
                    </div>
                    <div className="group flex flex-col justify-center items-center space-y-4 bg-white h-56 shadow-md rounded-3xl cursor-pointer">
                        <div className="bg-blue-500 p-5 rounded-full text-white group-hover:bg-red-500 transition-all duration-300">
                            <IoReload className="h-12 w-12" />
                        </div>
                        <p className="font-bold text-lg">REPLY READY</p>
                    </div>
                    <div className="group flex flex-col justify-center items-center space-y-4 bg-white h-56 shadow-md rounded-3xl cursor-pointer">
                        <div className="bg-blue-500 p-5 rounded-full text-white group-hover:bg-red-500 transition-all duration-300">
                            <AiOutlineLayout className="h-12 w-12" />
                        </div>
                        <p className="font-bold text-lg">EASY LAYOUT</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
