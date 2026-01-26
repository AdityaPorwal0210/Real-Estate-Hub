import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText, Calculator, ShieldCheck, ClipboardCheck, ArrowRight, BookOpen, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const mainActions = [
    { title: "Property Valuation", icon: FileText, color: "bg-blue-600" },
    { title: "Duty & Fee Calculator", icon: Calculator, color: "bg-green-600", href: "/calculator" },
    { title: "E-Stamp Services", icon: ShieldCheck, color: "bg-orange-600" },
    { title: "Application Search", icon: Search, color: "bg-purple-600" }
  ];

  const services = [
    { title: "Lease Renewal", desc: "Manage your lease extensions seamlessly", icon: ClipboardCheck },
    { title: "Registry Search", desc: "Find registered property documents", icon: BookOpen },
    { title: "Stamp Duty", desc: "Calculate and pay stamp duties online", icon: ShieldCheck },
    { title: "Registration Fees", desc: "Verify registration fee details", icon: Calculator }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      {/* Banner Section */}
      <div className="bg-[#003366] text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">
              Welcome to Sampada 2.0
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Simplified government portal for property registration, document management, and legal fee calculations.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#ffc107] text-[#003366] px-6 py-2.5 rounded font-bold hover:bg-[#e0a800] transition-colors">
                GET STARTED
              </button>
              <button className="border border-white text-white px-6 py-2.5 rounded font-bold hover:bg-white/10 transition-colors">
                KNOW MORE
              </button>
            </div>
          </div>
          <div className="hidden lg:block bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded text-center">
                   <div className="text-2xl font-bold">1.2M+</div>
                   <div className="text-[10px] uppercase text-white/60">Documents Processed</div>
                </div>
                <div className="bg-white/10 p-4 rounded text-center">
                   <div className="text-2xl font-bold">50k+</div>
                   <div className="text-[10px] uppercase text-white/60">Daily Active Users</div>
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
            <h2 className="text-xl font-bold text-[#003366] uppercase tracking-wide">Our Services</h2>
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
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 mb-4">{s.desc}</p>
                <Link href="/services">
                  <a className="text-[#003366] text-[10px] font-bold flex items-center gap-1">
                    PROCEED <ArrowRight className="h-3 w-3" />
                  </a>
                </Link>
              </motion.div>
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
                          <p className="text-xs font-bold text-slate-500 uppercase">Toll Free</p>
                          <p className="text-lg font-bold text-[#003366]">1800-419-1010</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="text-[#003366]"><Mail className="h-5 w-5" /></div>
                       <div>
                          <p className="text-xs font-bold text-slate-500 uppercase">Support Email</p>
                          <p className="text-sm font-bold text-[#003366]">support.sampada@mp.gov.in</p>
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
