const express = require('express');
const app = express();
const { makeConnection } = require('./db/connecion');
const {  userRouter } = require('./routes/userRouter');
const {userCreateRouter} = require('./routes/createUserRouter');
const db = makeConnection();

app.use(express.json());
app.locals.db = db;

const { userInfo } = require('./routes/userInfo');

app.get('/users', userRouter);
app.get('/users/:id', userRouter);
app.post('/users/create',userCreateRouter);
app.get('/user-info', userInfo);

app.listen(4000, () => { console.log('listening on port 4000') });