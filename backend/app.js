import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/form-routes.js'

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/api", router);


// UFOkfEJXczw6wfwR

mongoose.set('strictQuery', false);
mongoose.connect(
    'mongodb+srv://rajatsharma:UFOkfEJXczw6wfwR@cluster0.4zaoakv.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(()=>app.listen(5000))
    .then(()=>
        console.log('Database connected listening on 5000')
    )
    .catch((err)=>console.log(err))
;