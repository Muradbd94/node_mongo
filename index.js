import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './src/route/user.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3000;

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
.then(function(){
    console.log("Connected to MongoDB");
})

app.use("/api/user", userRoute)
app.listen(port, function(req, res) {
console.log('server listening on port', port);
});


