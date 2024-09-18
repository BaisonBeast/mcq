const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Mock data: 5 MCQs with only questions
const mcqs = [
    {
        question: "Is Paris the capital of France?",
    },
    {
        question: "Is Mars the largest planet in our solar system?",
    },
    {
        question: "Is the Pacific Ocean the largest ocean on Earth?",
    },
    {
        question: "Did William Shakespeare write 'Hamlet'?",
    },
    {
        question: "Is CO2 the chemical symbol for water?",
    },
];

// Endpoint to send only questions
app.get("/api/mcqs", (req, res) => {
    res.json(mcqs);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
