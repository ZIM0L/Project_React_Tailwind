import Navbar from "./Navbar"
import HeroSection from "./Hero_Section"
import Features from "./Features"
import Opinions from "./Opinions"
import CTASection from "./CTA"
import Footer from "./Footer"

function Home() {
    return (
        <>
           <Navbar />
           <HeroSection />
           <Features />
           <Opinions />
           <CTASection />
           <Footer />
        </>
    )
    
}

export default Home