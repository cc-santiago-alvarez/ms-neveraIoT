const express = require('express')
const userRouter = express.Router()
const {
    getAllUsers,
    getUserById,
    getUserByCardCode,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.js')

userRouter.use(express.json())

userRouter.route('/').get(getAllUsers)
userRouter.route('/id/:id').get(getUserById);
userRouter.route('/cardCode/:cardCode').get(getUserByCardCode);
userRouter.route('/create').post(createUser)
userRouter.route('/update').put(updateUser)
userRouter.route('/delete').delete(deleteUser)

module.exports = userRouter