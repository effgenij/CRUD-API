import { v4 as createUuid } from 'uuid';
import { IUser, paramsTuple } from '../helpers/types';
import { DB, getIndex } from '../db/db';

function all(): Promise<IUser[]> {
  return new Promise( (resolve) => {
    resolve(DB);
  });
}

function find(id: string): Promise<IUser> {
  return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    resolve(DB[index]);
  });
}

function create(params: paramsTuple): Promise<IUser> {
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

function update(id: string, params: paramsTuple): Promise<IUser> {
  return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    const [username, age, hobbies] = params;
    DB[index].username = username;
    DB[index].age = age;
    DB[index].hobbies = hobbies;
    resolve(DB[index]);
  });
  }

function destroy(id: string): Promise<void> {
   return new Promise((resolve, reject) => {
    const index: number = getIndex(id);
    delete DB[index];
    resolve();
   });
  }

export { all, find, create, update, destroy };
