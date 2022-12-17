import {Schema, model} from "mongoose";

const UserSchema = new Schema({// criando Squema para o banco - collection
    email: String,//campos String, Boolean, Number...
});

export default model('User', UserSchema);//exportando o schema com nome User...