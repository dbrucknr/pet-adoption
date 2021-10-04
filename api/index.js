const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routes
require('./routes/user.routes')(app);
require('./routes/auth.routes')(app);

app.listen(8000, ()=> {
    console.log('API Active')
})
