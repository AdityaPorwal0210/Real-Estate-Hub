import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-sm text-white">
                <span className="font-heading font-bold">L</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                LegalEstates
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Your trusted partner for all real estate legal services. Simplifiying property documentation for families.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services">
                  <a className="text-sm text-slate-600 hover:text-primary">Lease Renewal</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-slate-600 hover:text-primary">Property Registry</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-slate-600 hover:text-primary">E-Stamp</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/calculator">
                  <a className="text-sm text-slate-600 hover:text-primary">Stamp Duty Calculator</a>
                </Link>
              </li>
              <li>
                <Link href="/calculator">
                  <a className="text-sm text-slate-600 hover:text-primary">Registration Fees</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-slate-600">contact@legalestates.com</li>
              <li className="text-sm text-slate-600">+91 98765 43210</li>
              <li className="text-sm text-slate-600">123 Business Park, City</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} LegalEstates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
