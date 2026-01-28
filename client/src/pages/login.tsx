import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { KeyRound, Smartphone } from "lucide-react";

export default function Login() {
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
            <h1 className="text-2xl font-bold text-[#003366] uppercase tracking-wider mb-2">Member Login</h1>
            <p className="text-slate-500 text-sm">Access your property documents and applications</p>
          </div>

          <Card className="sampada-card overflow-hidden">
            <Tabs defaultValue="credentials" className="w-full">
              <TabsList className="w-full grid grid-cols-2 rounded-none bg-slate-100 p-0 h-14 border-b border-slate-200">
                <TabsTrigger 
                  value="credentials" 
                  className="rounded-none h-full data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-[#003366] flex gap-2 uppercase text-[10px] font-bold"
                >
                  <KeyRound className="h-4 w-4" />
                  User ID
                </TabsTrigger>
                <TabsTrigger 
                  value="otp" 
                  className="rounded-none h-full data-[state=active]:bg-white data-[state=active]:border-t-2 data-[state=active]:border-t-[#003366] flex gap-2 uppercase text-[10px] font-bold"
                >
                  <Smartphone className="h-4 w-4" />
                  Mobile OTP
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="credentials" className="m-0">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase text-slate-500">User ID</Label>
                    <Input placeholder="Username" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-[10px] font-bold uppercase text-slate-500">Password</Label>
                      <a href="#" className="text-[9px] font-bold text-[#003366] uppercase hover:underline">Forgot?</a>
                    </div>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div className="pt-4">
                    <Button className="w-full sampada-btn-primary py-6 uppercase font-bold tracking-widest text-xs">
                      Sign In
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="otp" className="m-0">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase text-slate-500">Mobile Number</Label>
                    <div className="flex gap-2">
                      <div className="bg-slate-100 px-3 py-2 text-xs text-slate-500 font-bold border rounded">+91</div>
                      <Input placeholder="Enter registered number" maxLength={10} />
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full py-6 uppercase font-bold tracking-widest text-xs border-[#003366] text-[#003366] hover:bg-slate-50">
                      Generate OTP
                    </Button>
                  </div>
                  <div className="space-y-2 pt-2">
                    <Label className="text-[10px] font-bold uppercase text-slate-500">Enter OTP</Label>
                    <Input placeholder="6-digit code" maxLength={6} className="text-center tracking-[1em] font-bold" />
                  </div>
                  <div className="pt-4">
                    <Button className="w-full sampada-btn-primary py-6 uppercase font-bold tracking-widest text-xs">
                      Verify & Login
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500">New user? </span>
              <Link href="/register">
                <a className="text-[#003366] font-bold text-xs uppercase hover:underline">Register Account</a>
              </Link>
            </div>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
