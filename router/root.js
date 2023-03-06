const express = require('express')
const router = express.Router()

const {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
} = require('../controllers/userControllers')

// get all users
router.get('/', getAllUsers)

// get one user
router.get('/:id', getUser)

// add one user
router.post('/', addUser)

// delete one user
router.delete('/:id', deleteUser)

// update one user
router.patch('/:id', updateUser)

module.exports = router