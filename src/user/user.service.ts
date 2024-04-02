import { CreateOptions } from "sequelize";
import User, { UserAttributes } from "./user.model";

class UserService {
  async getUserById(id: number) {
    return await User.findByPk(id);
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async createUser(data: CreateOptions<UserAttributes>) {
    return await User.create(data);
  }

}

export default new UserService();