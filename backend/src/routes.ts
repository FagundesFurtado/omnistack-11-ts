import express, { Router, Request, Response } from 'express';

export class Rotas {
    public static routes(): Router {
        const router = express.Router();
        router.post('/users', (req: Request, res: Response) => {
            res.json({ ok: 1 })
        })

        return router;
    }

}