import express from 'express';
import 'express-async-errors'
import {json} from 'body-parser'
import mongoose from 'mongoose';
import { currentuserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signupRouter } from './routes/signup';
import { signoutRouter } from './routes/signout';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json())

app.use(errorHandler);
app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

const start = async() =>{
    try {
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth")
    } catch (error) {
        console.error(error)
    }
    app.listen(3000, ()=>{
        console.log("Listening on 3000 version 3")
    })
}

start()