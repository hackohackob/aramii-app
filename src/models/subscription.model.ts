// subscription.model.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database';
import User from '../user/user.model';

interface SubscriptionAttributes {
  id: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  availableVisits: number;
}

type SubscriptionCreationAttributes = Optional<SubscriptionAttributes, "id">

class Subscription extends Model<SubscriptionAttributes, SubscriptionCreationAttributes> implements SubscriptionAttributes {
  public id!: number;
  public userId!: number;
  public startDate!: Date;
  public endDate!: Date;
  public availableVisits!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Subscription.init({
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
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  availableVisits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: "subscriptions",
  sequelize,
});

export default Subscription;