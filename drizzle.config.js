/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_WPxXjrw4vd1K@ep-old-bar-a8k17aoz-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    }
};