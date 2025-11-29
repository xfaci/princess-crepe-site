"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 text-6xl">🍰</div>
                <div className="absolute bottom-20 right-10 text-6xl">🍓</div>
                <div className="absolute top-1/2 right-20 text-4xl">🎀</div>
                <div className="absolute top-1/3 left-1/4 text-5xl">🍦</div>
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-script text-princess-darkPink mb-4 drop-shadow-md">
                        Princess Crêpe
                    </h1>
                    <p className="text-xl md:text-2xl text-princess-choco mb-6 font-medium">
                        Les crêpes kawaii d’Harajuku dans le Marais
                    </p>

                    <div className="max-w-2xl mx-auto mb-10 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-2 border-princess-pink/30 shadow-lg">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Plongez dans un univers sucré et coloré où les crêpes se dégustent roulées à la japonaise !
                            Une décoration digne d'une maison de poupée, des saveurs gourmandes et une ambiance 100% kawaii
                            vous attendent pour le goûter le plus mignon de Paris.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#menu"
                            className="px-8 py-4 bg-princess-darkPink text-white rounded-full font-bold text-lg shadow-lg hover:bg-princess-choco hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>🍰</span> Voir le menu
                        </Link>
                        <Link
                            href="#lieu"
                            className="px-8 py-4 bg-white text-princess-darkPink border-2 border-princess-darkPink rounded-full font-bold text-lg shadow-lg hover:bg-princess-light hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>📍</span> Venir nous voir
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
