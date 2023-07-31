
function Footer() {
    return(
        <footer id="Footer" className=" bg-VeryDarkBlue"> 
            {/* Container Footer */}
            <div className=" container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="mx-auto text-center text-white md:hidden">
                    Copyright &copy; 2020. All Rights Reserved
                </div>
                {/* Logo and socials */}
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <img src="src\assets\logo.svg" className="h-8 my-12" alt="" />
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                        {/* Link 1 */}
                        <a href="#" >
                            <img src="src\assets\icon-facebook.svg" className="h-8" alt="" />
                        </a>
                        {/* Link 2 */}
                        <a href="#" >
                            <img src="src\assets\icon-youtube.svg" className="h-8" alt="" />
                        </a>
                        {/* Link 3 */}
                        <a href="#" >
                            <img src="src\assets\icon-twitter.svg" className="h-8" alt="" />
                        </a>
                        {/* Link 4 */}
                        <a href="#" >
                            <img src="src\assets\icon-pinterest.svg" className="h-8" alt="" />
                        </a>
                        {/* Link 5 */}
                        <a href="#" >
                            <img src="src\assets\icon-instagram.svg" className="h-8" alt="" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className=" hover:text-BrightRed">Home</a>
                        <a href="#" className=" hover:text-BrightRed">Pricing</a>
                        <a href="#" className=" hover:text-BrightRed">Products</a>
                        <a href="#" className=" hover:text-BrightRed">About</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-white">
                        <a href="#" className=" hover:text-BrightRed">Careers</a>
                        <a href="#" className=" hover:text-BrightRed">Community</a>
                        <a href="#" className=" hover:text-BrightRed">Privacy Policy</a>
                    </div>
                </div>
                {/* Input */}
                <div className="flex flex-col justify-between">
                    <form action="">
                        <div className="flex space-x-3">
                            <input type="text" className=" flex-auto px-4 rounded-full focus:outline-none" placeholder="Updates in your inbox…"/>
                            <button className="px-6 py-2 text-white rounded-full bg-BrightRed hover:bg-BrightRed focus:outline-none">
                                Go
                            </button>
                        </div>
                    </form>
                    <div className="hidden text-white md:block">
                        Copyright &copy; 2020. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer