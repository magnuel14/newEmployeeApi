const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

// Settings
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(morgan('dev'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/app', require('./src/routes/employee.routes'));

module.exports = app;