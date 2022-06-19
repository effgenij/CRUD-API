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
                const result = body ? JSON.parse(body) : {}; 
                resolve(result);
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
        const reqUrl = req.url;
        let id;
        if(reqUrl){
          id = reqUrl.substring(11, reqUrl.length);
          if (uuidValidateV4(id)) {
            return id;
          }
        }
    
        throw new Error();
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