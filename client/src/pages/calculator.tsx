import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calculator } from "@/components/features/Calculator";
import { motion } from "framer-motion";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-heading font-bold tracking-tight sm:text-4xl text-slate-900"
            >
              Stamp Duty & Registration Calculator
            </motion.h1>
            <p className="mt-4 text-lg text-slate-600">
              Estimate your legal costs accurately before proceeding with your property transactions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <Calculator />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
