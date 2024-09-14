import express from "express";
import "./models/index.js"
import router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router)

app.listen(port, () => {
    console.log(`server is running in ${port}`)
})