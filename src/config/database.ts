import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT || "5432"),
});

export const query = (text: string, params?: any[]) => pool.query(text, params)

export const testDBConnection = async () => {
    try{
        const client = await pool.connect();
        console.log("Database connection successfully");
        client.release();   
    }
    catch(error){
        console.error("Unable to connect to the database: ", error);
        process.exit(1);        
    }
};