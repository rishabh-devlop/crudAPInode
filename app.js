require('./config/config');
require('./models/employee');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');




var employeeController = require('./controllers/employeeController.js');




var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/employees', employeeController);


//error handler




// start server
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));