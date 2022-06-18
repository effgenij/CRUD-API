import { v4 as createUuid } from 'uuid';
import { IUser, paramsTuple } from '../helpers/types';
import { DB, getIndex } from '../db/db';

function allUsers(): Promise<IUser[]> {
  return new Promise( (resolve) => {
    resolve(DB);
  });
}

function findUser(id: string): Promise<IUser> {
  return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    resolve(DB[index]);
  });
}

function createUser(params: paramsTuple): Promise<IUser> {
  return new Promise((resolve, reject) => {
    const [username, age, hobbies] = params;
    const id = createUuid();
    const newUser: IUser = {
        id,
        username,
        age,
        hobbies,
      };
    DB.push(newUser);
  resolve(newUser);
  });
  
  }

function updateUser(id: string, params: paramsTuple): Promise<IUser> {
  return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    const [username, age, hobbies] = params;
    DB[index].username = username;
    DB[index].age = age;
    DB[index].hobbies = hobbies;
    resolve(DB[index]);
  });
  }

function destroyUser(id: string): Promise<void> {
   return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    delete DB[index];
    resolve();
   });
  }

export { allUsers, findUser, createUser, updateUser, destroyUser };
