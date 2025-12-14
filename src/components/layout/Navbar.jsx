import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Showroom', href: '#showroom' },
        { name: 'Guitars', href: '#guitars' },
        { name: 'Accessories', href: '#accessories' },
        { name: 'Brands', href: '#brands' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-2xl font-bold font-sans tracking-tight text-stone-900">
                            Guitar<span className="text-amber-600">Lavka</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-stone-600 hover:text-amber-600 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Icons & Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-stone-600 hover:text-amber-600 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-stone-600 hover:text-amber-600 transition-colors">
                            <User className="w-5 h-5" />
                        </button>
                        <div className="relative">
                            <button className="p-2 text-stone-600 hover:text-amber-600 transition-colors">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-amber-600 rounded-full">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-stone-600 hover:text-amber-600 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-50 rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 flex items-center justify-around border-t border-stone-100 mt-4">
                        <button className="p-3 text-stone-600 hover:text-amber-600">
                            <Search className="w-6 h-6" />
                        </button>
                        <button className="p-3 text-stone-600 hover:text-amber-600">
                            <User className="w-6 h-6" />
                        </button>
                        <button className="p-3 text-stone-600 hover:text-amber-600 relative">
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute top-2 right-2 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-amber-600 rounded-full">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
