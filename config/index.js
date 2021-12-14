const dotenv = require("dotenv");

dotenv.config();

const config = {
  http: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || process.env.HTTP_PORT
  },
  dbString: process.env.DB_CONNECTION_STRING,
  saltRound: process.env.SALT_ROUND
}

module.exports = config