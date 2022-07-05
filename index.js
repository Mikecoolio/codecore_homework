const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())

app.use(express.urlencoded({extended: true}))

const methodOverride = require('method-override');

app.use(methodOverride((req, res) => {
  if (req.body && req.body.__method) {
    const method = req.body.__method
    return method
  }
}))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use((req,res, next) => {
    const username = req.cookies.username || '';
  
    res.locals.username = username;
    next();
  })

app.get('/', (req, res) => {
    res.render('home')
})

// const cohortRouter = require("./routes/cohortRouter")
// app.use("/cohorts", cohortRouter)

const PORT = 6464
const HOST = 'localhost'
app.listen(PORT, HOST, () => {
  console.log(`The server is listening at ${HOST}:${PORT}`);
})