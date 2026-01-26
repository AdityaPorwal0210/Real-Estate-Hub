import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/features/ServiceCard";
import { FileText, ScrollText, Stamp, Calculator as CalcIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Lease Renewal",
      description: "Hassle-free lease renewal services for residential and commercial properties.",
      icon: FileText,
      href: "/services"
    },
    {
      title: "Property Registry",
      description: "Complete assistance with property registration, ensuring all legal compliance.",
      icon: ScrollText,
      href: "/services"
    },
    {
      title: "E-Stamp Services",
      description: "Official e-stamping services for all your legal documentation needs.",
      icon: Stamp,
      href: "/services"
    },
    {
      title: "Fee Calculator",
      description: "Instant calculation of stamp duty and registration fees for your property.",
      icon: CalcIcon,
      href: "/calculator"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <main>
        {/* Services Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl text-slate-900">
                Our Expert Services
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We provide comprehensive real estate legal solutions tailored for families and businesses.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info/Trust Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-primary px-6 py-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
                  Why Choose LegalEstates?
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  With over 20 years of experience, we simplify complex legal processes. We ensure your documents are perfect, your fees are accurate, and your peace of mind is guaranteed.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
