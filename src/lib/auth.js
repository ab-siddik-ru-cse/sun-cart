import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db("pixgen");

const baseURL =
    process.env.BETTER_AUTH_URL || "http://localhost:3000";

export const auth = betterAuth({
    baseURL,
    secret: process.env.BETTER_AUTH_SECRET,

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID,
        },
    },

    database: mongodbAdapter(db, {
        client,
    }),
});