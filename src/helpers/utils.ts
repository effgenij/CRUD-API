import { version as uuidVersion, validate as uuidValidate } from 'uuid';
import type { IncomingMessage, ServerResponse } from 'http';
import { IUser, paramsTuple, responseValue } from './types';


function createResponse(res: ServerResponse, statusCode: number, value: responseValue): void {
    res.writeHead(statusCode, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(value));
}

function parseRequest(req: IncomingMessage): Promise<IUser> {
    return new Promise((resolve) => {
        try {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', async () => {
                resolve(JSON.parse(body));
            });
        } catch (error) {
            throw new Error();
        }
    });
}
function uuidValidateV4(uuid: string): boolean {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

async function parseID(req: IncomingMessage): Promise<string> {
    try {
        const body = await parseRequest(req);
        if (!uuidValidateV4(body.id)) {
            throw new Error('ID not valid');
        }
        return body.id;
    } catch (error) {
        throw new Error();
    }
}

async function parseParams(req: IncomingMessage): Promise<paramsTuple> {
    try {
        const body = await parseRequest(req);
        return [body.username, body.age, body.hobbies];
    } catch (error) {
        throw new Error();
    }
}



export { parseParams, parseID, createResponse, uuidValidateV4 };