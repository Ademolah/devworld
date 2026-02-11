const express = require("express");
const mongoose = require("mongoose");


const app = express();


app.get("/", (req, res) => {
    res.send("Hello, World");
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Mongodb successfully"))
  .catch((error) => console.log("Error connecting to Mongodb:", error));

process.on("SIGINT", async () => {
    console.log("Gracefully shutting down...");
    await mongoose.connection.close();
    process.exit(0);
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});