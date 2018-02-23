module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "burgers_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "root",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL,
    dialect: "mysql"
  }
}