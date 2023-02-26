import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

//routes
import languageRoutes from "./routes/language.route.js";


const app = express();

//settings

app.set("port", 4000);

//middleware

app.use(morgan("dev"));


//route
app.use("/api/language", languageRoutes);

export default app;