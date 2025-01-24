import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  ShoppingBasket, 
  Shovel, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Fixed Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-light tracking-wider text-white">
                Green Haven
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {['Home', 'About', 'Products', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-green-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-md`}>
          <div className="px-6 py-4 space-y-4">
            {['Home', 'About', 'Products', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-green-400 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <header className="relative min-h-screen flex items-center diagonal-lines overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl floating-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-8 max-w-4xl leading-[1.1]">
              <span className="relative inline-block">
                Cultivating
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-transparent blur-lg"></div>
              </span>
              <span className="block">Tomorrow's Gardens</span>
              <span className="block text-green-400 relative inline-block">
                Today
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-transparent blur-lg"></div>
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed">
              Experience the fusion of nature and innovation at Green Haven Nursery. 
              Where traditional gardening meets modern sustainability.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="group bg-green-500 text-white px-8 py-4 rounded-full font-light tracking-wider hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 glow">
                <span>Explore Collection</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border border-white/20 text-white px-8 py-4 rounded-full font-light tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
      </header>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: ShoppingBasket,
                title: "Premium Plants",
                description: "Curated selection of rare and exotic plants for the modern enthusiast"
              },
              {
                icon: Shovel,
                title: "Smart Tools",
                description: "Next-generation gardening equipment for precision care"
              },
              {
                icon: Leaf,
                title: "Expert Design",
                description: "Innovative landscaping solutions with sustainable principles"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-light tracking-wider mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6 lg:px-12 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light tracking-wider text-center mb-4">Featured Collections</h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium plants and tools, 
            designed for the modern garden enthusiast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80",
                name: "Indoor Plants",
                price: "From $29.99",
                tag: "Trending"
              },
              {
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80",
                name: "Smart Tools",
                price: "From $19.99",
                tag: "New"
              },
              {
                image: "https://images.unsplash.com/photo-1470755008296-2939845775eb?auto=format&fit=crop&q=80",
                name: "Outdoor Plants",
                price: "From $34.99",
                tag: "Popular"
              }
            ].map((product, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {product.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light tracking-wider mb-2">{product.name}</h3>
                  <p className="text-white/60 mb-4">{product.price}</p>
                  <button className="w-full group bg-white/5 text-white px-6 py-3 rounded-xl font-light tracking-wider hover:bg-green-500 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 lg:px-12 relative diagonal-lines">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light tracking-wider text-center mb-16">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, text: "(555) 123-4567" },
              { icon: Mail, text: "contact@greenhaven.com" },
              { icon: MapPin, text: "123 Garden Street, Green City" }
            ].map((contact, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-4"
              >
                <contact.icon className="h-6 w-6 text-green-400" />
                <span className="text-white/80">{contact.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-light tracking-wider">Green Haven</span>
            </div>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white/60 hover:text-green-400 transition-colors duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 md:mb-0">
              &copy; 2024 Green Haven Nursery. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/40 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/40 hover:text-green-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;