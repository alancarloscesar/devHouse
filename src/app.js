import express from 'express';
import routes from './routes'
import mongoose from 'mongoose';
import cors from 'cors'

class App {

    constructor() {
        this.server = express();

        mongoose.set("strictQuery", true);//desativando o warning do mongoose

        mongoose.connect('mongodb+srv://devhouse:admindevhouse@devhouse.1clj0b8.mongodb.net/devhouse?retryWrites=true&w=majority', {
            useNewUrlParser: false,
            useUnifiedTopology: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors())
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }


}

export default new App().server