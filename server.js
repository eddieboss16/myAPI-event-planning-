const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// import product routes
const productRoutes = require("./routes/product");

require("dotenv-flow").config();

//route
app.get("/api/welcome", (req, res)=> {
    res.status(200).send({message: "welcome to my myAPI"});
})

mongoose.connect
(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.log("Error connecting to MongoDB:" + error));

mongoose.connection.once("open", () => console.log("Connected successfully to MongoDB"));

// post, put, delete -> CRUD
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 4000;

//start up server
app.listen(PORT, function(){
    console.log("Server is running on port: " + PORT);
})

module.exports = app;