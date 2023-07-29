import { config } from "dotenv";

config();

const { PORT = 5050, MONGO_URL } = process.env;

export const envConfigs = {
  port: Number(PORT),
  mongoURL: MONGO_URL,
};
