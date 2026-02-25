import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // New route to view leads
  app.get("/api/leads", async (_req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (err: any) {
      res.status(500).json({ message: "Failed to fetch leads" });
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(data);
      res.json(lead);
    } catch (err: any) {
      res.status(400).json({ message: err.message || "Invalid request" });
    }
  });

  return httpServer;
}