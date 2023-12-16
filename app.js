const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3000

app.use(express.static('./'))

app.get('/health', (req, res) => {
  res.send('ok')
})
app.get('/version', (req, res) => {
  res.send('2')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 3000')
})
