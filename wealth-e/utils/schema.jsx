import {
  integer,
  numeric,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

// Building the budget schema for Database
export const Budgets = pgTable("Budgets", {
  id: serial("ID").primaryKey(),
  name: varchar("Name").notNull(),
  amount: varchar("Amount").notNull(),
  icon: varchar("Icon"),
  createdby: varchar("CreatedBy").notNull(),
});

// Building the income schema for Database
export const Incomes = pgTable("Incomes", {
  id: serial("ID").primaryKey(),
  name: varchar("Name").notNull(),
  amount: varchar("Amount").notNull(),
  icon: varchar("Icon"),
  createdby: varchar("CreatedBy").notNull(),
});

// Building the expenses schema for Database
export const Expenses = pgTable("Expenses", {
  id: serial("ID").primaryKey(),
  name: varchar("Name").notNull(),
  amount: varchar("Amount").notNull(),
  //   Established a one-to-many relationship between budgetID (from Expenses Table) and id (from Budget Table)
  budgetId: integer("BudgetID").references(() => Budgets.id),
  createdby: varchar("CreatedBy").notNull(),
});
