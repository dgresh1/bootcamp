const express  = require('express');
const bodyParser= require('body-parser');
const port = 8000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
const router = express.Router();
const routes = require('./routes/routes');
routes(app);
//
app.listen(port, () => console.log("Listening " + port));
