const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config')

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.mlab_user}:${config.mlab_pass}@ds113692.mlab.com:13692/mern`, { useNewUrlParser: true } );

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/index'))

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Server listening at ${port}`);