"use client";

import { siteConfig } from "@/data/site";
import SectionTitle from "./SectionTitle";
import { Instagram, Facebook, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionTitle title="Contact & Avis" subtitle="Dites-nous tout !" />

                <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-princess-choco">Retrouvez-nous</h3>
                        <p className="text-gray-600">
                            Pas de réservation possible, venez directement nous voir pour le goûter !
                            <br />
                            Pour toute question, n'hésitez pas à nous écrire sur nos réseaux.
                        </p>

                        <div className="flex flex-col gap-4 items-center md:items-start">
                            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-princess-darkPink transition-colors">
                                <div className="w-10 h-10 bg-princess-light rounded-full flex items-center justify-center text-princess-darkPink">
                                    <Instagram size={20} />
                                </div>
                                <span className="font-medium">@princesscrepe.fr</span>
                            </a>

                            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                                <div className="w-10 h-10 bg-princess-light rounded-full flex items-center justify-center text-blue-600">
                                    <Facebook size={20} />
                                </div>
                                <span className="font-medium">Princess Crêpe</span>
                            </a>

                            <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
                                <div className="w-10 h-10 bg-princess-light rounded-full flex items-center justify-center text-green-600">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium">3 rue des Écouffes, Paris</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-princess-light/30 p-8 rounded-3xl border border-princess-pink/20 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-bold text-princess-choco mb-4">Votre avis compte !</h3>
                        <p className="text-gray-600 mb-6">
                            Vous avez aimé votre crêpe ? Laissez-nous un petit mot doux sur TripAdvisor ou Google.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <a
                                href={siteConfig.tripadvisor}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-green-50 hover:border-green-200 transition-colors shadow-sm"
                            >
                                TripAdvisor
                            </a>
                            <a
                                href={siteConfig.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
                            >
                                Google Reviews
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-20 text-center border-t border-princess-pink/20 pt-8">
                    <p className="text-princess-choco/60 text-sm">
                        © {new Date().getFullYear()} {siteConfig.name}. Fait avec ♥ à Paris.
                    </p>
                </div>
            </div>
        </section>
    );
}
