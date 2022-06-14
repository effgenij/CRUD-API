import http from 'http';

const server = http.createServer((req, res)=> {
    console.log('test log');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server runing on port ${PORT}`))