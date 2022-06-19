import http, { IncomingMessage, ServerResponse } from 'http';
import { getUsers, createUser, findUser, updateUser, deleteUser } from './controllers/user_controller';
import 'dotenv/config';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if(req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res);
    } else if(req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res);
    } else if(req.url && req.url.startsWith('/api/users') && req.method === 'GET') {
        findUser(req, res);
    } else if(req.url && req.url.startsWith('/api/users') && req.method === 'PUT') {
        updateUser(req, res);
    } else if(req.url && req.url.startsWith('/api/users') && req.method === 'DELETE') {
        deleteUser(req, res);
    }else {
        res.writeHead(400, { 'Content-type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server runing on port ${PORT}`));