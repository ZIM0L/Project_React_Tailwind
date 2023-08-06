import ButtonGetStarted from "../../components/Button"

function Opinions() {
    return(      
        <section id="Opinions">
            {/* Container */}
            <div className=" max-w-6xl mx-auto px-5 mt-32 text-center">
                {/* Heading */}
                <h2 className=" text-4xl font-bold text-center">
                    What they’ve said
                </h2>
                {/*Container Opinions */}
                <div className="flex flex-col mt-10 md:flex-row md:space-x-6">
                    {/* 1 Person */}
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
                        <img src="src\assets\avatar-anisha.png" className=" w-16 -mt-14 " alt="" />
                        <h2 className=" text-lg font-bold">Anisha Li</h2>
                        <p className="text-sm text-DarkGrayishBlue">
                            “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”
                        </p>
                    </div>
                    {/* 2 Person */}
                    <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3 md:flex">
                        <img src="src\assets\avatar-ali.png" className=" w-16 -mt-14" alt="" />
                        <h2 className=" text-lg font-bold">Ali Bravo</h2>
                        <p className="text-sm text-DarkGrayishBlue">
                            “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”                       
                         </p>
                    </div>
                    {/* 3 Person */}
                    <div className="hidden  flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3 md:flex">
                        <img src="src\assets\avatar-richard.png" className=" w-16 -mt-14" alt="" />
                        <h2 className=" text-lg font-bold">Richard Watts</h2>
                        <p className="text-sm text-DarkGrayishBlue">
                            “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”
                        </p>
                    </div>
                </div>
                <div className="my-16">
                    <ButtonGetStarted className={"text-VeryPaleRed"}/>
                </div>
            </div>
        </section>
    )
}

export default Opinions