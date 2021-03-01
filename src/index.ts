require('module-alias/register')
import express from 'express'
import apiRoute from '~/routes/api'

const PORT = process.env.PORT || 8080

const app = express()

app.use('/api', apiRoute)

app.use('/',(req,res) => {
  res.send('hello world')
})


app.listen(PORT,()=>{
  console.log(`server started on port ${PORT}`)
})