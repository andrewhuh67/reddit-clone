const pgp = require('pg-promise')();
const keys = require('./keys');

const database = pgp(process.env.DATABASE_URL || {
  host: "127.0.0.1",
  port: 5432,
  database: "redditclone",
  user: 'postgres',
  password: keys.dbPassword
});

module.exports = database;