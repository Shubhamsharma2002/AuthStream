import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ConnectDb } from "./Database/dbConnection.js";
import ErrorHandler from "./Middleware/Error.js";

const server = express();



server.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// database 
ConnectDb();
// error handler
server.use(ErrorHandler)

export { server };
