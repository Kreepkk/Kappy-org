import express, { json, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(json());
app.use(cors({
    origin: [
        "http://localhost:8080"
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

app.listen(3000);

console.log("please work");