//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/webapp'));
app.get('/favicon.ico', (req, res) => res.status(204));

// Tests coverage
app.use(express.static(__dirname + '/coverage'));
app.get('/coverage', (req, res) => res.sendFile(path.join(__dirname + '/coverage/index.html')));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/webapp/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 80);
