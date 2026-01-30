import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  UserPlus, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Download,
  Eye
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart,
  Area
} from "recharts";
import { useState } from "react";

const weeklyData = [
  { name: 'Mon', users: 400 },
  { name: 'Tue', users: 300 },
  { name: 'Wed', users: 600 },
  { name: 'Thu', users: 800 },
  { name: 'Fri', users: 500 },
  { name: 'Sat', users: 900 },
  { name: 'Sun', users: 1100 },
];

const monthlyData = [
  { name: 'Week 1', users: 2400 },
  { name: 'Week 2', users: 3200 },
  { name: 'Week 3', users: 2800 },
  { name: 'Week 4', users: 4500 },
];

const yearlyData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3500 },
  { name: 'Mar', users: 5000 },
  { name: 'Apr', users: 4800 },
  { name: 'May', users: 6000 },
  { name: 'Jun', users: 5500 },
  { name: 'Jul', users: 7200 },
  { name: 'Aug', users: 8000 },
  { name: 'Sep', users: 7500 },
  { name: 'Oct', users: 9000 },
  { name: 'Nov', users: 8500 },
  { name: 'Dec', users: 11000 },
];

const mockUsers = [
  { 
    id: "USR001", 
    name: "Rajesh Kumar", 
    mobile: "9876543210", 
    service: "Sales Deed",
    status: "Incomplete",
    docsUploaded: 6,
    totalDocs: 8,
    missingDocs: ["Property Photos", "Tax Receipts"],
    date: "2026-01-28"
  },
  { 
    id: "USR002", 
    name: "Sneha Sharma", 
    mobile: "8888777766", 
    service: "Lease Renewal",
    status: "Complete",
    docsUploaded: 6,
    totalDocs: 6,
    missingDocs: [],
    date: "2026-01-25"
  },
  { 
    id: "USR003", 
    name: "Amit Patel", 
    mobile: "7766554433", 
    service: "Mutation",
    status: "Incomplete",
    docsUploaded: 3,
    totalDocs: 7,
    missingDocs: ["P1/P2 Khasra", "Succession Cert", "Registered Deed"],
    date: "2026-01-20"
  }
];

export default function AdminDashboard() {
  const [timeframe, setTimeframe] = useState("weekly");

  const getChartData = () => {
    switch (timeframe) {
      case "monthly": return monthlyData;
      case "yearly": return yearlyData;
      default: return weeklyData;
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#003366] uppercase tracking-wider">Super Admin Console</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Managed by Amit Chopra</p>
          </div>
          <div className="bg-[#003366] text-white px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest">
            Logged in as Super Admin
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Total Users</p>
                  <p className="text-2xl font-bold text-slate-800">5,432</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-full"><Users className="h-5 w-5 text-blue-500" /></div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Avg. Monthly Users</p>
                  <p className="text-2xl font-bold text-slate-800">420</p>
                </div>
                <div className="bg-green-50 p-3 rounded-full"><TrendingUp className="h-5 w-5 text-green-500" /></div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">New (This Week)</p>
                  <p className="text-2xl font-bold text-slate-800">128</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-full"><UserPlus className="h-5 w-5 text-purple-500" /></div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Files Uploaded</p>
                  <p className="text-2xl font-bold text-slate-800">12,845</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-full"><FileText className="h-5 w-5 text-orange-500" /></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">User Growth</CardTitle>
              <div className="flex bg-slate-100 p-1 rounded-md">
                {['weekly', 'monthly', 'yearly'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 text-[9px] font-bold uppercase rounded transition-all ${
                      timeframe === t 
                        ? 'bg-white text-[#003366] shadow-sm' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={getChartData()}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#003366" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#003366" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="users" stroke="#003366" fillOpacity={1} fill="url(#colorUsers)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Bar dataKey="users" fill="#ffc107" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Document Management Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#003366] uppercase">User Documents Management</h2>
            <div className="flex gap-2">
              <button className="bg-white border text-xs font-bold uppercase px-3 py-1 rounded hover:bg-slate-50">Export PDF</button>
              <button className="bg-white border text-xs font-bold uppercase px-3 py-1 rounded hover:bg-slate-50">Filter</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">User ID</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">User Details</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Service Type</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Document Status</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded">{user.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-slate-800">{user.name}</p>
                      <p className="text-[10px] text-slate-500">{user.mobile}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-[10px] font-bold text-[#003366] uppercase">{user.service}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          {user.status === "Complete" ? (
                            <CheckCircle className="h-3 w-3 text-green-500" />
                          ) : (
                            <AlertCircle className="h-3 w-3 text-orange-500" />
                          )}
                          <span className={`text-[10px] font-bold uppercase ${user.status === "Complete" ? "text-green-600" : "text-orange-600"}`}>
                            {user.status} ({user.docsUploaded}/{user.totalDocs})
                          </span>
                        </div>
                        {user.missingDocs.length > 0 && (
                          <p className="text-[9px] text-red-400 italic">Missing: {user.missingDocs.join(", ")}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors" title="View Documents">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 bg-slate-50 text-slate-600 rounded hover:bg-slate-100 transition-colors" title="Download Archive">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
