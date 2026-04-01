import { motion } from "motion/react";
import { 
  ShoppingBag, 
  MapPin, 
  ArrowRight, 
  Instagram, 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight,
  Star,
  ShieldCheck,
  Truck
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const collections = [
    {
      id: 1,
      title: "The Al-Qurm Collection",
      category: "Women's Premium",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
      price: "OMR 85.000"
    },
    {
      id: 2,
      title: "Heritage Linen Shirt",
      category: "Men's Essentials",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800",
      price: "OMR 42.000"
    },
    {
      id: 3,
      title: "Silk Kaftan",
      category: "Limited Edition",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800",
      price: "OMR 120.000"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-medium">
              <a href="#" className="hover:text-gold transition-colors">Shop</a>
              <a href="#" className="hover:text-gold transition-colors">Craftsmanship</a>
              <a href="#" className="hover:text-gold transition-colors">Lookbook</a>
            </div>
          </div>

          <h1 className="serif text-2xl md:text-3xl font-light tracking-tighter absolute left-1/2 -translate-x-1/2">
            MUSCAT <span className="italic">HERITAGE</span>
          </h1>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-gold transition-colors">
              <MapPin className="w-4 h-4" />
              Muscat
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            className="bg-white h-full w-full max-w-sm p-8 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="serif text-xl">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl serif">
              <a href="#" className="hover:pl-4 transition-all duration-300">New Arrivals</a>
              <a href="#" className="hover:pl-4 transition-all duration-300">Women's Collection</a>
              <a href="#" className="hover:pl-4 transition-all duration-300">Men's Collection</a>
              <a href="#" className="hover:pl-4 transition-all duration-300">Our Story</a>
              <a href="#" className="hover:pl-4 transition-all duration-300">Contact</a>
            </div>
            <div className="mt-auto pt-8 border-t border-black/10">
              <div className="flex gap-4 mb-4">
                <Instagram className="w-5 h-5 opacity-60" />
                <MessageCircle className="w-5 h-5 opacity-60" />
              </div>
              <p className="text-xs text-black/40 uppercase tracking-widest">Muscat, Sultanate of Oman</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
            alt="Boutique Hero" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[0.4em] text-xs mb-6 font-medium"
          >
            Crafted in the heart of Muscat
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="serif text-6xl md:text-8xl font-light mb-8 leading-tight"
          >
            Timeless <br /> <span className="italic">Craftsmanship</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all duration-500">
              Explore Collection
            </button>
            <button className="border border-white/40 backdrop-blur-sm text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-500">
              Book Appointment
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll to discover</span>
          <div className="w-px h-12 bg-white/40"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <Truck className="w-6 h-6 text-gold" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Free Delivery in Muscat</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Premium Quality Fabrics</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <MessageCircle className="w-6 h-6 text-gold" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">WhatsApp Styling Help</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Star className="w-6 h-6 text-gold" />
            <span className="text-[10px] uppercase tracking-widest font-semibold">Local Craftsmanship</span>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-gold uppercase tracking-widest text-xs font-bold mb-4">Curated Selection</p>
            <h3 className="serif text-4xl md:text-5xl font-light">The Season's <span className="italic">Favorites</span></h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-bold border-b border-black/20 pb-1 hover:border-gold hover:text-gold transition-all">
            View All Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                  New Arrival
                </div>
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Quick Add to Bag
                </button>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-black/40 font-bold mb-2">{item.category}</p>
              <h4 className="serif text-xl mb-1">{item.title}</h4>
              <p className="text-sm font-medium text-gold">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section - Split Layout */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <p className="text-gold uppercase tracking-widest text-xs font-bold mb-6">Our Heritage</p>
            <h3 className="serif text-4xl md:text-6xl font-light mb-8 leading-tight">
              Rooted in <br /> <span className="italic">Omani Tradition</span>
            </h3>
            <p className="text-black/60 leading-relaxed mb-10 max-w-md">
              Every piece in our collection is a tribute to the rich textile history of Oman. We source the finest silks and linens, working closely with regional artisans to ensure every stitch tells a story of quality and pride.
            </p>
            <button className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Discover Our Craft</span>
            </button>
          </div>
          <div className="h-[500px] md:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1000" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gold/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 text-center bg-sand">
        <div className="max-w-2xl mx-auto">
          <h3 className="serif text-3xl md:text-4xl mb-6">Join the <span className="italic">Inner Circle</span></h3>
          <p className="text-sm text-black/60 mb-10 tracking-wide">
            Receive early access to new collections, private event invitations in Muscat, and styling inspiration.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-white border border-black/5 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-black text-white px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-gold transition-all duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <h2 className="serif text-2xl mb-6 tracking-tighter">MUSCAT HERITAGE</h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Premium Omani boutique specializing in high-quality fabrics and regional craftsmanship.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-gold">Shop</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-gold">Company</h5>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-gold">Connect</h5>
            <div className="flex gap-6 mb-8">
              <Instagram className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
              <MessageCircle className="w-5 h-5 hover:text-gold cursor-pointer transition-colors" />
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/40">Visit our Muscat Boutique</p>
            <p className="text-sm mt-2">Al-Qurm, Way 2134, Muscat</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20">
          <p>© 2026 Muscat Heritage. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/96800000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          Styling Help
        </span>
      </a>
    </div>
  );
}
