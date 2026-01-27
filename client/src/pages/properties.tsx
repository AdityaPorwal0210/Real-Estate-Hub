import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Tag, Home as HomeIcon } from "lucide-react";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

const properties = [
  { id: 1, title: "Modern Villa", price: "₹ 1.2 Cr", location: "Vijay Nagar, Jabalpur", image: prop1, type: "Villa" },
  { id: 2, title: "Luxury Apartment", price: "₹ 85 Lacs", location: "Civil Lines, Jabalpur", image: prop2, type: "Apartment" },
  { id: 3, title: "Commercial Space", price: "₹ 2.5 Cr", location: "Wright Town, Jabalpur", image: prop3, type: "Office" },
];

export default function PropertiesListing() {
  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      <div className="bg-[#003366] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white uppercase tracking-wider text-center">
            Properties Offered
          </h1>
          <p className="mt-4 text-white/70 text-center max-w-2xl mx-auto">
            Explore exclusive real estate opportunities in Jabalpur. Handpicked listings managed by Amit Chopra.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-[#ffc107] text-[#003366] font-bold px-3 py-1 rounded text-xs uppercase">
                  {prop.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{prop.title}</h3>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      {prop.location}
                    </div>
                  </div>
                  <div className="text-xl font-black text-[#003366]">{prop.price}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase">
                    <HomeIcon className="h-4 w-4" />
                    Verified
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase">
                    <Tag className="h-4 w-4" />
                    Direct Deal
                  </div>
                </div>

                <button className="mt-8 w-full sampada-btn-primary py-4 rounded-lg font-bold uppercase tracking-widest text-sm shadow-md hover:shadow-xl transition-all">
                  Contact for Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
