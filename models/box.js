const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = {
    updatePost
}

const boxSchema = new Schema({
    content: String,
    
})

function updatePost(id, box){
    postUpdate = findByIdAndUpdate(id)
    postUpdate.box = box
}

module.exports = mongoose.model('Box', boxSchema)