if(process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')
const express = require('express')
const router = require('./routes/index')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`listen in port ${port}`);
})
