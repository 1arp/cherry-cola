import { Router } from 'express'

const route = Router()


route.get('/', (req , res) => {

  res.send('hello world')
})


export default route