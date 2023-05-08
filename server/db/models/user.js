const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Transaction }) {
      this.hasMany(Transaction, { foreignKey: 'senderId', as: 'Sent' });
      this.hasMany(Transaction, { foreignKey: 'receiverId', as: 'Received' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      hashpass: DataTypes.TEXT,
      cash: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
