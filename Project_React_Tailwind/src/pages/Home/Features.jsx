
function Features() {
    return(
        <>
            <section id="features">
                {/* Container */}
                <div className="container flex flex-col space-y-12 px-4 mt-10 mx-auto md:space-y-0 md:flex-row">
                    {/* What's different */}
                    <div className="flex flex-col space-y-12 md:w-1/2 ">
                        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">What’s different about Manage?</h2>
                        <p className=" max-w-sm text-center text-DarkGrayishBlue md:text-left">
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                        </p>
                    </div>
                    {/* List */}
                    <div className="flex flex-col space-y-8 md:w-1/2 ">
                        {/* List Item 1 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className=" rounded-l-lg bg-VeryPaleRed md:bg-transparent">
                                <div className="flex flex-row items-center space-x-2">
                                    {/* Number */}
                                    <div className=" px-5 py-2 rounded-full text-white bg-BrightRed md:py-1 ">
                                        01
                                    </div>
                                    {/* Mobile */}
                                    <h3 className=" text-base font-bold md:hidden">
                                        Track company-wide progress
                                    </h3>
                                </div>
                            </div>
                            <div>
                                {/* Default */}
                                <h3 className=" hidden text-lg font-bold md:block">
                                    Track company-wide progress
                                </h3>
                                <p className=" text-DarkGrayishBlue">
                                    See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                                </p>
                            </div>
                        </div>
                        {/* List Item 2 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className=" rounded-l-lg bg-VeryPaleRed md:bg-transparent">
                                <div className="flex flex-row items-center space-x-2">
                                    {/* Number */}
                                    <div className=" px-5 py-2 rounded-full text-white bg-BrightRed md:py-1 ">
                                        02
                                    </div>
                                    {/* Mobile */}
                                    <h3 className=" text-base font-bold md:hidden">
                                        Advanced built-in reports
                                    </h3>
                                </div>
                            </div>
                            <div>
                                {/* Default */}
                                <h3 className=" hidden text-lg font-bold md:block">
                                    Advanced built-in reports
                                </h3>
                                <p className=" text-DarkGrayishBlue">
                                    Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                                </p>
                            </div>
                        </div>
                        {/* List Item 3 */}
                        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                            {/* Heading */}
                            <div className=" rounded-l-lg bg-VeryPaleRed md:bg-transparent">
                                <div className="flex flex-row items-center space-x-2">
                                    {/* Number */}
                                    <div className=" px-5 py-2 rounded-full text-white bg-BrightRed md:py-1 ">
                                        03
                                    </div>
                                    {/* Mobile */}
                                    <h3 className=" text-base font-bold md:hidden">
                                        Everything you need in one place
                                    </h3>
                                </div>
                            </div>
                            <div>
                                {/* Default */}
                                <h3 className=" hidden text-lg font-bold md:block">
                                    Everything you need in one place
                                </h3>
                                <p className=" text-DarkGrayishBlue">
                                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features