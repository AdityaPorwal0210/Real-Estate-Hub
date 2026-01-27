import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FileUpload({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-bold uppercase text-slate-500">{label}</Label>
      <div className="border-2 border-dashed border-slate-200 rounded p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
        <Upload className="h-6 w-6 text-[#003366] mb-2" />
        <p className="text-[10px] font-bold text-slate-600 uppercase">Upload Document</p>
        <p className="text-[9px] text-slate-400 mt-1">MAX 10MB (PDF/JPG)</p>
        <Input type="file" className="hidden" />
      </div>
    </div>
  );
}

const serviceDetails = [
  { id: "agreement", title: "Agreement", description: "Legal preparation of various types of agreements.", docs: ["ID Proof", "Agreement Draft", "Address Proof"] },
  { id: "sales-deed", title: "Sales Deed", description: "Official document for the sale and transfer of property.", docs: ["Sale Draft", "Identity Proof", "PAN Card", "Property Tax Receipt"] },
  { id: "lease-renewal", title: "Renewal of Lease Deed", description: "Hassle-free extension of your existing lease deeds.", docs: ["Previous Lease", "ID Proof", "Current Property Tax Receipt"] },
  { id: "release-deed", title: "Release Deed", description: "Legal document to renounce rights in a property.", docs: ["Family Member IDs", "Original Property Papers", "Affidavit"] },
  { id: "gift-deed", title: "Gift Deed", description: "Transfer of property ownership as a gift legally.", docs: ["ID Proof", "Original Property Documents", "Witness Details"] },
  { id: "will-deed", title: "Will Deed", description: "Legal declaration of a person's intentions regarding their property after death.", docs: ["Identity Proof", "Witness Details", "Medical Certificate"] },
  { id: "equitable-mortgage", title: "Equitable Mortgage", description: "Creation of mortgage by deposit of title deeds.", docs: ["Original Title Deeds", "Bank Sanction Letter", "ID Proof"] },
  { id: "mutation", title: "Mutation of Land Property", description: "Update of title ownership in the local land records.", docs: ["Registered Sale Deed", "Application Form", "Updated Tax Receipt"] }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      <div className="bg-[#003366] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wider text-center">
            Online Services
          </h1>
          <p className="mt-2 text-white/70 text-sm text-center max-w-2xl mx-auto">
            Access government real estate services through our simplified interface.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-2">
            <h3 className="text-xs font-bold text-[#003366] uppercase tracking-widest mb-4">Categories</h3>
            <div className="sticky top-24 space-y-2">
              {serviceDetails.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center justify-between p-3 bg-white border rounded shadow-sm hover:border-[#003366] transition-all group"
                >
                  <span className="text-[11px] font-bold text-slate-700 uppercase">{service.title}</span>
                  <ArrowRight className="h-3 w-3 text-slate-300 group-hover:text-[#003366]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            {serviceDetails.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-24">
                <Card className="sampada-card">
                  <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#003366] p-2 rounded text-white">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-[#003366] uppercase">{service.title}</CardTitle>
                        <CardDescription className="text-xs">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="grid gap-4 bg-blue-50/50 p-4 rounded border border-blue-100">
                      <h4 className="text-xs font-bold text-[#003366] uppercase flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Required Documents Checklist
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.docs.map(doc => (
                          <span key={doc} className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 border border-slate-200">
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-3">
                      {service.docs.map((doc, i) => (
                        <FileUpload key={i} label={doc} />
                      ))}
                    </div>

                    <div className="pt-4">
                      <Button className="w-full sampada-btn-primary py-6 uppercase tracking-widest font-bold">
                        Proceed to Application
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
