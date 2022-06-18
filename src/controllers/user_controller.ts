import * as User from '../models/user_model';
import type { IncomingMessage, ServerResponse } from 'http';
import { Messages, Codes } from '../helpers/types';

async function getUsers(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try{
    const users = await User.all();

    res.writeHead(Codes.ok, { "Content-type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (err) {
        console.error(err);
  }
}

export {getUsers};