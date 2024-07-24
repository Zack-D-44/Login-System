const express = require('express');

const loginRouter = express.Router();

const users = [{
    username: 'jake213',
    password: '123jakle'
}, {
    username: 'zack',
    password: 'zaack'
}]


loginRouter.get('/login', (req, res, next) => {
    const user = req.query;

    for(let i = 0; i < users.length; i++){
        if(users[i].username === user.uname && users[i].password === user.pwood){
            res.status(200).send('correct logins')
        }
    }
    
    res.status(404).send();
})

module.exports = {
    loginRouter

}