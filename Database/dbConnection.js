import mongoose from "mongoose";
// uri in .env
const uri = process.env.URI;

const ConnectDb = () => {
  mongoose
    .connect(uri, {
      dbName: "MERN_AUTH",
    })
    .then(() => {
      console.log("Db connection sucessfully");
    })
    .catch((err) => {
      console.log("getting error while connecteed to db", err);
    });
};

export { ConnectDb };
