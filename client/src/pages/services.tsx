import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle2 } from "lucide-react";
import serviceImage from "@/assets/service-docs.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Mock component for file upload
function FileUpload({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer">
        <Upload className="h-8 w-8 text-slate-400 mb-2" />
        <p className="text-sm font-medium text-slate-600">Click to upload or drag and drop</p>
        <p className="text-xs text-slate-400">PDF, JPG up to 10MB</p>
        <Input type="file" className="hidden" />
      </div>
    </div>
  );
}

const serviceDetails = [
  {
    id: "lease",
    title: "Lease Renewal",
    description: "Extend your rental agreement legally with proper documentation.",
    docs: ["Previous Lease Deed", "ID Proof of Landlord & Tenant", "Photos"]
  },
  {
    id: "registry",
    title: "Property Registry",
    description: "Official recording of property ownership in government records.",
    docs: ["Sale Deed Draft", "Encumbrance Certificate", "Identity Proofs", "PAN Cards"]
  },
  {
    id: "estamp",
    title: "E-Stamp Paper",
    description: "Secure digital stamp paper for all legal agreements.",
    docs: ["Purpose of Stamp Paper", "First Party Details", "Second Party Details"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-heading font-bold text-white sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Upload your documents securely and let us handle the complexities of legal processing.
            Following Sampada 2.0 guidelines.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Service Navigation (Sticky on Desktop) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-heading font-bold text-lg mb-4">Select a Service</h3>
              {serviceDetails.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="block p-4 rounded-lg border bg-white hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="font-medium text-slate-900">{service.title}</div>
                  <div className="text-sm text-slate-500 mt-1">{service.description}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Service Details & Forms */}
          <div className="lg:col-span-2 space-y-16">
            {serviceDetails.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-24">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <CardDescription>Required documents as per Sampada 2.0</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Checklist
                      </h4>
                      <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-1">
                        {service.docs.map(doc => <li key={doc}>{doc}</li>)}
                      </ul>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      {service.docs.map((doc, i) => (
                        <FileUpload key={i} label={`Upload ${doc}`} />
                      ))}
                    </div>

                    <Button className="w-full mt-4">Proceed with Application</Button>
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
