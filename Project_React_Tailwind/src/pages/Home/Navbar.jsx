import ButtonGetStarted from "../../components/Button"

function Navbar() {
    return(
        <>
            {/* Navbar */}
            <nav className="relative container text-center m-auto p-6">
                {/* Flex Container */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <img src="src/assets/logo.svg" alt="" />
                    </div>
                    {/* Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        {/* Items */}
                        <a href="" className="hover:text-DarkGrayishBlue transition-colors">Pricing</a>
                        <a href="" className="hover:text-DarkGrayishBlue transition-colors">Product</a>
                        <a href="" className="hover:text-DarkGrayishBlue transition-colors">About Us</a>
                        <a href="" className="hover:text-DarkGrayishBlue transition-colors">Careers</a>
                        <a href="" className="hover:text-DarkGrayishBlue transition-colors">Community</a>
                    </div>
                    {/* Button */}
                    <ButtonGetStarted className="hidden md:block text-VeryPaleRed"/>
                    {/* Hamburger */}
                    <button id="Hamburger" className=" block p-1 md:hidden focus:outline-none ">
                        <div className="space-y-2">
                            <div className="w-8 h-1 bg-gray-600"></div>
                            <div className="w-8 h-1 bg-gray-600"></div>
                            <div className="w-8 h-1 bg-gray-600"></div>
                        </div>
                    </button>
                </div>
                <div id="menu" className="absolute hidden flex flex-col py-8 mt-10 space-y-6 left-6 2 right-6 bg-white font-bold drop-shadow-md md:hidden">
                    <a href="">ss</a>
                    <a href="">ss</a>
                    <a href="">ss</a>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar