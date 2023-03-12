const express = require('express')
const cors = require('cors')
const collection = require('./mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", async (req, res) => {
    try {
        const allData = await collection.find({})
        res.send({ status: "ok", data: allData })
    } catch (error) {
        console.log(error)
    }
})
app.post("/", async (req, res) => {
    const { msg } = req.body
    const data = {
        msg: msg
    }
    await collection.insertMany([data])
})
app.listen(8000, () => {
    console.log("port connected")
})