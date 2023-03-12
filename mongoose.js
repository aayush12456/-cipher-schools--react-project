const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/react-tube").then(() => {
    console.log('Connected')
})
    .catch(() => {
        console.log('failed')
    })
const newSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: true
    }
})
const collection = mongoose.model("collection", newSchema)
module.exports = collection