import express from 'express';
import { router } from './routes';
import path from 'path';
import "./config/mongoose";
const app = express();   // setting express instance

app.use(express.urlencoded({ extended: true }));   // did parsing for proper request encoding
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));         // did setup for view engine views static files
app.use(express.static(path.join(__dirname, "static")));
app.use("/", router);

app.listen(8081, () => {
    console.log('listening on http://localhost:8081'); 
});