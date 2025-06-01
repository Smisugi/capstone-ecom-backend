const dotenv = require('dotenv');
const defineConfig = require('drizzle-kit');

export default defineConfig({
    out: "./drizzle",
    schema: "../src/schema.js",
    driver: "pg",
    dbCredentials: {
        url: process.env.DATABASE_URL
    }
})