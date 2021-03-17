const { Router } = require('express')
const { Users } = require('../db/models')
const { genRandomUsername } = require('../utils/username')

async function createAnonUser() {

    const user = await Users.create({
        username: genRandomUsername()
    })

    return user
}

async function getUserById(id) {
    return await Users.findOne({where: {id} })
}

async function getUserByUsername(username) {
    return await Users.findOne({ where: {username} })
}

Router('/', async (req, res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
})

module.exports = {
    createAnonUser,
    getUserById,
    getUserByUsername
}





// test code 
// async function task() {
//     console.log(await createAnonUser())
//     console.log('--------------------')
//     console.log(await createAnonUser())
//     console.log('--------------------')
//     console.log(await createAnonUser())
//     console.log('--------------------')
//     console.log(await createAnonUser())
//     console.log('--------------------')


// }

// task()