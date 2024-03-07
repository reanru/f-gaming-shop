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
            header.classList.add('bg-blue-600', 'fixed', 'h-20', 'shadow-md');
            header.classList.remove('absolute', 'bg-transparent', 'h-32');
        }else{
            header.classList.remove('bg-blue-600', 'fixed', 'h-20', 'shadow-md');
            header.classList.add('absolute', 'bg-transparent', 'h-32');
        }
    };
    
    return (
        <div className="relative">
            
            {/* SHOW CURRENT RESOLUTION */}
            <div className="fixed top-1/2 flex w-full justify-center items-center z-[999]">
                <div className="bg-yellow-200 px-4 py-2 border border-yellow-500 font-semibold rounded-xl">
                    <span>SCREEN : </span>
                    <span className="sm:hidden text-red-500">XS</span>
                    <span className="hidden sm:inline-block md:hidden text-red-500">SM</span>
                    <span className="hidden md:inline-block lg:hidden text-red-500">MD</span>
                    <span className="hidden lg:inline-block xl:hidden text-red-500">LG</span>
                    <span className="hidden xl:inline-block 2xl:hidden text-red-500">XL</span>
                    <div className="hidden 2xl:inline-block text-red-500">2XL</div>
                </div>
            </div>

            <header className="header w-full rounded-b-3xl z-50 fixed top-0 transition-all duration-500 ease-in-out h-32 flex">
                <nav className="container mx-auto flex items-center justify-between text-white w-10/12 lg:w-11/12 xl:w-10/12 whitespace-nowrap">
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

            <footer className="img-bg-footer mt-20 flex justify-center items-center space-x-1 text-center text-white font-medium bg-blue-500 h-36 w-full rounded-t-full">
                <span>Copyright © { new Date().getFullYear() }.</span><a href="https://templatemo.com/" target="blank">Desgin : TemplateMo</a>
            </footer>
        </div>
    )
}
