import { Messages, Codes, codeMessageError } from './types';

export default function errorHelper (errorMessage: string): codeMessageError {
    const result = <codeMessageError>{};
    switch(errorMessage){
        case 'Id not exists':
            result.code = Codes.notFound;
            result.message = Messages.notFound;
            break;
        case 'ID not valid':
            result.code = Codes.badRequest;
            result.message = Messages.badRequest;
            break;
        default:
            result.code = Codes.serverError;
            result.message = Messages.serverError;
    }
    return result;
}