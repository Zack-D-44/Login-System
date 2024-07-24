// Requiring express
const express = require('express');
// Creating Express Router
const loginRouter = express.Router();

//Array of user objects
const users = [{
    username: 'jake213',
    password: '123jakle'
}, {
    username: 'zack',
    password: 'zaack'
}]

//Route handling for get requests made to /api/login endpoint
loginRouter.get('/login', (req, res, next) => {
    const user = req.query;

    //Looping through array checking to see if the current object has matching credentials
    for(let i = 0; i < users.length; i++){
        if(users[i].username === user.uname && users[i].password === user.pwood){
            res.status(200).send('correct logins')
        }
    }
    
    res.status(404).send();
})

// Exporting Router
module.exports = {
    loginRouter

}