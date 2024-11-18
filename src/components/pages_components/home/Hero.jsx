import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section id="home" className="px-4 py-24 md:py-32 bg-gradient-to-r from-background to-foreground/10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Welcome to Our Modern Website</h1>
                <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl mt-6">
                    Experience the future of web design with our cutting-edge platform.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-primary text-primary-foreground">Get Started</Button>
                    <Button variant="outline" className="bg-accent text-accent-foreground">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}
