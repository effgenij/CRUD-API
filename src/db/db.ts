import { IUser } from '../helpers/types';

const DB: IUser[] = [];
const getIndex = (id: string) => {
    try{
        return DB.findIndex((user: { id: string }) => user.id === id);
    } catch (error) {
        throw new Error('Id not exists');
    }
    };

export { DB, getIndex };