const express = require("express");
const morgan = require("morgan");

const app = express();

//settings

app.set("port", 4000);

//middleware

app.use(morgan("dev"));

export default app;