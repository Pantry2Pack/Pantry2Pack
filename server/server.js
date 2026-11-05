import 'dotenv/config'; // Injects the environment variables from the .env file
import express from 'express';
import cors from 'cors';
import pool from './db.js'; // Imports the established PostgreSQL connection pool

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to allow frontend communication and parse incoming JSON payloads
app.use(cors());
app.use(express.json());

// Quickly verifies if the server is running
app.get("/api/health", (req, res) => {
    res.json({ ok: true });
});

// Fetches all messages from the database, ordered from newest to oldest        
app.get("/api/messages", async (req, res) => {
    try {
        const { rows } = await pool.query(
            'SELECT id, text, created_at FROM messages ORDER BY id DESC'
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Failed to start: ${err}`);
        process.exit(1);
    }
    console.log(`Server is running on port ${PORT}`);
});