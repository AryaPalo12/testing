const express = require("express");
const cors = require('cors');
// Initialize Express
const app = express();

app.use(cors)

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/testing/', (req,res) => {
    res.json('Works');
})

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});