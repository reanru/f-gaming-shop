import React from 'react'

export default function Index(props) {
    return (
        <div className="relative">
            
            <header className="absolute w-full bg-transparent rounded-b-3xl z-50">
                <nav className="flex items-center justify-between text-white w-full h-28 px-10 lg:px-32 whitespace-nowrap">
                    <div className="text-lg lg:text-3xl font-semibold">GAMING SHOP</div>
                    <ul className="lg:flex items-center space-x-4 hidden">
                        <li className="py-2 px-4 hover:bg-blue-500 rounded-full">Home</li>
                        <li className="py-2 px-4 hover:bg-blue-500 rounded-full">Our Shop</li>
                        <li className="py-2 px-4 hover:bg-blue-500 rounded-full">Product Details</li>
                        <li className="py-2 px-4 hover:bg-blue-500 rounded-full">Contact Us</li>
                        <li className="py-1 px-3 bg-red-500 rounded-full">SIGN IN</li>
                    </ul>
                    <button className="lg:hidden">=</button>
                </nav>
            </header>

            <main className="">
                {props.children}
            </main>

            <footer className="img-bg-footer mt-20 flex justify-center items-center text-center text-white font-semibold bg-blue-500 h-36 w-full rounded-t-full">
                Copyright © { new Date().getFullYear() }
            </footer>
        </div>
    )
}
