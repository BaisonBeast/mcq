const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mcqs = [
    {
        question: "Is Paris the capital of France?",
        option1: "Yes",
        option2: "No",
    },
    {
        question: "Is Mars the largest planet in our solar system?",
        option1: "Yes",
        option2: "No",
    },
    {
        question: "Is the Pacific Ocean the largest ocean on Earth?",
        option1: "Yes",
        option2: "No",
    },
    {
        question: "Did William Shakespeare write 'Hamlet'?",
        option1: "Yes",
        option2: "No",
    },
    {
        question: "Is CO2 the chemical symbol for water?",
        option1: "Yes",
        option2: "No",
    },
];

app.get("/api/mcqs", (req, res) => {
    res.json(mcqs);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
