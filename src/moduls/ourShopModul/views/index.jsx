import React, { useState } from 'react'

import { FaBagShopping } from "react-icons/fa6";

import trending01 from "../../../assets/image/trending-01.jpg";
import trending02 from "../../../assets/image/trending-02.jpg";
import trending03 from "../../../assets/image/trending-03.jpg";
import trending04 from "../../../assets/image/trending-04.jpg";

const listGame = [
    { image: trending01, name: "Assasin Creed", genre: "Adventure", price: 36, discPrice: 24 },
    { image: trending02, name: "Assasin Creed", genre: "Strategy", price: 36, discPrice: 24 },
    { image: trending03, name: "Assasin Creed", genre: "Racing", price: 36, discPrice: 24 },
    { image: trending04, name: "Assasin Creed", genre: "Action", price: 36, discPrice: 24 },
    { image: trending01, name: "Assasin Creed", genre: "Adventure", price: 36, discPrice: 24 },
    { image: trending02, name: "Assasin Creed", genre: "Strategy", price: 36, discPrice: 24 },
    { image: trending03, name: "Assasin Creed", genre: "Racing", price: 36, discPrice: 24 },
    { image: trending04, name: "Assasin Creed", genre: "Action", price: 36, discPrice: 24 },
    { image: trending01, name: "Assasin Creed", genre: "Adventure", price: 36, discPrice: 24 },
    { image: trending02, name: "Assasin Creed", genre: "Strategy", price: 36, discPrice: 24 },
    { image: trending03, name: "Assasin Creed", genre: "Racing", price: 36, discPrice: 24 },
    { image: trending04, name: "Assasin Creed", genre: "Action", price: 36, discPrice: 24 },
];

export default function Index() {

    const [selectedGenre, setSelectedGenre] = useState("All");

    return (
        <div className="">
            <section className="img-page-heading h-[27rem] space-y-6 flex flex-col justify-end pb-28 items-center">
                <h1 className="text-5xl font-bold uppercase text-white">Our Shop</h1>
                <div className="font-semibold space-x-1 text-white">
                    <span>Home</span>
                    <span>{'>'}</span>
                    <span>Our Shop</span>
                </div>
            </section>

            <section className="container mx-auto mt-28 w-10/12 lg:w-11/12 xl:w-10/12">
                <div className="flex flex-wrap justify-center gap-4">
                    <div onClick={()=>setSelectedGenre('All')} className={`bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-gray-700 transition-all duration-300 cursor-pointer ${selectedGenre === "All" ? "bg-red-400 text-white ":"hover:text-red-400"}`}>Show All</div>
                    <div onClick={()=>setSelectedGenre('Adventure')} className={`bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-gray-700 transition-all duration-300 cursor-pointer  ${selectedGenre === "Adventure" ? "bg-red-400 text-white ":"hover:text-red-400"}`}>Adventure</div>
                    <div onClick={()=>setSelectedGenre('Strategy')} className={`bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-gray-700 transition-all duration-300 cursor-pointer  ${selectedGenre === "Strategy" ? "bg-red-400 text-white ":"hover:text-red-400"}`}>Strategy</div>
                    <div onClick={()=>setSelectedGenre('Racing')} className={`bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-gray-700 transition-all duration-300 cursor-pointer  ${selectedGenre === "Racing" ? "bg-red-400 text-white ":"hover:text-red-400"}`}>Racing</div>
                    <div onClick={()=>setSelectedGenre('Action')} className={`bg-gray-100 py-2 px-4 rounded-full whitespace-nowrap uppercase font-bold text-gray-700 transition-all duration-300 cursor-pointer  ${selectedGenre === "Action" ? "bg-red-400 text-white ":"hover:text-red-400"}`}>Action</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-16">
                    { listGame.map((data, key) => {
                        if(selectedGenre === data.genre || selectedGenre === "All") {
                            return (
                                <div key={key} className="group flex flex-col items-center bg-gray-200 max-h-max rounded-3xl cursor-pointer">
                                    <img src={data.image} className="w-full rounded-3xl" alt="" />
                                    <div className="flex w-full h-full py-4 px-6 justify-between items-center rounded-b-3xl">
                                        <div>
                                            <h6 className="text-sm font-medium text-gray-500">{data.genre}</h6>
                                            <h5 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-all duration-300">Assasin Creed</h5>
                                        </div>
                                        <div className="flex justify-center items-center h-10 w-10 bg-red-500 rounded-full group-hover:bg-blue-400 transition-all duration-200">
                                            <FaBagShopping className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }) }
                </div>

                <div className="flex">
                    <div className="w-60 h-20 tes">testing</div>
                </div>
            </section>
        </div>
  )
}
