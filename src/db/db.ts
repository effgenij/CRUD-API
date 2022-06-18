import { IUser } from '../helpers/types';

const DB: IUser[] = [];
const getIndex = (id: string) => DB.findIndex((dbUser: { id: string }) => dbUser.id === id);

export { DB, getIndex };