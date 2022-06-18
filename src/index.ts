import http from 'http';
import { getUsers, createUser } from './controllers/user_controller';

const server = http.createServer((req, res)=> {
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