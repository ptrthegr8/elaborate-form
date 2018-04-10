const express = require('express');
const app = express();
const port = 3000;

// allows us to process submitted form data
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res) {
  var name = req.body.user_name;
  var message = req.body.user_message;
  var email = req.body.user_mail;
  var commMethod = req.body.pref_comm_meth;
// var {name, message, email} = req.body;

  console.log("Name: " + name);
  console.log("Message: " + message);
  console.log("E-Mail: " + email);

  res.send(`
    <h1>Many Thanks ${name}!</h1>
    <p>We received your message below, and will get back to you at <strong>${email}</strong> via <strong>${commMethod}</stong> within 6-9 business days.</p>
    <blockquote>${message}</blockquote>
    `);
});

app.listen(port);