import { Sequelize } from "sequelize";
import * as path from 'path';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

console.log(path.join(__dirname, 'database.sqlite'))

export default sequelize;