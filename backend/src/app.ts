import express, { Application } from 'express';
import { Rotas } from './routes';

class App {

    server: Application
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }


    private middleware() {
        this.server.use(express.json())
    }

    private routes() {
        this.server.use(Rotas.routes())
    }

}


export default new App().server