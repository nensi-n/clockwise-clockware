require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;

// будущий сервер
const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
