import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@/assets/hero-office.jpg";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <img
        src={heroImage}
        alt="Modern office"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Seamless Real Estate Legal Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-slate-300"
          >
            Simplifying lease renewals, property registry, and stamp duty calculations for your peace of mind. Professional, transparent, and efficient.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/services">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Explore Services
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                Calculate Fees
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
