const express = require('express')
const cors = require('cors')
const collection1 = require('./mongo')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/umar", async (req, res) => {
    try {
        const allData = await collection1.find({})
        res.send({ status: "ok", data: allData })
    } catch (error) {
        console.log(error)
    }
})
app.post("/umar", async (req, res) => {
    const { msg } = req.body
    const data = {
        msg: msg
    }
    await collection1.insertMany([data])
})
app.listen(8000, () => {
    console.log("port connected")
})