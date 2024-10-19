import User from '../models/user.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'


const registerUser = asyncHandler(async (req, res) => {
    const { fullName, type, email, phoneNumber, password} = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        console.log('user exists')
        throw new Error('User already exists')
    }

    const user = User.create({
        fullName: fullName,
        type: type,
        email: email,
        phone: phoneNumber,
        password: password
    });

    if (user) {
        res.status(201).json(user)
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
})

const userLogin = asyncHandler(async (req, res) => {
    console.log("Mytest: accepting request for login")
    const user = await User.findOne({ email: req.body.email, type: req.body.type })
    console.log(req.body.password+"  "+req.body.email)
    if (user && (await user.matchPassword(req.body.password))) {
        res.json({
            name: user.name,
            email: user.email,
            token: generateToken(user.email, user.type),
        })
    } else {
        console.log("Mytest: user not found")
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})


const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById({ email: req.body.email, type: req.body.type })

    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not Found')
    }
})

// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById({ email: req.body.email, type: req.body.type })

//     if (user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         if (req.body.password) {
//             user.password = req.body.password
//         }

//         const updatedUser = await user.save()

//         res.json({
//             name: updatedUser.name,
//             email: updatedUser.email,
//             token: generateToken(updatedUser._id),
//         })
//     } else {
//         res.status(404)
//         throw new Error('User not Found')
//     }
// })

// const getAllUsers = asyncHandler(async (req, res) => {
//     const users = await User.find({})
//     res.json(users)

// })

// const deleteUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id)

//     if (user) {
//         await user.remove()
//         res.json({ message: 'User deleted' })
//     } else {
//         res.status(404)
//         throw new Error('User not Found')
//     }

// })

// const getUserById = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id).select('-password')
//     if (user) {
//         res.json(user)
//     } else {
//         res.status(404)
//         throw new Error('User not Found')
//     }
// })

// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id)

//     if (user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         user.isAdmin = req.body.isAdmin || user.isAdmin

//         const updatedUser = await user.save()

//         res.json({
//             _id: updatedUser._id,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin
//         })

//     } else {
//         res.status(404)
//         throw new Error('User not Found')
//     }
// })

export {
    userLogin,
    getUserProfile,
    registerUser,
    // updateUserProfile,
    // getAllUsers,
    // deleteUser,
    // getUserById,
    // updateUser
}