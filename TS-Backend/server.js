const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();


require('dotenv').config();




require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());




const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});