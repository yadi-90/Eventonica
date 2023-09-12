const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: (process.env.DataBase_SSL != "false") && {
    rejectUnauthorized: false
  }
});

module.exports = db;