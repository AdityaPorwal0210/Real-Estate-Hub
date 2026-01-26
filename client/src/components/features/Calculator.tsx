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

    // Mock calculation logic inspired by typical Indian state rules
    // Residential: 5-7%, Commercial: 7-9%
    // Women often get 1% concession
    
    let baseRate = propertyType === "residential" ? 0.05 : 0.07;
    if (gender === "female") baseRate -= 0.01;
    if (gender === "joint") baseRate -= 0.005;

    const stampDuty = val * baseRate;
    const registrationFee = Math.min(val * 0.01, 30000); // 1% capped at 30k mock rule
    
    setResult({
      stampDuty,
      registrationFee,
      total: stampDuty + registrationFee
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Fee Calculator</CardTitle>
          <CardDescription>
            Enter property details to estimate Stamp Duty and Registration Fees.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="property-value">Property Value (₹)</Label>
            <Input
              id="property-value"
              type="number"
              placeholder="Enter market value"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="property-type">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="property-type">
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
            <Label htmlFor="gender">Owner Gender (for concession)</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="joint">Joint (M+F)</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateFees} className="w-full mt-4" size="lg">
            Calculate Now
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle>Calculation Summary</CardTitle>
          <CardDescription>Estimated costs breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-slate-500">Stamp Duty</div>
                <div className="text-right font-medium">₹ {result.stampDuty.toLocaleString('en-IN')}</div>
                
                <div className="text-slate-500">Registration Fee</div>
                <div className="text-right font-medium">₹ {result.registrationFee.toLocaleString('en-IN')}</div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between items-center">
                <div className="font-heading text-lg font-bold text-primary">Total Estimated</div>
                <div className="font-heading text-2xl font-bold text-primary">
                  ₹ {result.total.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="text-xs text-slate-500 mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                * Note: This is an estimation. Actual fees may vary based on exact location, cess, and local municipal rules.
              </div>
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center text-slate-400 text-sm">
              Enter details to see breakdown
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
