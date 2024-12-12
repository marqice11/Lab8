import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

//middleware
app.use(cors());

//routes

app.get("/api/add", (req, res) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide two valid numbers as query parameters." });
    }

    const sum = parseFloat(num1) + parseFloat(num2);
    res.json(sum);
});

//run
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
