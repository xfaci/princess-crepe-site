import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Hero />
            <MenuSection />
            <LocationSection />
            <GallerySection />
            <ContactSection />
        </main>
    );
}
