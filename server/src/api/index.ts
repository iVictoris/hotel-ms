// yarn add express helmet body-parser cors; yarn add -D @types/express @types/helmet @types/body-parser @types/cors
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export default app;
