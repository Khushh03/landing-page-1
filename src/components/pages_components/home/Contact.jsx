import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <Input type="text" placeholder="Your Name" className="w-full bg-input" />
                    </div>
                    <div className="mb-4">
                        <Input type="email" placeholder="Your Email" className="w-full bg-input" />
                    </div>
                    <div className="mb-4">
                        <Textarea placeholder="Your Message" className="w-full bg-input" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}
