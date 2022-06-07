require('dotenv').config()
const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSID, authToken)
const getSMS = require('../templates/sms')

const sendSms = async (to, url) => {
    try {
        const smsOptions = {
            body: getSMS(url),
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to
        }
        const info = await client.messages.create(smsOptions)
        return info
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendSms