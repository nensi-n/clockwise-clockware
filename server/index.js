require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

// будущий сервер, объект, с кот.запускается приложение
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

//обработка ошибок, последний Middleware
app.use(errorHandler);

// проверка работы сервера
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "WORKING" });
// });

//создание и вызов ф-ции для подклучения к БД
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); //сверяем состояние БД со схемой данных
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
