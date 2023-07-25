import ButtonGetStarted from "../../components/Button"

function Navbar() {
    return(
        <>
            {/* Navbar */}
            <nav className="relative container text-center mx-auto p-6">
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
                    <ButtonGetStarted className="hidden md:block"/>
                </div>
            </nav>
        </>
    )
}

export default Navbar