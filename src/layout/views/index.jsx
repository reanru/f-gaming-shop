import React, { useEffect } from 'react'

export default function Index(props) {
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        console.log('check scroll ', scrollTop);

        if(scrollTop >= 160){
            header.classList.add('bg-blue-600', 'fixed', 'top-6', 'shadow-md');
            header.classList.remove('absolute', 'bg-transparent');

            setTimeout(() => {
                header.classList.add('top-0');
                header.classList.remove('top-10');
            }, 0);
        }else{
            header.classList.add('absolute', 'bg-transparent');
            header.classList.remove('bg-blue-600', 'fixed', 'top-0', 'shadow-md');
        }
    };
    
    return (
        <div className="relative">
            
            <header className="header w-full rounded-b-3xl z-50 fixed top-0 transition-all duration-500">
                <nav className="container mx-auto flex items-center justify-between text-white h-24 w-10/12 lg:w-11/12 xl:w-10/12 whitespace-nowrap">
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
