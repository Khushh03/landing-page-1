import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Shield, Smartphone, Globe } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Experience blazing fast load times and smooth interactions.",
        color: "var(--chart-1)",
    },
    {
        icon: Shield,
        title: "Secure by Design",
        description: "Your data is protected with state-of-the-art security measures.",
        color: "var(--chart-2)",
    },
    {
        icon: Smartphone,
        title: "Mobile Optimized",
        description: "Fully responsive design that looks great on any device.",
        color: "var(--chart-3)",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Connect with users around the world with our global infrastructure.",
        color: "var(--chart-4)",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-card">
                            <CardHeader>
                                <feature.icon className="w-12 h-12 mb-4" style={{ color: feature.color }} />
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
