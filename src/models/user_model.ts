import { IUser, paramsTuple } from "../helpers/ts_helper";
import { v4 as createUuid } from "uuid";

export class User {
  db: IUser[];

  constructor() {
    this.db = [];
  }

  all() {
    return this.db;
  }

  find(id: string) {
    const index: number = this.db.findIndex(
      (dbUser: { id: string }) => dbUser.id === id
    );
    return this.db[index];
  }

  create(params: paramsTuple) {
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

  update(id: string, params: paramsTuple) {
    const index: number = this.db.findIndex(
      (dbUser: { id: string }) => dbUser.id === id
    );
    const [username, age, hobbies] = params;
    this.db[index].username = username;
    this.db[index].age = age;
    this.db[index].hobbies = hobbies;
    return this.db[index];
  }

  destroy(id: string) {
    const index: number = this.db.findIndex(
      (dbUser: { id: string }) => dbUser.id === id
    );
    delete this.db[index];
  }
}
