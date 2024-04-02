import  { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../database';

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

type UserCreationAttributes = Optional<UserAttributes, "id">

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public firstName!: string;
  public lastName!: string;
  public email!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  tableName: "users",
  sequelize, // passing the `sequelize` instance is required
});

export default User;