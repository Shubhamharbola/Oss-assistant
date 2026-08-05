import express from "express";
import router from "./routes/index.js";
import testroute from'./routes/index.js'
const Port = process.env.PORT || 8000;
const app = express();


app.use('/',testroute);

app.listen(Port,()=>{
    console.log(`Running ${Port}`);
})
