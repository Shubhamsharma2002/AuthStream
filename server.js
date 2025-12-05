import 'dotenv/config';
import { server } from "./app.js";
import { ConnectDb } from './Database/dbConnection.js';

const port = process.env.PORT || 8000;

server.listen(port, () => {
    console.log(`Server is listening on port ${port} 🚀`);
    ConnectDb();
});
