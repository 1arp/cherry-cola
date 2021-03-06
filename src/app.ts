
import express from 'express'
import apiRoute from '~/routes/api'

export const app = express()

app.use('/api', apiRoute)

app.use('/',(req,res) => {
  res.send('hello world')
})


export default app