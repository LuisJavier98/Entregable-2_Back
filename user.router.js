const router = require('express').Router()
const userServices = require('./user.services')

router.get('/users', userServices.getAllUsers)


router.post('/users', userServices.postNewUser)


router.get('/users/:id', userServices.getUserById)


router.delete('/users/:id', userServices.deleteUserById)

module.exports = router