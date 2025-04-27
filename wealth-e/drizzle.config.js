// Config for Drizzle ORM

export default {
  dilect: "postgresql",
  scheme: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    ConnectStrings: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
