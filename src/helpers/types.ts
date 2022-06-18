export interface IUser {
    id: string;
    username: string;
    age: number;
    hobbies: string[]
}

export type paramsTuple = [string, number, string[]];

export enum StatusCodes {
    ok = 200,
    created = 201,
    deleted = 204,
    badRequest = 400,
    notFound = 404,
    serverError = 500
}

export enum Messages {
    created = '',
    deleted = '',
    badRequest = '',
    notFound = '',
    serverError = ''
}
