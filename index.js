const express = require('express')
const app = express()
const port = 3000


app.get('/users', (req, res) => {
    res.json('hello world')
})
app.get('/users/:id', (req, res) => {
    res.json(`Клиент запрашивает юзера с номером ${req.params.id}`)
})
app.post('/users/:id', (req, res) => {
    res.json("юзер добавлен")
})
app.delete('/users/:id', (req, res) => {
    res.json(`юзер с ID ${req.params.id} удален`)
})
app.patch('/users/:id', (req, res) => {
    res.json(`Юзер с ID ${req.params.id} изменен`)
})
app.get('/admin', (req, res) => {
    res.json('не хвотает прав доступа')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})