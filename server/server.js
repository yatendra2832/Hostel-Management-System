const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Welcome to YS Hostel!");
});
app.get("/login", (req, res) => {
    res.status(200).send("Enter your id and password");
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});