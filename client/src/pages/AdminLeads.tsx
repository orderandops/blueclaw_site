import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  ShieldCheck, 
  ArrowLeft,
  Mail,
  Calendar,
  Download,
  Search,
  RefreshCcw,
  Users
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Lead {
  id: number;
  email: string;
  createdAt: string;
}

export default function AdminLeads() {
  const { data: leads, isLoading, refetch } = useQuery<Lead[]>({
    queryKey: ["/api/leads"],
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link href="/">
              <Button variant="ghost" className="mb-4 -ml-2 text-gray-500 hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Site
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-primary" />
              Lead Management
            </h1>
            <p className="text-gray-500 mt-1">Manage and export your early access waitlist.</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => refetch()} className="gap-2">
              <RefreshCcw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center gap-2">
                <Users className="h-4 w-4" /> Total Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">{leads?.length || 0}</div>
              <p className="text-xs text-green-600 font-medium mt-1">+100% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-gray-200 overflow-hidden">
          <CardHeader className="border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold">Waitlist Submissions</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search emails..." 
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </CardHeader>
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-bold text-gray-900">Email Address</TableHead>
                <TableHead className="font-bold text-gray-900">Signed Up On</TableHead>
                <TableHead className="text-right font-bold text-gray-900">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-12 text-gray-500">
                    Loading leads...
                  </TableCell>
                </TableRow>
              ) : leads?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-12 text-gray-500">
                    No leads found yet.
                  </TableCell>
                </TableRow>
              ) : (
                leads?.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-gray-50/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {lead.email}
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {new Date(lead.createdAt).toLocaleDateString()} at {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200 uppercase tracking-tighter">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}