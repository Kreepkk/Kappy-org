import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { request, Server } from 'http';

const app = express();
app.use(express.json({ limit: "50mb" }));
const httpServer = new Server(app);
app.use(cors({
    origin: [
        "http://localhost:3000"
    ],
    credentials: true
}));
app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || "3000");
const HOST: string = process.env.IP || '127.0.0.1';

//////////////////////////////// Routes ////////////////////////////////////////
app.get("/", async (req: Request, res: Response) => {
    console.log("health check");
    res.status(200).json({
        message: "server is up!",
    });
});

app.listen(PORT);

console.log("please work");