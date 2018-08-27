/** require dependencies */
const express = require("express");
const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
const bodyParser = require('body-parser');
const config = require('./config');
var morgan = require('morgan');
const app = express();
const mongoUrl = config.database;


/** connect to MongoDB datastore */
try {
    mongoose.connect(mongoUrl, {useNewUrlParser: true});
} catch (error) {
    console.log(error);
}

let port = 5000;



/** set up middlewares */
// app.use(cors());
// app.use(helmet());
app.use(bodyParser.json());
//serve static content
app.use(express.static('../public'));
//welcome page
app.get('/', function (req, res) {
    res.sendfile('index.html', {root: __dirname + "/public"});
});

//login routers
const login = require('../routes/loginSignup');
const loginRouter = express.Router();
login(loginRouter);
app.use('/', loginRouter);

/** set up routes {API Endpoints} */
const router = express.Router();
const routes = require('../routes/routers');
routes(router);
app.use('/api', router);

// use morgan to log requests to the console
app.use(morgan('dev'));


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});