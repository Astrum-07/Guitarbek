import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './Button';

export const ProductCard = ({
    image,
    category,
    title,
    description,
    price,
    rating = 5,
    onAddToCart,
    id
}) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-stone-100">
            <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-amber-500 cursor-pointer hover:bg-white hover:text-red-500 transition-colors">
                    <Star className="w-4 h-4 fill-current" />
                </div>
                {/* Quick Action Overlay (Desktop) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden md:block">
                    <Button
                        variant="primary"
                        className="w-full shadow-lg flex items-center justify-center gap-2"
                        onClick={() => onAddToCart && onAddToCart(id)}
                    >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </Button>
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <p className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-2">{category}</p>
                <h3 className="text-lg font-bold text-stone-900 mb-1 leading-tight group-hover:text-amber-600 transition-colors cursor-pointer">{title}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
                    <span className="text-xl font-bold text-stone-900">${price.toFixed(2)}</span>
                    <button
                        className="md:hidden w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors active:scale-95"
                        onClick={() => onAddToCart && onAddToCart(id)}
                    >
                        <ShoppingCart className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
