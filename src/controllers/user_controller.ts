import * as User from '../models/user_model';
import type { IncomingMessage, ServerResponse } from 'http';
import { Messages, Codes } from '../helpers/types';
import { parseParams, parseID, createResponse } from '../helpers/utils'

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



export {getUsers, createUser};