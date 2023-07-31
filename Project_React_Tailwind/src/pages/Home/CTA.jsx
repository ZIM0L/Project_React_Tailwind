import ButtonGetStarted from "../../components/Button"
import '/src/index.css'

function CTASection() {
    return(
        <section id="CTA">
            {/* Container Flex */}
            <div className="flex flex-col mx-auto items-center justify-between px-6 py-24 space-y-12 bg-BrightRed text-white md:flex-row md:py-12 md:space-y-0">
                <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                    Simplify how your team works today.
                </h2>
                <ButtonGetStarted className={" text-BrightRed bg-white shadow-2xl hover:text-red-400 hover:bg-white"} />
            </div>
        </section>
    )
}

export default CTASection