"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-black/40 border-b border-white/5 py-4 relative z-50">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-black italic text-white">
                    Zik<span className="text-orange-500">Erea</span>
                </Link>

                <div className="flex gap-8 text-sm font-medium text-slate-400">
                    <Link href="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link>
                    <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}