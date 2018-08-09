// server/app.js

/** require dependencies */
const express = require("express");
const routes = require('../routes');
const mongoose = require('mongoose');
// const cors = require('cors');
// const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const mongoUrl = "mongodb://localhost:27017/xiaBB";


/** connect to MongoDB datastore */
try {
    mongoose.connect(mongoUrl, { useNewUrlParser: true });
} catch (error) {
    console.log(error);
}

let port = 5000;

/** set up routes {API Endpoints} */
routes(router);

/** set up middlewares */
// app.use(cors());
// app.use(helmet());
app.use(bodyParser.json());

app.use('/', router);

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});