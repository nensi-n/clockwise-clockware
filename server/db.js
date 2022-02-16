const { Sequelize } = require("sequelize"); //связь программного кода с БД

module.exports = new Sequelize(process.env.DB_URL, {
  dialect: "postgres", //
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});
