const app = require("express")();
require("dotenv").config();
const cors = require('cors');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//connect to the database
connectDB();

//allow access from external origins
app.use(cors());

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//routes
app.use('/user', require('./routes/userRoute'));

mongoose.connection.once('open', () => {
    console.log('Database connection successful');
    app.listen(process.env.PORT || 8000, () =>
      console.log(`Server running on port ${process.env.PORT || 8000}`)
    );
})