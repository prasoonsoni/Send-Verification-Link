require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const sendMail = require('../scripts/sendMail')

router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body

        const alreadyExists = await User.findOne({ email })
        if (alreadyExists) {
            return res.json({ success: false, message: "E-Mail address already in use." })
        }

        const user = await User.create({ name, email })
        if (!user) {
            return res.json({ success: false, message: "Error creating account. Try Again!!" })
        }

        const data = { user: { id: user._id, email: user.email } }
        const token = jwt.sign(data, process.env.JWT_SECRET)
        const info = await sendMail(email, `${process.env.HOST}/user/verify?token=${token}`)
        res.json({ success: true, message: "Account created. Please Verify your E-Mail Address." })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Internal Server Error Occured. Try Again!!" })
    }
})

module.exports = router