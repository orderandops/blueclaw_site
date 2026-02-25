import { leads, type Lead, type InsertLead, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads);
  }

  async getUser(id: number): Promise<User | undefined> {
    // Implement if needed
    return undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    // Implement if needed
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    // Implement if needed
    throw new Error("Not implemented");
  }
}

export const storage = new DatabaseStorage();
