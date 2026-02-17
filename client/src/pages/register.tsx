import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#003366] uppercase tracking-wider mb-2">Create Account</h1>
            <p className="text-slate-500 text-sm">Join Lekha portal for Jabalpur services</p>
          </div>

          <Card className="sampada-card">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100">
              <CardTitle className="text-xs font-bold uppercase text-[#003366] tracking-widest">Registration Form</CardTitle>
              <CardDescription className="text-[10px]">All fields are mandatory</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-500">Full Name</Label>
                <Input placeholder="Enter your complete name" />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-500">Mobile No. (Linked to Aadhaar)</Label>
                <div className="flex gap-2">
                  <div className="bg-slate-100 px-3 py-2 text-xs text-slate-500 font-bold border rounded">+91</div>
                  <Input placeholder="10-digit mobile number" maxLength={10} />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-500">Email ID</Label>
                <Input type="email" placeholder="example@gmail.com" />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-500">Create User ID</Label>
                <Input placeholder="Choose a unique username" />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-500">Create Password</Label>
                <Input type="password" placeholder="••••••••" />
              </div>

              <div className="pt-2">
                <Button className="w-full sampada-btn-primary py-6 uppercase font-bold tracking-widest text-xs">
                  Register Now
                </Button>
              </div>

              <div className="text-center text-xs text-slate-500 pt-4">
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-[#003366] font-bold hover:underline">Login Here</a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
