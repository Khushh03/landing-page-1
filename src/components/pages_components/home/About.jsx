export default function About() {
    return (
        <section id="about" className="py-24 bg-card text-card-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">About Us</h2>
                        <p className="text-lg mb-4">
                            We are a team of passionate individuals dedicated to creating innovative solutions for the modern web.
                        </p>
                        <p className="text-lg">
                            Our mission is to empower businesses and individuals with cutting-edge technology and design.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
                        <img src="/placeholder.svg" alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
}
