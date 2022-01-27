// Import express
let express = require('express');
// Import Mongoose
let mongoose = require('mongoose');
// Import routes
let userRouter = require("./routers/userRouter");
let noteRouter = require("./routers/noteRouter");
// import global error middleware
let globalErrorHandler = require('./controllers/errorController');
// import app error class
const AppError = require('./utility/appError');

// Initialize the app
let app = express();

// Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));
// Middleware that'll convert incoming req data, adds that to body
app.use(express.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Routes
app.use('/api/users', userRouter);
app.use('/api/notes', noteRouter);
app.use('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
});
app.use(globalErrorHandler);
// Setup server port
let port = process.env.PORT || 8080;
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});