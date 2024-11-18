import About from "@/components/pages_components/home/About";
import Contact from "@/components/pages_components/home/Contact";
import Features from "@/components/pages_components/home/Features";
import Footer from "@/components/pages_components/home/Footer";
import Header from "@/components/pages_components/home/Header";
import Hero from "@/components/pages_components/home/Hero";

export default function page() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
}
