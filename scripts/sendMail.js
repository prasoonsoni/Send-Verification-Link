require('dotenv').config()
const nodemailer = require('nodemailer')
const getHTML = require('../templates/email')
const sendMail = async (to, url) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        const mailOptions = {
            from: `"Prasoon Soni 👨‍💻 <${process.env.EMAIL}>`,
            to: to,
            subject: "Do Not Reply - Email Verification ✔️",
            html: getHTML(url)
        }
        const info = await transporter.sendMail(mailOptions)
        return info
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail