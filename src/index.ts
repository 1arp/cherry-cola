require('module-alias/register')
import 'source-map-support/register'
import app from "./app"


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
