import ButtonGetStarted from "../../components/Button"

function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section>
                {/* Flex Container */}
                <div className=" container flex flex-col-reverse items-center mx-auto mt-10 px-6 md:flex-row" >
                    {/* Left */}
                    <div className="flex flex-col text-left space-y-2 mb-32 md:w-1/2 ">
                        <h1 className=" max-w-md text-4xl text-center font-bold md:text-5xl md:text-left ">Bring everyone together to build better products.</h1>
                        <p className=" max-w-sm text-center text-DarkGrayishBlue md:text-left">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                        <div className="flex justify-center md:justify-start">
                        <ButtonGetStarted />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="md:w-1/2 flex items-start">
                        <img src="src/assets/illustration-intro.svg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection