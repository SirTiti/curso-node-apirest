require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dbConnect = require("./config/mongo");

const app = express()
const port = process.env.PORT || 3000;

//TODO MIDDLEWARE >>
app.use(cors(), morgan("dev"), express.json());

//TODO ROUTES >>
app.use("/api", require("./routes"));



app.listen(port, ()=> console.log('Server on port:', port));

dbConnect();