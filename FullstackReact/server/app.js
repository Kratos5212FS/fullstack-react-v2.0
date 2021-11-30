const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_rest_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors());
app.use(express.json());

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get("/allusers", (req, res) => {
  const users = users.find({});
  console.log(users.length);
  res.send(users[0]);
});

const port = 3900;
http.listen(port, () => console.log(`Listening on port ${port}...`));