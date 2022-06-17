import { IUser, paramsTuple } from "../helpers/ts_helper";
import { v4 as createUuid } from "uuid";

export class UserDB {
  db: IUser[];

  constructor() {
    this.db = [];
  }

  allUsers() {
    return this.db;
  }

  findUser(id: string) {
    const index: number = this.getIndex(id);
    return this.db[index];
  }

  createUser(params: paramsTuple) {
    const [username, age, hobbies] = params;
    const id = createUuid();
    const newUser: IUser = {
      id,
      username,
      age,
      hobbies,
    };
    this.db.push(newUser);
    return newUser;
  }

  updateUser(id: string, params: paramsTuple) {
    const index: number = this.getIndex(id);
    const [username, age, hobbies] = params;
    this.db[index].username = username;
    this.db[index].age = age;
    this.db[index].hobbies = hobbies;
    return this.db[index];
  }

  destroyUser(id: string) {
    const index: number = this.getIndex(id);
    delete this.db[index];
  }

  private getIndex(id: string) {
    return this.db.findIndex((dbUser: { id: string }) => dbUser.id === id);
  }
}
