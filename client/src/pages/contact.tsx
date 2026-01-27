import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      <Navbar />
      
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Contact Info */}
            <div>
              <h1 className="text-3xl font-heading font-bold tracking-tight text-[#003366] sm:text-4xl uppercase">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Authorized Service Provider for Stamp Duty & Registration Services.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#003366]/10 p-3">
                    <MapPin className="h-6 w-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase text-sm">Our Office</h3>
                    <p className="mt-1 text-slate-600">
                      Amit Chopra<br />
                      V/47 KUM Market Vijay Nagar,<br />
                      Near Airtel Office Jabalpur 482002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#003366]/10 p-3">
                    <Phone className="h-6 w-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase text-sm">Phone</h3>
                    <p className="mt-1 text-slate-600">9424705556, 7999131636</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-[#003366]/10 p-3">
                    <Mail className="h-6 w-6 text-[#003366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 uppercase text-sm">Email</h3>
                    <p className="mt-1 text-slate-600">osstravel12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="sampada-card">
              <CardHeader className="bg-slate-50/50">
                <CardTitle className="text-[#003366] font-bold uppercase text-sm tracking-widest">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-[10px] font-bold uppercase text-slate-500">First name</Label>
                      <Input id="first-name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-[10px] font-bold uppercase text-slate-500">Last name</Label>
                      <Input id="last-name" placeholder="Surname" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] font-bold uppercase text-slate-500">Email</Label>
                    <Input id="email" type="email" placeholder="example@gmail.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] font-bold uppercase text-slate-500">Message</Label>
                    <Textarea id="message" placeholder="Describe your requirement..." className="min-h-[120px]" />
                  </div>

                  <Button className="w-full sampada-btn-primary py-6 uppercase tracking-widest font-bold">Send Message</Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
