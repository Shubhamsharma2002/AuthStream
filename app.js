import 'dotenv/config';
import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";

const server = express();

dotenv.config({ path: './.env' });
server.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        margin: ["GET", "POST" , "PUT", "DELETE"],
        credentials:true
})
);
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({extended:true}));

export {server}