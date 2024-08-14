// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/event-registration', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// // Event Schema
// const registrationSchema = new mongoose.Schema({
//     event_name: String,
//     user_name: String,
//     user_email: String,
// });

// const Registration = mongoose.model('Registration', registrationSchema);

// // Routes
// app.post('/register', (req, res) => {
//     const newRegistration = new Registration(req.body);
//     newRegistration.save()
//         .then(() => res.status(200).json('Registration successful'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
















const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv').config

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/event-registration', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });



mongoose.connect('mongodb+srv://sanjaynalamasa:9963324060%40@cluster0.c3msn.mongodb.net/event-registration?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});








const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Event Schema
const registrationSchema = new mongoose.Schema({
    event_name: String,
    user_name: String,
    user_email: String,
   
});

const Registration = mongoose.model('Registration', registrationSchema);

// Routes
app.post('/register', (req, res) => {
    const newRegistration = new Registration(req.body);
    newRegistration.save()
        .then(() => res.status(200).json('Registration successful'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});










