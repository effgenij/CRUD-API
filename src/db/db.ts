import { IUser } from '../helpers/types';

const DB: IUser[] = [];
const getIndex = (id: string) => DB.findIndex((user: { id: string }) => user.id === id);

export { DB, getIndex };