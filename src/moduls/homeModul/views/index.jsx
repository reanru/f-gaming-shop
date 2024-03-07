import React, { useState } from 'react'

import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuUserCircle2 } from "react-icons/lu";
import { IoReload } from "react-icons/io5";
import { AiOutlineLayout } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";

export default function Index() {
    const [search, setSearch] = useState("");

    return (
        <div className="flex flex-col">
            <section className="img-banner-section relative h-[85rem] md:h-[100rem] lg:h-[54rem] flex items-center justify-center -z-10">
                <div className="container mx-auto w-10/12 lg:w-11/12 xl:w-10/12  md:mt-10 lg:flex lg:space-x-4 space-y-12 lg:space-y-0 text-white">
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
            </section>

            <section className="flex justify-center z-10 -mt-20">
                <div className="container w-10/12 lg:w-11/12 xl:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <section className="container mx-auto mt-28 w-10/12 lg:w-11/12 xl:w-10/12">
                <h4 className="uppercase font-bold text-red-500">Trending</h4>
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-3xl font-bold text-gray-900">Trending Games</h1>
                    <button className="bg-red-500 hover:bg-blue-500 py-3 px-6 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300 hidden lg:block">View All</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className="group flex flex-col justify-center items-center bg-gray-200 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="relative bg-[url('./assets/image/trending-01.jpg')] bg-cover w-full h-full rounded-3xl">
                            <div className="absolute bg-blue-500 text-white py-2 px-4 right-4 top-4 rounded-lg">
                                <div className="text-right text-sm font-semibold line-through">$28</div>
                                <div className="text-lg font-bold">$20</div>
                            </div>
                        </div>
                        <div className="flex w-full py-4 px-6 justify-between items-center rounded-b-3xl">
                            <div>
                                <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                            </div>
                            <div className="flex justify-center items-center h-10 w-10 bg-red-500 rounded-full group-hover:bg-blue-400 transition-all duration-200">
                                <FaBagShopping className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-gray-200 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="relative bg-[url('./assets/image/trending-02.jpg')] bg-cover w-full h-full rounded-3xl">
                            <div className="absolute bg-blue-500 text-white py-2 px-4 right-4 top-4 rounded-lg">
                                {/* <div className="text-right text-sm font-semibold line-through">$28</div> */}
                                <div className="text-lg font-bold text-white">$20</div>
                            </div>
                        </div>
                        <div className="flex w-full py-4 px-6 justify-between items-center rounded-b-3xl">
                            <div>
                                <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                            </div>
                            <div className="flex justify-center items-center h-10 w-10 bg-red-500 rounded-full group-hover:bg-blue-400 transition-all duration-200">
                                <FaBagShopping className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-gray-200 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="relative bg-[url('./assets/image/trending-03.jpg')] bg-cover w-full h-full rounded-3xl">
                            <div className="absolute bg-blue-500 text-white py-2 px-4 right-4 top-4 rounded-lg">
                                <div className="text-right text-sm font-semibold line-through">$28</div>
                                <div className="text-lg font-bold">$20</div>
                            </div>
                        </div>
                        <div className="flex w-full py-4 px-6 justify-between items-center rounded-b-3xl">
                            <div>
                                <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                            </div>
                            <div className="flex justify-center items-center h-10 w-10 bg-red-500 rounded-full group-hover:bg-blue-400 transition-all duration-200">
                                <FaBagShopping className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-gray-200 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="relative bg-[url('./assets/image/trending-04.jpg')] bg-cover w-full h-full rounded-3xl">
                            <div className="absolute bg-blue-500 text-white py-2 px-4 right-4 top-4 rounded-lg">
                                {/* <div className="text-right text-sm font-semibold line-through">$28</div> */}
                                <div className="text-lg font-bold">$20</div>
                            </div>
                        </div>
                        <div className="flex w-full py-4 px-6 justify-between items-center rounded-b-3xl">
                            <div>
                                <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                            </div>
                            <div className="flex justify-center items-center h-10 w-10 bg-red-500 rounded-full group-hover:bg-blue-400 transition-all duration-200">
                                <FaBagShopping className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="top-games-section flex bg-gray-100 mt-28 py-28">
                <div className="container mx-auto w-10/12 lg:w-11/12 xl:w-10/12">
                    <h4 className="uppercase font-bold text-red-500">Top Games</h4>
                    <div className="flex justify-between items-center mt-4">
                        <h1 className="text-3xl font-bold text-gray-900">Most Played</h1>
                        <button className="bg-red-500 hover:bg-blue-500 py-3 px-6 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300 hidden lg:block">View All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
                        <div className="group flex flex-col justify-center items-center bg-white h-96 lg:h-72 rounded-3xl cursor-pointer">
                            <div className="relative bg-[url('./assets/image/top-game-01.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                            <div className="w-full text-center rounded-b-3xl">
                                <div className="py-4 px-6">
                                    <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                    <h5 className="text-base font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="-mb-5 bg-red-500 group-hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center bg-white h-96 lg:h-72 rounded-3xl cursor-pointer">
                            <div className="relative bg-[url('./assets/image/top-game-02.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                            <div className="w-full text-center rounded-b-3xl">
                                <div className="py-4 px-6">
                                    <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                    <h5 className="text-base font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="-mb-5 bg-red-500 group-hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center bg-white h-96 lg:h-72 rounded-3xl cursor-pointer">
                            <div className="relative bg-[url('./assets/image/top-game-03.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                            <div className="w-full text-center rounded-b-3xl">
                                <div className="py-4 px-6">
                                    <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                    <h5 className="text-base font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="-mb-5 bg-red-500 group-hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center bg-white h-96 lg:h-72 rounded-3xl cursor-pointer">
                            <div className="relative bg-[url('./assets/image/top-game-04.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                            <div className="w-full text-center rounded-b-3xl">
                                <div className="py-4 px-6">
                                    <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                    <h5 className="text-base font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="-mb-5 bg-red-500 group-hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col justify-center items-center bg-white h-96 lg:h-72 rounded-3xl cursor-pointer">
                            <div className="relative bg-[url('./assets/image/top-game-05.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                            <div className="w-full text-center rounded-b-3xl">
                                <div className="py-4 px-6">
                                    <h6 className="text-sm font-medium text-gray-500">Action</h6>
                                    <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="-mb-5 bg-red-500 group-hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto mt-28 w-10/12 lg:w-11/12 xl:w-10/12">
                <div className="space-y-4">
                    <h4 className="uppercase font-bold text-red-500 text-center">Trending</h4>
                    <h1 className="text-3xl font-bold text-gray-900 text-center">Trending Games</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
                    <div className="group flex flex-col justify-center items-center bg-blue-600 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="flex w-full py-4 px-6 justify-center items-center rounded-b-3xl">
                            <h5 className="text-lg font-bold text-white text-center">Action</h5>
                        </div>
                        <div className="relative bg-[url('./assets/image/categories-01.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-blue-600 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="flex w-full py-4 px-6 justify-center items-center rounded-b-3xl">
                            <h5 className="text-lg font-bold text-white text-center">Action</h5>
                        </div>
                        <div className="relative bg-[url('./assets/image/categories-02.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-blue-600 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="flex w-full py-4 px-6 justify-center items-center rounded-b-3xl">
                            <h5 className="text-lg font-bold text-white text-center">Action</h5>
                        </div>
                        <div className="relative bg-[url('./assets/image/categories-03.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-blue-600 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="flex w-full py-4 px-6 justify-center items-center rounded-b-3xl">
                            <h5 className="text-lg font-bold text-white text-center">Action</h5>
                        </div>
                        <div className="relative bg-[url('./assets/image/categories-04.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                    </div>
                    <div className="group flex flex-col justify-center items-center bg-blue-600 h-96 lg:h-72 rounded-3xl cursor-pointer">
                        <div className="flex w-full py-4 px-6 justify-center items-center rounded-b-3xl">
                            <h5 className="text-lg font-bold text-white text-center">Action</h5>
                        </div>
                        <div className="relative bg-[url('./assets/image/categories-05.jpg')] bg-cover w-full h-full rounded-3xl"></div>
                    </div>
                </div>
            </section>

            <section className="container relative mx-auto mt-28 w-10/12 lg:w-11/12 xl:w-10/12">
                <div className="absolute bg-[url('./assets/image/cta-bg.jpg')] mx-auto inset-0 w-[34rem] h-[31rem] rounded-3xl -z-10 hidden lg:block"></div>

                <div className="lg:flex items-end justify-around lg:mt-20 space-y-8 lg:space-y-0">
                    <div className="bg-gray-100 p-10 lg:p-20 rounded-3xl w-full lg:w-[26rem] xl:w-[30rem]">
                        <h5 className="uppercase font-bold text-red-500">Our Shop</h5>
                        <h1 className="text-4xl font-bold mt-5">Go Pre-Order Buy & Get Best <span className="text-blue-500">Prices</span> For You!</h1>

                        <div className="mt-14 space-y-10">
                            <p className="font-bold text-gray-600">Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>

                            <button className="-mb-5 bg-red-500 hover:bg-blue-500 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-white transition-all duration-300">View All</button>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-10 lg:p-20 rounded-3xl w-full lg:w-[26rem] xl:w-[30rem]">
                        <h5 className="uppercase font-bold text-red-500">Newsletter</h5>
                        <h1 className="text-4xl font-bold mt-5">Get Up To $100 Off Just Buy <span className="text-blue-500">Subscribe</span> Newsletter!</h1>

                        <div className="mt-14 space-y-10">
                            <div className="relative flex justify-between bg-white w-full rounded-full">
                                <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="outline-none text-gray-500 rounded-full px-6 w-full" placeholder="Your email..." />
                                <button className="bg-red-500 py-3 px-6 rounded-full whitespace-nowrap uppercase text-white">Search Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
