require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

//connect to database
connectDB();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json({extended: false,}));

app.use(cors());

// Define Routes
app.use('/', require('./routers/index'))
app.use('/api/url', require('./routers/url'));

app.listen(PORT, () => {
  console.log("Ready on http://localhost:" + PORT);
});
