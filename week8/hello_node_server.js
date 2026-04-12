const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 5000;


app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    next(); 
});


app.get('/team', (req, res) => {
    const teamData = {
        name: "Tolu" ,
        members: ["Justice", "Michael"] 
    };
    res.json(teamData);
});

// TASK 2: File System Logger

app.get('/log-visit', (req, res) => {
    const timestamp = new Date().toISOString() + '\n';
    
    fs.appendFile('log.txt', timestamp, (err) => {
        if (err) {
            console.error("Failed to write to file", err);
            return res.status(500).send("Error writing to log file.");
        }
        res.send("Timestamp logged successfully in log.txt!");
    });
});

// TASK 3: Simple Math API

app.get('/add', (req, res) => {
    const num1 = Number(req.query.a);
    const num2 = Number(req.query.b);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Please provide valid numbers for 'a' and 'b'" });
    }

    const sum = num1 + num2;
    res.json({ result: sum });
});


app.listen(PORT, () => {
    console.log(`Server is successfully running on http://localhost:${PORT}`);
});