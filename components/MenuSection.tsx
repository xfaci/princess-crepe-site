"use client";

import { useState } from "react";
import { menuCategories, formatPrice } from "@/data/menu";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

// Helper function locally if not exported from data/menu yet, or import it if I added it there.
// The prompt asked to create a helper. I'll put it here or in a utils file. 
// Let's put it here for simplicity as requested in prompt "Crée un helper..."
function formatPriceHelper(price: number): string {
    return price.toFixed(1).replace(".", ",") + " €";
}

export default function MenuSection() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    return (
        <section id="menu" className="py-20 bg-white/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <SectionTitle
                    title="Notre Menu"
                    subtitle="Crêpes roulées & délices sucrés"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {menuCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-2xl shadow-sm border border-princess-pink/20 overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Mobile Accordion Header / Desktop Title */}
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="w-full md:cursor-default md:pointer-events-none text-left p-6 bg-princess-light/30 flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-princess-choco flex items-center gap-2">
                                        <span className="text-princess-darkPink">♥</span> {category.title}
                                    </h3>
                                    {category.subtitle && (
                                        <p className="text-sm text-gray-500 mt-1 italic">{category.subtitle}</p>
                                    )}
                                </div>
                                {/* Mobile chevron */}
                                <span className="md:hidden text-princess-darkPink text-2xl">
                                    {openCategory === category.id ? "−" : "+"}
                                </span>
                            </button>

                            {/* Content - Always visible on desktop, accordion on mobile */}
                            <div className={`
                ${openCategory === category.id ? "block" : "hidden"} 
                md:block border-t border-princess-pink/10
              `}>
                                <ul className="p-6 space-y-3">
                                    {category.items.map((item, index) => (
                                        <li key={index} className="flex justify-between items-start gap-4 text-sm md:text-base">
                                            <span className={`flex-1 ${item.highlight ? "font-bold text-princess-darkPink" : "text-gray-700"}`}>
                                                {item.name}
                                            </span>
                                            <span className="font-semibold text-princess-choco whitespace-nowrap bg-princess-light px-2 py-0.5 rounded-full text-xs md:text-sm">
                                                {formatPriceHelper(item.price)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
