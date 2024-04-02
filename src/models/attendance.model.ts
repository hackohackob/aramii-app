// attendance.model.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database';
import User from '../user/user.model';
import Group from './group.model';
import Card from '../card/card.model';
import Subscription from './subscription.model';

interface AttendanceAttributes {
  id: number;
  date: Date;
  userId: number;
  groupId: number;
  cardId: number | null;
  subscriptionId: number | null;
  paid: boolean;
  paymentType: 'subscription' | 'cash'; // New field
}

type AttendanceCreationAttributes = Optional<AttendanceAttributes, "id">

class Attendance extends Model<AttendanceAttributes, AttendanceCreationAttributes> implements AttendanceAttributes {
  public id!: number;
  public date!: Date;
  public userId!: number;
  public groupId!: number;
  public cardId!: number | null;
  public subscriptionId!: number | null;
  public paid!: boolean;
  public paymentType!: 'subscription' | 'cash'; // New field

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Attendance.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  groupId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id'
    }
  },
  cardId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Card,
      key: 'id'
    }
  },
  subscriptionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Subscription,
      key: 'id'
    }
  },
  paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  paymentType: { // New field
    type: DataTypes.ENUM('subscription', 'cash'),
    allowNull: false,
  }
}, {
  tableName: "attendances",
  sequelize,
});

export default Attendance;