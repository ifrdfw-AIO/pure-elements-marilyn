import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, Shield, Sparkles, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            100% Natural & Handcrafted
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Pure Elements
            <span className="text-green-600 block">by Marilyn</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the power of nature with our handcrafted personal care products. 
            Made with love in Burleson, Texas, using only the purest ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Natural Products
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              Marilyn's Story
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Naturally Pure Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product is carefully crafted by hand, using traditional methods and the finest natural ingredients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Natural Toothpaste",
                description: "Fluoride-free, whitening formula with peppermint oil",
                icon: "🦷",
                benefits: ["No harsh chemicals", "Fresh breath", "Gentle whitening"]
              },
              {
                name: "Handmade Soaps",
                description: "Moisturizing bars with essential oils and botanicals",
                icon: "🧼", 
                benefits: ["Deep cleansing", "Natural fragrance", "Skin nourishing"]
              },
              {
                name: "Aluminum-Free Deodorant",
                description: "All-day protection with coconut oil and arrowroot",
                icon: "🌿",
                benefits: ["24-hour protection", "No aluminum", "Skin-friendly"]
              },
              {
                name: "Custom Blends",
                description: "Personalized formulas for your unique needs",
                icon: "✨",
                benefits: ["Made to order", "Your preferences", "Unique formulas"]
              }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-green-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Natural */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Natural?</h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              Your skin deserves better than harsh chemicals. Our natural approach puts your health first.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safe Ingredients",
                description: "No parabens, sulfates, or artificial chemicals that harm your skin and health."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Gentle Care",
                description: "Formulated for sensitive skin with natural moisturizing and healing properties."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Eco-Friendly",
                description: "Biodegradable ingredients that are kind to you and the environment."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-green-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">What Customers Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Burleson, TX",
                text: "Finally found a deodorant that actually works all day without the aluminum. Marilyn's formula is amazing!"
              },
              {
                name: "Mike R.", 
                location: "Fort Worth, TX",
                text: "The toothpaste tastes so much better than store brands, and my teeth feel cleaner. Love supporting local!"
              },
              {
                name: "Jennifer L.",
                location: "Arlington, TX", 
                text: "My sensitive skin loves these soaps. No more irritation, just soft, clean skin every day."
              },
              {
                name: "David K.",
                location: "Mansfield, TX",
                text: "Marilyn created a custom blend for my skin condition. The personal attention and care is unmatched."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Go Natural?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of happy customers who've made the switch to pure, natural personal care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              Custom Order
            </Link>
            <Link 
              href="/shop" 
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-green-600" />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-green-600" />
              <span>Local Burleson Favorite</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span>100% Handcrafted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">Pure Elements</h3>
              <p className="text-gray-400 mb-4">
                Handcrafted natural personal care products made with love in Burleson, Texas.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Leaf className="w-4 h-4 text-green-400" />
                <span>Naturally Pure Since 2024</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/toothpaste" className="hover:text-white transition-colors">Natural Toothpaste</Link></li>
                <li><Link href="/soaps" className="hover:text-white transition-colors">Handmade Soaps</Link></li>
                <li><Link href="/deodorant" className="hover:text-white transition-colors">Natural Deodorant</Link></li>
                <li><Link href="/custom" className="hover:text-white transition-colors">Custom Blends</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Marilyn</Link></li>
                <li><Link href="/ingredients" className="hover:text-white transition-colors">Our Ingredients</Link></li>
                <li><Link href="/process" className="hover:text-white transition-colors">How It's Made</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Burleson, Texas</li>
                <li>📧 marilyn@pureelements.com</li>
                <li>📱 Follow on Facebook</li>
                <li>💬 Text for Custom Orders</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pure Elements by Marilyn. All rights reserved. | Made with 💚 in Texas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}