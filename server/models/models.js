const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Role = sequelize.define("role", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
  clock_size: { type: DataTypes.INTEGER, defaultValue: 1 },
  date: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING },
});

const Master = sequelize.define("master", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
  name: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const City = sequelize.define("city", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIcrement: true },
  name: { type: DataTypes.STRING },
});

//связующие модели

const MasterToCity = sequelize.define("master_to_city", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

//связь моделей:

User.hasMany(Order);
Order.belongsTo(User);

Role.hasMany(User);
User.belongsTo(Role);

Master.hasMany(Order);
Order.belongsTo(Master);

City.hasMany(Order);
Order.belongsTo(City);

Master.belongsToMany(City, { through: MasterToCity });

module.exports = {
  User,
  Master,
  City,
  Order,
  Role,
};
