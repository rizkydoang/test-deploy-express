import express, { Express, Request, Response } from "express";
import * as path from "path"

const app: Express = express();
const PORT = 3000;

// app.set('view engine', 'ejs')
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    // res.render("../test.ejs", { message: "existsMessage" });
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.listen(PORT, () => {
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
});

module.exports = app;