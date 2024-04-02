// group.model.ts
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database';

interface GroupAttributes {
  id: number;
  name: string;
  days: string; // Days of the week as a comma-separated string
  hour: string; // Hour of the day
}

type GroupCreationAttributes = Optional<GroupAttributes, "id">

class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
  public id!: number;
  public name!: string;
  public days!: string;
  public hour!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getDaysArray(): string[] {
    return this.days.split(',');
  }
}

Group.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  days: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  hour: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: "groups",
  sequelize,
});

export default Group;