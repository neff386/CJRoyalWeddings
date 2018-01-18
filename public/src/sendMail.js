require('dotenv').config();
const sgMail = require('@sendgrid/mail');
var express = require('express');


var app = express();
app.use(express.static('public'));

function sendMail(params) {

  console.log('message sent');
}

app.post('/send', function(req, res) { 
   
    var body = "";
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      var mail = JSON.parse(body);

      sgMail.setApiKey(process.env.SEND_KEY); 

      var msg = {
          to:"royalweddingsbycathyjohnson@gmail.com",
          from:"royalweddingsbycathyjohnson@gmail.com",
          subject: 'Inquiry from ' + mail.name,
          html: '<strong>NAME: </strong>' + mail.name + '<br/>' +
          '<strong>EMAIL: </strong>' + mail.email + '<br/>' +
          '<strong>PHONE: </strong>' + mail.phone + '<br/>' +
          '<strong>MESSAGE: </strong><br/>' + mail.message 
      };
      sgMail.send(msg);
      console.log('massage sent')
    })
 

    res.send(true);
});

app.listen(5000, function(err) {

    console.log('running');
    
});


