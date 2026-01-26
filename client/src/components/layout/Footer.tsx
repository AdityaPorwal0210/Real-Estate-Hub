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
                Sampada 2.0
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              The Department of Registration and Stamps is one of the most important departments of the government. Its main purpose is to maintain property documents and provide legal security to owners.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Useful Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/"><a className="hover:text-[#ffc107]">Home</a></Link></li>
              <li><Link href="/services"><a className="hover:text-[#ffc107]">Services</a></Link></li>
              <li><Link href="/calculator"><a className="hover:text-[#ffc107]">Calculators</a></Link></li>
              <li><a href="#" className="hover:text-[#ffc107]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h3>
            <p className="text-sm mb-4">
              Paryawas Bhawan, 1st Floor, Block-2, Mother Teresa Road, Arera Hills, Bhopal (M.P.) - 462011
            </p>
            <div className="space-y-2 text-sm">
              <p>Email: helpdesk@mpigr.gov.in</p>
              <p>Phone: 0755-2573849</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs">
          <p>© {new Date().getFullYear()} Directorate of Registration and Stamps, Govt of MP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
