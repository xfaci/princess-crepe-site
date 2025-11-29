"use client";

import { siteConfig } from "@/data/site";
import SectionTitle from "./SectionTitle";
import { Instagram } from "lucide-react";

export default function GallerySection() {
    return (
        <section id="univers" className="py-20 bg-princess-light/50">
            <div className="container mx-auto px-4">
                <SectionTitle title="L'Univers Kawaii" subtitle="Une ambiance unique à Paris" />

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Entrez dans notre petite boutique et laissez-vous transporter directement à Harajuku !
                        Entre les figurines mangas, la J-Pop entraînante et notre décoration tout en rose et pastels,
                        Princess Crêpe est bien plus qu'une crêperie : c'est une véritable immersion dans la culture pop japonaise.
                    </p>
                </div>

                {/* Gallery Grid Placeholders */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="aspect-square bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105 relative group">
                            <div className="absolute inset-0 bg-princess-pink/10 flex items-center justify-center text-princess-choco/20 text-4xl font-bold">
                                Photo {item}
                            </div>
                            {/* Placeholder for images - in production replace with <Image /> */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity text-white font-bold">
                                <span>♥ Kawaii ♥</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href={siteConfig.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        <Instagram size={20} />
                        Suivez-nous sur Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}
