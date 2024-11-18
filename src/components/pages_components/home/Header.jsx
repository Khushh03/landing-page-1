import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">LOGO</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <a href="#home" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Home
                        </a>
                        <a href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            About
                        </a>
                        <a href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Features
                        </a>
                        <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Contact
                        </a>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <Button className="bg-primary text-primary-foreground">Get Started</Button>
                </div>
            </div>
        </header>
    );
}
