import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, Calculator, ShieldCheck, ClipboardCheck, ArrowRight, BookOpen, Search, Phone, Mail, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import prop1 from "@/assets/property-1.jpg";
import prop2 from "@/assets/property-2.jpg";
import prop3 from "@/assets/property-3.jpg";

export default function Home() {
  const [, setLocation] = useLocation();
  const mainActions = [
    { title: "Property Valuation", icon: FileText, color: "bg-blue-600" },
    { title: "E-Stamp Services", icon: ShieldCheck, color: "bg-orange-600" },
    { title: "Property Dealing", icon: Briefcase, color: "bg-purple-600", href: "/properties" }
  ];

  const services = [
    { title: "Agreement", desc: "Legal preparation of various agreements", icon: FileText },
    { title: "Sales Deed", desc: "Official property sale documentation", icon: ClipboardCheck },
    { title: "Lease Deed Renewal", desc: "Seamless lease extensions", icon: BookOpen },
    { title: "Mutation of Land", desc: "Land record title updates", icon: ShieldCheck }
  ];

  const forSaleProperties = [
    { id: 1, title: "Modern Villa", price: "₹ 1.2 Cr", location: "Vijay Nagar, Jabalpur", image: prop1 },
    { id: 2, title: "Luxury Apartment", price: "₹ 85 Lacs", location: "Civil Lines, Jabalpur", image: prop2 },
    { id: 3, title: "Commercial Space", price: "₹ 2.5 Cr", location: "Wright Town, Jabalpur", image: prop3 },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      {/* Banner Section */}
      <div className="bg-[#003366] text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Sampada 2.0 - Jabalpur
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Official Service Provider for Property Registration, E-Stamping, and Land Mutation. Managed by Amit Chopra.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setLocation("/services")}
                className="bg-[#ffc107] text-[#003366] px-6 py-2.5 rounded font-bold hover:bg-[#e0a800] transition-colors"
              >
                SERVICES
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('featured-properties');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white text-white px-6 py-2.5 rounded font-bold hover:bg-white/10 transition-colors"
              >
                PROPERTIES
              </button>
            </div>
          </div>
          <div className="hidden lg:block bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded text-center">
                   <div className="text-2xl font-bold">15+</div>
                   <div className="text-[10px] uppercase text-white/60">Years Experience</div>
                </div>
                <div className="bg-white/10 p-4 rounded text-center">
                   <div className="text-2xl font-bold">5000+</div>
                   <div className="text-[10px] uppercase text-white/60">Clients Served</div>
                </div>
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 relative z-20">
          {mainActions.map((action) => (
            <Link key={action.title} href={action.href || "#"}>
              <a className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border-b-4 border-b-[#003366] flex flex-col items-center text-center group">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform", action.color)}>
                  <action.icon className="h-6 w-6" />
                </div>
                <span className="font-bold text-slate-800 uppercase text-xs tracking-wider">{action.title}</span>
              </a>
            </Link>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wide">Legal Services</h2>
            <Link href="/services">
              <a className="text-[#003366] text-sm font-bold flex items-center gap-1 hover:underline">
                VIEW ALL <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="sampada-card p-6"
              >
                <div className="bg-[#f4f7f9] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-[#003366]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-tight">{s.title}</h3>
                <p className="text-xs text-slate-600 mb-4">{s.desc}</p>
                <Link href="/services">
                  <a className="text-[#003366] text-[10px] font-bold flex items-center gap-1">
                    DETAILS <ArrowRight className="h-3 w-3" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Properties for Sale Section */}
        <div id="featured-properties" className="mt-16 bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-8 border-b-2 border-slate-200 pb-2">
            <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wide">Featured Properties</h2>
            <div className="text-[#003366] text-xs font-bold uppercase">Admin Listings</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {forSaleProperties.map((prop) => (
              <div key={prop.id} className="group cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={prop.image} alt={prop.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-[#ffc107] text-[#003366] font-bold px-2 py-1 rounded text-[10px]">FOR SALE</div>
                </div>
                <div className="p-4">
                  <div className="text-lg font-bold text-slate-900">{prop.price}</div>
                  <h3 className="text-sm font-bold text-slate-700 mt-1 uppercase tracking-tight">{prop.title}</h3>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-2">
                    <MapPin className="h-3 w-3" />
                    {prop.location}
                  </div>
                  <button className="mt-4 w-full border border-[#003366] text-[#003366] py-2 rounded text-[10px] font-bold uppercase hover:bg-[#003366] hover:text-white transition-colors">
                    Inquiry Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                 <div className="bg-[#003366] text-white px-6 py-3 font-bold text-sm uppercase">Latest Notifications</div>
                 <div className="p-6 space-y-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                         <div className="bg-[#ffc107]/20 text-[#003366] px-3 py-1 rounded text-[10px] font-bold h-fit">NEW</div>
                         <div>
                            <p className="text-sm font-medium text-slate-800">Regarding Revised Registration Fees for Year 2025-26</p>
                            <p className="text-[10px] text-slate-400 uppercase mt-1">24 Jan 2026</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
           <div>
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                 <div className="bg-[#003366] text-white px-6 py-3 font-bold text-sm uppercase">Help Desk</div>
                 <div className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="text-[#003366]"><Phone className="h-5 w-5" /></div>
                       <div>
                          <p className="text-xs font-bold text-slate-500 uppercase">Call Amit Chopra</p>
                          <p className="text-lg font-bold text-[#003366]">9424705556</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="text-[#003366]"><Mail className="h-5 w-5" /></div>
                       <div>
                          <p className="text-xs font-bold text-slate-500 uppercase">Support Email</p>
                          <p className="text-sm font-bold text-[#003366]">osstravel12@gmail.com</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

