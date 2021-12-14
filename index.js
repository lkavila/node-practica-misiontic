const http = require("./http");
const db = require("./database");

http();
db.init();