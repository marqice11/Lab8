import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Define the API route
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

// Export the handler for Vercel
export default app;
