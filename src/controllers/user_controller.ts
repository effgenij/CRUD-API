import * as User from '../models/user_model';
import type { IncomingMessage, ServerResponse } from 'http';
import { Messages, Codes, IUser, paramsTuple } from '../helpers/types';

async function getUsers(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try{
    const users = await User.all();
    createResponse(res, Codes.ok, users);
  } catch (error) {
    createResponse(res, Codes.serverError, { message: "server error" });
    return;
  }
}

async function createUser(req: IncomingMessage, res: ServerResponse): Promise<void>{
    try {
        const params = await parseParams(req);
        const user = await User.create(params);
        createResponse(res, Codes.ok, user);
      } catch (error) {
        createResponse(res, Codes.serverError, { message: "server error" });
        return;
      }
    
}

function createResponse(res: ServerResponse, statusCode: number, value: any ): void{
    res.writeHead(statusCode, { "Content-type": "application/json" });
    res.end(JSON.stringify(value)); 
}

function parseRequest (req: IncomingMessage): Promise<IUser> {
    return new Promise((resolve, reject) => {
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

  async function parseID (req: IncomingMessage): Promise<string> {
    try{
      const body = await parseRequest(req);
      return body.id;
    } catch (error) {
        throw new Error();
    }
  }

  async function parseParams (req: IncomingMessage):Promise<paramsTuple> {
    try{
      const body = await parseRequest(req);
      return [body.username, body.age, body.hobbies];
    } catch (error) {
        throw new Error();
    }
  }

export {getUsers, createUser};