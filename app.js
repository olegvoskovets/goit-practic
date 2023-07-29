import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import { envConfigs } from "./src/cofigs/index.js";
import userRouter from "./src/routes/userRouter.js";
import tagRouter from "./src/routes/tagRoutes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/users", userRouter);
app.use("/tags", tagRouter);

app.use("/", (req, res) => {
  res.status(400).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

// app.listen(envConfigs.port, async () => {
//   await mongoose.connect(envConfigs.mongoURL);
//   console.log(`Server working on port ${envConfigs.port}`);
// });
mongoose
  .connect(envConfigs.mongoURL)
  .then(() => {
    console.log("Database connection successful");
    app.listen(envConfigs.port, () => {
      console.log("Server running. Use our API on port: " + envConfigs.port);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
