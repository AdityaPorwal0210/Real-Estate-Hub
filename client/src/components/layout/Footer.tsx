import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#002244] text-white/70 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded-full w-fit">
                <img src="/favicon.png" alt="Logo" className="h-8 w-8" />
              </div>
              <span className="text-white font-bold text-lg leading-tight uppercase">
                Lekha - Jabalpur
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Authorized Service Provider for Directorate of Registration and Stamps, Govt of MP. We assist in seamless property registration, e-stamping, and legal documentation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="hover:text-[#ffc107]">Home</a></Link></li>
              <li><Link href="/services"><a className="hover:text-[#ffc107]">Services</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-[#ffc107]">Contact Us</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Info</h3>
            <p className="text-sm mb-4 font-bold text-white uppercase">Amit Chopra</p>
            <p className="text-xs mb-4">
              V/47 KUM Market Vijay Nagar, Near Airtel Office Jabalpur 482002
            </p>
            <div className="space-y-2 text-xs">
              <p>Email: osstravels12@gmail.com</p>
              <p>Phone: 9424705556, 7999131636</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Directorate of Registration and Stamps, Govt of MP. Services Managed by Amit Chopra.</p>
        </div>
      </div>
    </footer>
  );
}
