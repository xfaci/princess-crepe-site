"use client";

import { siteConfig } from "@/data/site";
import SectionTitle from "./SectionTitle";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
    return (
        <section id="lieu" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionTitle title="Où nous trouver ?" subtitle="Au cœur du Marais" />

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-princess-light relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Infos */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-princess-light p-3 rounded-full text-princess-darkPink">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-princess-choco mb-2">Adresse</h3>
                                    <p className="text-gray-600">{siteConfig.address}</p>
                                    <p className="text-princess-darkPink font-medium">{siteConfig.area}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-princess-light p-3 rounded-full text-princess-darkPink">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-princess-choco mb-2">Horaires</h3>
                                    <ul className="space-y-1 text-gray-600">
                                        {siteConfig.openingHours.map((schedule, idx) => (
                                            <li key={idx} className="flex justify-between gap-4">
                                                <span className="font-medium">{schedule.day}</span>
                                                <span>{schedule.hours}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <a
                                href={siteConfig.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-princess-choco text-white px-6 py-3 rounded-xl font-bold hover:bg-princess-darkPink transition-colors w-full justify-center md:w-auto"
                            >
                                <ExternalLink size={18} />
                                Ouvrir dans Google Maps
                            </a>
                        </div>

                        {/* Map Placeholder / Image */}
                        <div className="h-64 md:h-full min-h-[300px] bg-princess-light rounded-2xl overflow-hidden relative group">
                            {/* In a real project, embed a Google Map iframe here */}
                            <div className="absolute inset-0 flex items-center justify-center bg-princess-pink/20 group-hover:bg-princess-pink/10 transition-colors">
                                <span className="text-princess-choco font-script text-3xl rotate-[-10deg]">
                                    Plan du quartier
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4 text-6xl opacity-50">🗺️</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
