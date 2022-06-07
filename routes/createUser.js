require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const sendMail = require('../scripts/sendMail')
const sendSms = require('../scripts/sendSms')

router.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.body

        const mailExists = await User.findOne({ email })
        if (mailExists) {
            return res.json({ success: false, message: "E-Mail address already in use." })
        }

        const phoneExists = await User.findOne({ phone })
        if (phoneExists) {
            return res.json({ success: false, message: "Phone number already in use." })
        }

        const user = await User.create({ name, email, phone })
        if (!user) {
            return res.json({ success: false, message: "Error creating account. Try Again!!" })
        }

        const mailData = { user: { id: user._id, email: user.email } }
        const mailToken = jwt.sign(mailData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        const mailInfo = await sendMail(email, `${process.env.HOST}/user/verify/mail?token=${mailToken}`)

        const smsData = { user: { id: user._id, phone: user.phone } }
        const smsToken = jwt.sign(smsData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        const smsInfo = await sendSms(phone, `${process.env.HOST}/user/verify/phone?token=${smsToken}`)

        res.json({ success: true, message: "Account created. Please Verify your E-Mail Address and Phone Number" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Internal Server Error Occured. Try Again!!" })
    }
})

module.exports = router