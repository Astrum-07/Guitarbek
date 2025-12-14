import { Button } from '../components/ui/Button'
import { ProductCard } from '../components/ui/ProductCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ArrowRight, Star } from 'lucide-react'

export const Home = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                {/* Background Image Hook - To be replaced with real image */}
                <div className="absolute inset-0 bg-stone-900">
                    <img
                        src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=2574&auto=format&fit=crop"
                        alt="Guitar Shop Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl space-y-8 animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                            Find Your <span className="text-amber-500">Soul</span><br />
                            In Every String
                        </h1>
                        <p className="text-xl text-stone-200 leading-relaxed font-light">
                            Premium handcrafted guitars for the passionate musician.
                            Experience the perfect blend of tradition and modern craftsmanship.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" className="h-14 px-8 text-lg">
                                Shop Collection
                            </Button>
                            <Button variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-stone-900 hover:border-white">
                                Visit Showroom
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Crafted for Every Style"
                    subtitle="Whether you strum acoustic ballads or shred electric solos, find the perfect instrument."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { name: 'Acoustic', img: 'https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?q=80&w=2568&auto=format&fit=crop' },
                        { name: 'Electric', img: 'https://images.unsplash.com/photo-1550985543-f4423c8d3659?q=80&w=2600&auto=format&fit=crop' },
                        { name: 'Bass', img: 'https://images.unsplash.com/photo-1456953180671-730de08edaa7?q=80&w=2600&auto=format&fit=crop' }
                    ].map((cat, idx) => (
                        <div key={idx} className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">{cat.name} Guitars</h3>
                                <div className="flex items-center text-amber-500 font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    Explore Collection <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section id="new-arrivals" className="bg-stone-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">New Arrivals</h2>
                            <p className="text-stone-600 text-lg">Fresh from the Master Workshop.</p>
                        </div>
                        <Button variant="ghost" className="hidden md:inline-flex group">
                            View All Products
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 1, title: 'Fender Paramount', price: 799.00, category: 'Acoustic', img: 'https://images.unsplash.com/photo-1556449895-a33c9dfd3066?q=80&w=2674&auto=format&fit=crop', desc: 'Sitka Spruce Top, Mahogany Body' },
                            { id: 2, title: 'Gibson Les Paul', price: 2499.00, category: 'Electric', img: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=2574&auto=format&fit=crop', desc: 'Standard \'60s Bourbon Burst' },
                            { id: 3, title: 'Taylor 214ce', price: 1199.00, category: 'Acoustic', img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2670&auto=format&fit=crop', desc: 'Rosewood Layered Back & Sides' },
                            { id: 4, title: 'Ibanez SR500E', price: 699.99, category: 'Bass', img: 'https://images.unsplash.com/photo-1550985543-f4423c8d3659?q=80&w=2600&auto=format&fit=crop', desc: 'Brown Mahogany, Bartolini Pickups' }
                        ].map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                image={item.img}
                                description={item.desc}
                                onAddToCart={(id) => console.log('Added', id)}
                            />
                        ))}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <Button variant="secondary" className="w-full">View All Products</Button>
                    </div>
                </div>
            </section>          </div>

    )
}
