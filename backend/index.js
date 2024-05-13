import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";

const app = express();
const port = 5000;

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
