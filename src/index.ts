import * as http from 'http';

import app from './app';

const server = http.createServer(app);
const port = '3000';

server.listen(port);

server.on('listening', () => {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${port}`;
  console.log(`Listening at ${bind}...`);
})

