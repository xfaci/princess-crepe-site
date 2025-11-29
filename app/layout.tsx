import type { Metadata } from "next";
import { Quicksand, Dancing_Script } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
});

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing-script",
});

export const metadata: Metadata = {
    title: "Princess Crêpe | Crêperie Japonaise Kawaii à Paris",
    description: "Découvrez Princess Crêpe, la crêperie japonaise la plus kawaii du Marais. Crêpes roulées, ambiance Harajuku et douceurs sucrées au 3 rue des Écouffes, Paris.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${quicksand.variable} ${dancingScript.variable}`}>
            <body className="font-sans antialiased bg-princess-light bg-stripe-pattern min-h-screen">
                {children}
            </body>
        </html>
    );
}
