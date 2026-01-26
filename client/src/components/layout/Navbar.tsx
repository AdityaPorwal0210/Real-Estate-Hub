import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Globe, UserCircle } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#002244] text-white py-1 px-4 text-xs flex justify-between items-center">
        <div className="flex gap-4">
          <span>Skip to Main Content</span>
          <span>Screen Reader Access</span>
        </div>
        <div className="flex gap-4 items-center">
          <Globe className="h-3 w-3" />
          <span>English / हिन्दी</span>
          <div className="flex gap-1">
            <span className="cursor-pointer border px-1">A-</span>
            <span className="cursor-pointer border px-1">A</span>
            <span className="cursor-pointer border px-1">A+</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="sampada-header py-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-full">
                <img src="/favicon.png" alt="Logo" className="h-10 w-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight uppercase">
                  Sampada 2.0
                </span>
                <span className="text-white/80 text-[10px] leading-tight font-medium">
                  IGRS - Management of Property & Documents
                </span>
              </div>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className={cn("text-white/90 hover:text-white text-sm font-medium", location === "/" && "text-white underline underline-offset-4")}>Home</a>
            </Link>
            <Link href="/services">
              <a className={cn("text-white/90 hover:text-white text-sm font-medium", location === "/services" && "text-white underline underline-offset-4")}>Services</a>
            </Link>
            <Link href="/calculator">
              <a className={cn("text-white/90 hover:text-white text-sm font-medium", location === "/calculator" && "text-white underline underline-offset-4")}>Calculators</a>
            </Link>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded text-white text-sm cursor-pointer hover:bg-white/20 transition-colors">
              <UserCircle className="h-4 w-4" />
              <span>Login / Register</span>
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#003366] border-t border-white/10 p-4 space-y-3">
          <Link href="/"><a className="block text-white text-sm py-2">Home</a></Link>
          <Link href="/services"><a className="block text-white text-sm py-2">Services</a></Link>
          <Link href="/calculator"><a className="block text-white text-sm py-2">Calculators</a></Link>
          <div className="bg-white/10 p-2 text-white text-center rounded text-sm">Login / Register</div>
        </div>
      )}
    </nav>
  );
}
