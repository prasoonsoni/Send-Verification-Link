require('dotenv').config()
const nodemailer = require('nodemailer')

const sendMail = async (to, url) => {
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        const mailOptions = {
            from: `"Prasoon Soni 👨‍💻 <${process.env.EMAIL}>`,
            to: to,
            subject: "Mail Verification ✔️",
            text: "Click on the link to verify your account",
            html: `<a href="${url}" target="_blank">Verify Here</a>`
        }
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail