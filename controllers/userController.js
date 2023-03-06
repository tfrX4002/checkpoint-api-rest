const User = require('../models/userModel')
const mongoose = require('mongoose')

// get all users
const getAllUsers = async(req, res) => {
    const users = await User.find({})

    if(!users){
        return res.status(400).json({ error : "no users "})
    }
    res.status(200).json(users)
}

// get one user
const getUser = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "id invalid"})
    }

    const user = await User.findById({ _id : id })

    if(!user){
        return res.status(400).json({ error : "id not found"})
    }
    res.status(200).json(user)
}

// add one users
const addUser = async(req, res) => {

    const { nom, commune, age } = req.body

    try {
        const user = await User.create({ nom, commune, age })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error : "Error in adding"})
    }

    
}

// delete one user
const deleteUser = async(req, res) => {
    
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "id invalid"})
    }

    const user = await User.findOneAndRemove({ _id : id })

    if(!user){
        return res.status(400).json({ error : "id not found"})
    }
    res.status(200).json(user)

}

// update one user
const updateUser = async(req, res) => {
    
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "id invalid"})
    }

    const user = await User.findOneAndUpdate({ _id : id }, { ...req.body })

    if(!user){
        return res.status(400).json({ error : "id not found"})
    }
    res.status(200).json(user)
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser
}