export interface IUser {
    id: string;
    username: string;
    age: number;
    hobbies: string[]
}

export type paramsTuple = [string, number, string[]];
export type message = { message: string }
export type responseValue = IUser | IUser[] | message;
export type codeMessageError = {
    code: number;
    message: string;
}

export enum Codes {
    ok = 200,
    created = 201,
    deleted = 204,
    badRequest = 400,
    notFound = 404,
    serverError = 500
}

export enum Messages {
    created = 'User created succefully',
    deleted = 'User deleted succefully',
    badRequest = 'Sended ID is not valid',
    notFound = 'User with this ID not found in database',
    serverError = 'Internal server error',
    urlError = 'Path entered incorrectly'
}
