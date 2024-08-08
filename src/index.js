const express = require('express');
const apiRoute = require('./routes/routes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT ;

app.use(express.json());

app.use("/whatsapi",apiRoute);

app.listen(PORT,() => {console.log(`Server is listening on port: ${PORT}`)});