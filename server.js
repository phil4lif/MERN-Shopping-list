const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyparser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use((bodyParser.json));

//connect to mongodb with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernshoppinglist")
.then(()=> console.log("mongo connected"))
.catch(err => console.log(err))

//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`))