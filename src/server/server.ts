import polka from 'polka';
import UserService from '../user/user.service';

const server = polka();

// server.use(polka); // for parsing application/json

server.post('/users', async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.end(JSON.stringify(user));
});

server.get('/users/:id', async (req, res) => {
  const user = await UserService.getUserById(Number(req.params.id));
  res.end(JSON.stringify(user));
});

// other routes...


export default server;