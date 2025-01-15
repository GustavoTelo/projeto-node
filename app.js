const express = require('express');
const syncDatabase = require('./config/syncDatabase');

const userRoute = require('./router/userRoute')


const app = express();
app.use(express.json());

app
    .use('/user', userRoute);

syncDatabase();

app.listen(3000, () => {
    console.log('Server runnin on http://localhost:3000/');
});