import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Calculator() {
  const [propertyValue, setPropertyValue] = useState<number | "">("");
  const [propertyType, setPropertyType] = useState("residential");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<{ stampDuty: number; registrationFee: number; total: number } | null>(null);

  const calculateFees = () => {
    const val = Number(propertyValue);
    if (!val) return;

    let baseRate = propertyType === "residential" ? 0.05 : 0.07;
    if (gender === "female") baseRate -= 0.01;
    if (gender === "joint") baseRate -= 0.005;

    const stampDuty = val * baseRate;
    const registrationFee = Math.min(val * 0.01, 30000); 
    
    setResult({
      stampDuty,
      registrationFee,
      total: stampDuty + registrationFee
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="sampada-card border-t-4 border-t-[#ffc107]">
        <CardHeader className="bg-slate-50/50">
          <CardTitle className="text-[#003366] font-bold uppercase text-sm">Fee Calculator</CardTitle>
          <CardDescription>
            Enter property details to estimate Stamp Duty and Registration Fees.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="property-value" className="text-xs font-bold uppercase text-slate-500">Property Value (₹)</Label>
            <Input
              id="property-value"
              type="number"
              placeholder="Enter market value"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="border-slate-200 focus:border-[#003366] focus:ring-[#003366]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="property-type" className="text-xs font-bold uppercase text-slate-500">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="property-type" className="border-slate-200">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="agricultural">Agricultural</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="gender" className="text-xs font-bold uppercase text-slate-500">Owner Gender</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="gender" className="border-slate-200">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="joint">Joint (M+F)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateFees} className="w-full mt-4 sampada-btn-primary py-6" size="lg">
            CALCULATE NOW
          </Button>
        </CardContent>
      </Card>

      <Card className="sampada-card border-t-4 border-t-[#003366]">
        <CardHeader className="bg-slate-50/50">
          <CardTitle className="text-[#003366] font-bold uppercase text-sm">Calculation Summary</CardTitle>
          <CardDescription>Estimated costs breakdown</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {result ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-slate-500 font-medium">Stamp Duty</div>
                <div className="text-right font-bold text-[#003366]">₹ {result.stampDuty.toLocaleString('en-IN')}</div>
                
                <div className="text-slate-500 font-medium">Registration Fee</div>
                <div className="text-right font-bold text-[#003366]">₹ {result.registrationFee.toLocaleString('en-IN')}</div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-[#003366] uppercase">Total Estimated</div>
                <div className="text-2xl font-bold text-[#003366]">
                  ₹ {result.total.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="text-[10px] text-slate-500 mt-4 p-3 bg-blue-50 border border-blue-100 rounded">
                * Note: This is an estimation based on standard Sampada 2.0 logic. Actual fees may vary.
              </div>
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center text-slate-400 text-sm italic">
              Enter details to see breakdown
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
