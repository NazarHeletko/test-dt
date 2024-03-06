require('dotenv').config()
const cors = require('cors');

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors({ origin: "*"}));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const usersRouter = require('./routes/users.js')


app.use('/users', usersRouter)

app.listen(3001, () => console.log('Server Started'))
