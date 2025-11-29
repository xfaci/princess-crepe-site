import React from "react";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
    return (
        <div className="text-center mb-12 relative" id={id}>
            <div className="inline-block relative">
                <h2 className="text-4xl md:text-5xl font-script text-princess-darkPink mb-2 relative z-10 drop-shadow-sm">
                    {title}
                </h2>
                {/* Decorative ribbon/underline */}
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-princess-pink/30 -rotate-1 rounded-full -z-0"></div>
            </div>
            {subtitle && (
                <p className="text-princess-choco/80 mt-4 font-medium tracking-wide uppercase text-sm">
                    ♥ {subtitle} ♥
                </p>
            )}
        </div>
    );
}
