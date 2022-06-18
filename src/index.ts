import http from 'http';
import { getUsers, createUser, sendBadRequest } from './controllers/user_controller';
import 'dotenv/config';
import { urlNotValid } from './helpers/utils';

const server = http.createServer((req, res)=> {
    if (urlNotValid(req.url)) {
        sendBadRequest(res);
        return;
    }
    if(req.url === '/api/users' && req.method === 'GET') {
        getUsers(req, res);
    } else if(req.url === '/api/users' && req.method === 'POST') {
        createUser(req, res);
    }else {
        res.writeHead(404, { 'Content-type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server runing on port ${PORT}`));