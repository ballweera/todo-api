const express = require('express')
const app = express()

let todos = [
    {
        name: 'Ball',
        id: 1
    },
    {
        name: 'Weera',
        id: 2
    }
]

// SELECT * FROM TODO
app.get('/todos', (req, res) => {
    res.send(todos)
})

// INSERT INTO TODO
app.post('/todos', (req, res) => {
    let newTodo = {
        name: 'Read a book',
        id: 3
    }

    todos.push(newTodo)
    res.status(201).send()
})

app.listen(3000, () => {
    console.log('TODO API Started at port 3000')
})