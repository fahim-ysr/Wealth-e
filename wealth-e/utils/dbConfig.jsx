// Establishes the database connection that the Wealth-e uses to store and retrieve data. Drizzle ORM provides a type-safe way to interact with the PostgreSQL database and Neon provides a serverless PostgreSQL service that works well with NextJS.

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Creates a SQL connection instance using the Neon client
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

// Creates and exports a Drizzle ORM instance
export const db = drizzle(sql, schema);
