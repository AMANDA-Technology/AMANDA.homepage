const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
  const { email, message } = req.body
  console.log(process.env.SEND_GRID_EMAIL_FOR_SEND)
  const content = {
    to: email,
    from: process.env.SEND_GRID_EMAIL_FOR_SEND,
    subject: `Amanda-Technology - New Message`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}