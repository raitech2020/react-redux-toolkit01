const express = require("express")
const {json} = require("body-parser")
const cors = require("cors")
const {contacts} = require("./contacts")

const app = express()
app.use(json())
app.use(cors())
const port = 8000

app.get("/", (req, res) => {
    res.send(`Server is running at ${port}`)
})

app.get("/contacts", (req, res) => {
    res.send(contacts)
})

app.listen(port, () => {
    console.log(`server started at ${port}`)
})
