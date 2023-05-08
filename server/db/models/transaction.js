const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'senderId', as: 'Sender' });
      this.belongsTo(User, { foreignKey: 'receiverId', as: 'Receiver' });
    }
  }
  Transaction.init(
    {
      senderId: DataTypes.INTEGER,
      receiverId: DataTypes.INTEGER,
      value: DataTypes.INTEGER,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Transaction',
    },
  );
  return Transaction;
};
