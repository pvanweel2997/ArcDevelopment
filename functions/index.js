const functions = require('firebase-functions');
const config = functions.config();
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const { initializeApp, applicationDefault } = require('firebase-admin/app');

initializeApp({
  credential: applicationDefault(),
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

const mailOptions = {
  from: process.env.MAIL_FROM,
  to: process.env.MAIL_TO,
  subject: 'Hello  using nodemailer',
  text: 'Test successful',
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.set('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    transporter.sendMail(mailOptions, error => {
      if (error) {
        res.send(error);
      } else {
        res.send('Message sent successfully.');
      }
    });
  });
});
