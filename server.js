const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/members', require('./routes'))


// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server is running ap port${PORT }`));