import express from "express";
import dotenv from "dotenv";

/* import routes */
import initRouter from "./routes/InitRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/* user defined routers */
app.use("/init", initRouter);

app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`GPT News listening at http://localhost:${port}`);
});
