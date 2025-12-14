import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <span className="text-2xl font-bold font-sans text-white">
                            Guitar<span className="text-amber-500">Lavka</span>
                        </span>
                        <p className="text-sm text-stone-400 leading-relaxed">
                            Your premium destination for high-quality guitars and musical instruments. Crafted for passion, tuned for excellence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Acoustic Guitars</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Electric Guitars</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Basses</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Amplifiers</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>123 Music Avenue,<br />Sound City, SC 90210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>hello@guitarlavka.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm text-stone-400 mb-4">Subscribe to verify the latest products and news.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg focus:outline-none focus:border-amber-500 text-white text-sm"
                            />
                            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
                    <p>&copy; 2024 Guitar Lavka. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-stone-300">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
