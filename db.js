const mongoose = require("momgoose");
require('dotenv').config()
const connection = momgoose.connect(process.env.MONGO_URL)


module.exports = {connection}