import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 3000;

app.set('view engine', 'ejs')

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
    // res.render("../home.ejs", { message: "existsMessage" });
});

app.listen(PORT, () => {
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
});

module.exports = app;