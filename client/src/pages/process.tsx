import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  FileSearch, 
  Users, 
  MapPin, 
  Calculator, 
  PenTool, 
  Video, 
  CreditCard,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    title: "User Registration",
    desc: "Create your secure account using Aadhaar-linked mobile number.",
    icon: UserPlus,
    color: "bg-blue-500"
  },
  {
    title: "Document Collection",
    desc: "Gather all necessary property documents based on our service checklist.",
    icon: FileSearch,
    color: "bg-indigo-500"
  },
  {
    title: "Party Details",
    desc: "Input information for buyer, seller, and witnesses as per government records.",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    title: "Property Identification",
    desc: "Verification of property location and Khasra details via GIS mapping.",
    icon: MapPin,
    color: "bg-red-500"
  },
  {
    title: "Fee Calculation",
    desc: "Automatic calculation of stamp duty and registration fees.",
    icon: Calculator,
    color: "bg-green-500"
  },
  {
    title: "Deed Drafting",
    desc: "Professional drafting of the legal deed following official templates.",
    icon: PenTool,
    color: "bg-orange-500"
  },
  {
    title: "Video e-KYC",
    desc: "Remote identity verification through safe and secure video calls.",
    icon: Video,
    color: "bg-cyan-500"
  },
  {
    title: "Secure Payment",
    desc: "Hassle-free payment through integrated government portals.",
    icon: CreditCard,
    color: "bg-emerald-500"
  }
];

export default function OurProcess() {
  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      <div className="bg-[#003366] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white uppercase tracking-wider text-center">
            Lekha - Our Working Process
          </h1>
          <p className="mt-4 text-white/70 text-center max-w-2xl mx-auto uppercase text-xs font-bold tracking-widest">
            Step-by-Step Guide following official Guidelines
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[#003366]/20 ml-6 space-y-12 pb-8">
            {steps.map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className={`absolute -left-6 top-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg z-10 border-4 border-white`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Step {i + 1}</span>
                    <h3 className="text-lg font-bold text-[#003366] uppercase">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-200">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#003366] text-white p-8 rounded-xl text-center shadow-xl">
            <h2 className="text-xl font-bold uppercase mb-4 tracking-wider text-[#ffc107]">Ready to begin?</h2>
            <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Start your property registration journey today. Our experts are here to guide you through every step of the Sampada 2.0 process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#ffc107] text-[#003366] px-8 py-3 rounded font-bold uppercase text-xs tracking-widest hover:bg-[#e0a800] transition-all">
                Register Now
              </button>
              <button className="border border-white/30 px-8 py-3 rounded font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
