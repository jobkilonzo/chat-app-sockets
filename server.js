import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.sendFile(new URL('./index.html', import.meta.url).pathname);
//   });

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });
server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});