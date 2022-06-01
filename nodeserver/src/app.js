const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const app = express();
const port = process.env.PORT || 3001;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

const mailOptions = {
  from: process.env.MAIL_FROM,
  to: process.env.MAIL_TO,
  subject: 'Hello from guidehound20 using nodemailer',
  text: 'Test successful',
};

app.get('/sendMail', (req, res) => {
  cors(req, res, () => {
    transporter.sendMail(mailOptions, error => {
      if (error) {
        res.send(error);
      } else {
        res.send('Message sent successfully.');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Email server starting on port: ${port}`);
});
