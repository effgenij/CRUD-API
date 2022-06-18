import * as User from '../models/user_model';
import type { IncomingMessage, ServerResponse } from 'http';
import { Messages, Codes } from '../helpers/types';

async function getUsers(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try{
    const users = await User.all();
    createResponse(res, Codes.ok, users);
  } catch (err) {
        console.error(err);
  }
}

function createResponse(res: ServerResponse, statusCode: number, value: any ): void{
    res.writeHead(statusCode, { "Content-type": "application/json" });
    res.end(JSON.stringify(value)); 
}

export {getUsers};