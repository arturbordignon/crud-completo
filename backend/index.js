import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);

app.get("/", (req, res) => res.send("Server Working"));
app.all("*", (req, res) => res.send("404 Not Found"));

app.listen(port, () => {
  console.log(`App running on Port: http://localhost:${port}`);
});
