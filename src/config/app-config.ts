const result = require("dotenv").config({ path: "./src/config/envs/.env" });
if (result.error) {
  throw Error(result.error);
}

export let APP_CONFIG: any = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  JWT_USER_SECRET: process.env.JWT_USER_SECRET_KEY,
}
