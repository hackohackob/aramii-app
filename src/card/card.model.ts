// card.model.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import User from '../user/user.model';

interface CardAttributes {
  id: number;
  userId: number;
  cardNumber: string;
}

export type CardCreationAttributes = Required<CardAttributes>;

class Card extends Model<CardAttributes, CardCreationAttributes> implements CardAttributes {
  public id!: number;
  public userId!: number;
  public cardNumber!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Card.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  cardNumber: {
    type: new DataTypes.STRING(16),
    allowNull: false,
  }
}, {
  tableName: "cards",
  sequelize,
});

export default Card;