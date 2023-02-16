import express from "express";
import morgan from "morgan";
import languageRouters from "./routers/language.routes";

const app=express();

//Settings
app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));

// Routes

app.use(languageRouters);

export default app;