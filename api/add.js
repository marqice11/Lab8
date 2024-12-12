import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { parse } from 'url';

const app = express();
app.use(cors());

app.get("/api/add", (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide two valid numbers as query parameters." });
    }

    const sum = parseFloat(num1) + parseFloat(num2);

    res.json({
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        sum: sum
    });
});

// Export the handler function for Vercel
export default function handler(req, res) {
    const server = createServer(app);
    const parsedUrl = parse(req.url, true);
    app(req, res, parsedUrl);
}
