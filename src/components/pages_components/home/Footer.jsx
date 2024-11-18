import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-secondary-foreground hover:text-accent-foreground transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-secondary-foreground hover:text-accent-foreground transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-secondary-foreground hover:text-accent-foreground transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-secondary-foreground hover:text-accent-foreground transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
