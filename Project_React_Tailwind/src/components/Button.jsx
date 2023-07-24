
function ButtonGetStarted({className}) {
    return (
        <a href="" className={`${className == "hidden" &&  "hidden"} bg-BrightRed text-VeryPaleRed rounded-full p-3 px-4 pt-2 transition-colors hover:bg-red-400 md:block`}>Get Started</a>
    )
}

export default ButtonGetStarted