require("dotenv").config();
module.exports = {
  development: {
    username: process.env.dev_db_username,
    password: process.env.dev_db_password,
    database: process.env.dev_db_database,
    host: process.env.dev_db_host,
    dialect: "mysql",
  },
  test: {
    username: process.env.test_db_username,
    password: process.env.test_db_password,
    database: process.env.test_db_database,
    host: process.env.test_db_host,
    dialect: "mysql",
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
