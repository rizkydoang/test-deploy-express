import express, { Express, Request, Response } from "express";
import * as path from "path"
import { CommentServer } from "./server";

const app: Express = express();
const PORT = 3000;

// app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.post('/comment', CommentServer.addComment);
app.get('/comment', CommentServer.getComments);

app.listen(PORT, () => {
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
});

module.exports = app;