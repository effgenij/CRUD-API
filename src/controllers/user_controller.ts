import type { IncomingMessage, ServerResponse } from 'http';
import * as User from '../models/user_model';
import { Messages, Codes } from '../helpers/types';
import { parseParams, parseID, createResponse } from '../helpers/utils';

async function getUsers(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try{
    const users = await User.all();
    createResponse(res, Codes.ok, users);
  } catch (error) {
    createResponse(res, Codes.serverError, { message: 'server error' });  
  }
}

async function createUser(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try {
    const params = await parseParams(req);
    const user = await User.create(params);
    createResponse(res, Codes.ok, user);
  } catch (error) {
    createResponse(res, Codes.serverError, { message: 'server error' });   
  }   
}

async function findUser(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try {
    const id = await parseID(req);
    const user = await User.find(id);
    createResponse(res, Codes.created, user);
  } catch (error) {
    createResponse(res, Codes.serverError, { message: 'server error' });   
  }   
}

async function updateUser(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try {
    const id = await parseID(req);
    const params = await parseParams(req);
    const user = await User.update(id, params);
    createResponse(res, Codes.ok, user);
  } catch (error) {
    createResponse(res, Codes.serverError, { message: 'server error' });   
  }   
}

async function deleteUser(req: IncomingMessage, res: ServerResponse): Promise<void>{
  try {
    const id = await parseID(req);
    await User.destroy(id);
    createResponse(res, Codes.created, { message: 'user delted' });
  } catch (error) {
    createResponse(res, Codes.serverError, { message: 'server error' });   
  }   
}



export { getUsers, createUser, findUser, updateUser, deleteUser };