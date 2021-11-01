import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDb from "./utils/connectDb";
import indexRoutes from "./routes/indexRoutes";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

connectDb();

app.use("/", indexRoutes);

export default app;
