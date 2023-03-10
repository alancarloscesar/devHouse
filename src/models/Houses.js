import { model, Schema } from 'mongoose'


const HouseSchema = new Schema({

    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {//pegando id do user
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default model('House', HouseSchema)