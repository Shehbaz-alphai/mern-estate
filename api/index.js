import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect()
const app = express(process.env.MONGO).then(() => {
    console.log('current to Monogodb!');
}).catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log("Server is runing on port 3000!");
}
);