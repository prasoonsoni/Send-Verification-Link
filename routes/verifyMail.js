require('dotenv').config()
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        const token = req.query.token
        if (!token) {
            res.json({ success: false, message: "Verification Token is required" })
        }
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET)
            const { id, email } = data.user
            const verifyUser = await User.updateOne({ _id: id, email: email }, { $set: { mailVerified: true } })
            if (!verifyUser.acknowledged) {
                return res.json({ success: false, message: "Error in verification. Try Again!!" })
            }
            res.json({ success: true, message: "E-Mail verified successfully." })
        } catch (error) {
            res.json({ success: false, message: "Verification token is not valid or it has expired." })
            console.log(error)
        }
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Internal Server Error Occured. Try Again!!" })
    }
})

module.exports = router