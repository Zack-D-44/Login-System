//Importing express and creating instance
const express = require('express');
const app = express();
const {loginRouter} = require('./api/login');
const cors = require('cors');
const morgan = require('morgan');
// Use cors to allow cross origin requests
app.use(cors());

app.use(morgan('dev'));

app.use('/api',loginRouter);



app.listen(4000, () => {
    console.log('Server listening on port 4000');
})

