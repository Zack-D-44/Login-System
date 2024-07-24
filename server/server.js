//Importing express and creating instance
const express = require('express');
const app = express();
// Importing router, and middleware packages
const {loginRouter} = require('./api/login');
const cors = require('cors');
const morgan = require('morgan');

// Use cors to allow cross origin requests
app.use(cors());

//use morgan for logging
app.use(morgan('dev'));

//Mounting router to path
app.use('/api',loginRouter);


// Start server listening on port 4000
app.listen(4000, () => {
    console.log('Server listening on port 4000');
})

